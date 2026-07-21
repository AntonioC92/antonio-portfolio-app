/**
 * Vite SSR prerender — no Puppeteer required.
 * Runs on Cloudflare Pages build environment (Node.js only).
 *
 * Flow:
 *  1. vite build (client bundle → dist/)            ← done by caller
 *  2. vite build --ssr entry-server.tsx             ← this script does it
 *  3. For each route: render to string, inject into dist/index.html template
 *  4. Write sitemap.xml
 */

import { build } from 'vite';
import { mkdir, readFile, readdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir       = path.resolve(__dirname, '..');
const distDir       = path.resolve(rootDir, 'dist');
const serverDistDir = path.resolve(rootDir, 'dist-server');
const resourcesDir  = path.resolve(rootDir, 'src/content/resources');
const siteUrl       = 'https://carusomartech.com';

const STATIC_ROUTES = [
  '/',
  '/work',
  '/services',
  '/about',
  '/insights',
  '/privacy-policy',
];

// ─── helpers ────────────────────────────────────────────────────────────────

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};
  const header = raw.slice(3, end).trim();
  const fm = {};
  header.split('\n').forEach((line) => {
    const sep = line.indexOf(':');
    if (sep === -1) return;
    const key   = line.slice(0, sep).trim();
    const value = line.slice(sep + 1).trim().replace(/^["'](.*)["']$/, '$1');
    fm[key] = value;
  });
  return fm;
}

async function getResources() {
  let files;
  try {
    files = await readdir(resourcesDir);
  } catch {
    return [];
  }
  const resources = [];
  for (const file of files.filter((f) => f.endsWith('.md'))) {
    const raw = await readFile(path.join(resourcesDir, file), 'utf8');
    const fm  = parseFrontmatter(raw);
    if (!fm.slug) continue;
    resources.push({
      slug:        fm.slug,
      date:        fm.date ?? '',
      lastUpdated: fm.lastUpdated ?? fm.date ?? '',
    });
  }
  return resources.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function outputPathForRoute(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(distDir, clean, 'index.html');
}

function buildSitemap(resources) {
  const staticUrls = [
    { loc: `${siteUrl}/`,                      changefreq: 'weekly',  priority: '1.0' },
    { loc: `${siteUrl}/work/`,                 changefreq: 'monthly', priority: '0.9' },
    { loc: `${siteUrl}/services/`,             changefreq: 'monthly', priority: '0.9' },
    { loc: `${siteUrl}/about/`,               changefreq: 'monthly', priority: '0.8' },
    { loc: `${siteUrl}/insights/`,              changefreq: 'weekly',  priority: '0.8' },
    { loc: `${siteUrl}/privacy-policy/`,       changefreq: 'yearly',  priority: '0.3' },
  ];
  const resourceUrls = resources.map((r) => ({
    loc:        `${siteUrl}/insights/${r.slug}/`,
    lastmod:    r.lastUpdated,
    changefreq: 'monthly',
    priority:   '0.7',
  }));
  const entries = [...staticUrls, ...resourceUrls].map((u) => {
    const parts = ['  <url>', `    <loc>${u.loc}</loc>`];
    if (u.lastmod) parts.push(`    <lastmod>${u.lastmod}</lastmod>`);
    parts.push(`    <changefreq>${u.changefreq}</changefreq>`);
    parts.push(`    <priority>${u.priority}</priority>`);
    parts.push('  </url>');
    return parts.join('\n');
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

// ─── main ───────────────────────────────────────────────────────────────────

async function run() {
  // 1. Build SSR bundle
  console.log('📦  Building SSR bundle…');
  await build({
    root: rootDir,
    build: {
      ssr:    path.resolve(rootDir, 'src/entry-server.tsx'),
      outDir: serverDistDir,
      // Use .mjs so Node.js 18 treats the output as ESM without needing
      // "type": "module" in package.json.
      rollupOptions: { output: { format: 'esm', entryFileNames: '[name].mjs' } },
    },
    logLevel: 'warn',
  });

  // 2. Load render function from SSR bundle
  const serverEntry = pathToFileURL(
    path.join(serverDistDir, 'entry-server.mjs')
  ).href;
  const { render } = await import(serverEntry);

  // 3. Load HTML template produced by client build
  const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

  // 4. Collect routes
  const resources = await getResources();
  const routes = [
    ...STATIC_ROUTES,
    ...resources.map((r) => `/insights/${r.slug}`),
  ];

  // 5. Render each route
  let ok = 0;
  let failed = 0;
  for (const route of routes) {
    try {
      const { html, styleTags, headTags } = render(route);

      const page = template
        .replace('<!--app-html-->', html)
        .replace('<!--app-head-->', headTags ? `${headTags}\n    ${styleTags}` : styleTags);

      const out = outputPathForRoute(route);
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, page, 'utf8');
      ok++;
      console.log(`  ✓  ${route}`);
    } catch (err) {
      failed++;
      console.warn(`  ⚠  ${route} — skipped (${err.message})`);
    }
  }

  // 6. Sitemap
  await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemap(resources), 'utf8');

  // 7. Clean up server bundle
  await rm(serverDistDir, { recursive: true, force: true });

  console.log(`\n✅  Prerender complete — ${ok} rendered, ${failed} skipped as SPA fallback.`);
}

run().catch((err) => {
  // Never fail the build — site still works as a React SPA without prerender.
  // ErrorBoundary + firstElementChild hydration fix keep the site visible.
  console.warn('\n⚠️  Prerender step failed entirely:', err.message);
  console.warn('Site deploys as a standard React SPA (Google still indexes it via JS rendering).');
});

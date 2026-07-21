/**
 * Verification:
 * 1) run npm run build
 * 2) open dist/index.html and at least one /resources/insights/<slug>/index.html
 * 3) confirm the page content exists inside #root
 * 4) deploy and confirm View Page Source contains the prerendered HTML.
 */

import http from 'node:http';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';

const PORT = 4173;
const TIMEOUT_MS = 30000;
const BLOCKED_DOMAINS = [
  'googletagmanager.com',
  'google-analytics.com',
  'js.hsforms.net',
  'static.cloudflareinsights.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const distIndexPath = path.resolve(distDir, 'index.html');
const resourcesDir = path.resolve(__dirname, '../src/content/resources');
const siteUrl = 'https://carusomartech.com';

const STATIC_ROUTES = [
  '/',
  '/work',
  '/privacy-policy',
  '/resources',
  '/resources/insights',
];

function shouldBlock(url) {
  try {
    const hostname = new URL(url).hostname;
    return BLOCKED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) => {
      return handler(request, response, {
        public: distDir,
        rewrites: [{ source: '**', destination: '/index.html' }],
      });
    });

    server.once('error', reject);
    server.listen(PORT, () => resolve(server));
  });
}

async function stopServer(server) {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    throw new Error('Resource file must start with frontmatter block');
  }

  const boundary = '\n---';
  const end = raw.indexOf(boundary, 3);

  if (end === -1) {
    throw new Error('Resource file frontmatter is not closed');
  }

  const header = raw.slice(3, end).trim();
  const frontmatter = {};

  header.split('\n').forEach((line) => {
    const separator = line.indexOf(':');
    if (separator === -1) return;
    const key = line.slice(0, separator).trim();
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^"(.*)"$/, '$1')
      .replace(/^'(.*)'$/, '$1');

    frontmatter[key] = value;
  });

  return frontmatter;
}

async function getResourceMetadata() {
  const files = await readdir(resourcesDir);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));
  const resources = [];

  for (const file of markdownFiles) {
    const raw = await readFile(path.join(resourcesDir, file), 'utf8');
    const frontmatter = parseFrontmatter(raw);

    if (!frontmatter.slug) continue;

    resources.push({
      slug: frontmatter.slug,
      date: frontmatter.date,
      lastUpdated: frontmatter.lastUpdated ?? frontmatter.date,
    });
  }

  return resources.sort((left, right) => (
    new Date(right.date).getTime() - new Date(left.date).getTime()
  ));
}

function getOutputPathForRoute(route) {
  if (route === '/') {
    return distIndexPath;
  }

  const normalizedRoute = route.replace(/^\/+|\/+$/g, '');
  return path.join(distDir, normalizedRoute, 'index.html');
}

async function writeRouteHtml(route, html) {
  const outputPath = getOutputPathForRoute(route);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, 'utf8');
}

function buildSitemapXml(resources) {
  const staticUrls = [
    { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${siteUrl}/work/`, changefreq: 'monthly', priority: '0.9' },
    { loc: `${siteUrl}/privacy-policy/`, changefreq: 'yearly', priority: '0.3' },
    { loc: `${siteUrl}/resources/`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${siteUrl}/resources/insights/`, changefreq: 'weekly', priority: '0.8' },
  ];

  const resourceUrls = resources.map((resource) => ({
    loc: `${siteUrl}/resources/insights/${resource.slug}/`,
    lastmod: resource.lastUpdated,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const urls = [...staticUrls, ...resourceUrls];
  const entries = urls.map((url) => {
    const parts = [
      '  <url>',
      `    <loc>${url.loc}</loc>`,
    ];

    if (url.lastmod) {
      parts.push(`    <lastmod>${url.lastmod}</lastmod>`);
    }

    parts.push(`    <changefreq>${url.changefreq}</changefreq>`);
    parts.push(`    <priority>${url.priority}</priority>`);
    parts.push('  </url>');
    return parts.join('\n');
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

async function run() {
  // Cloudflare Pages build environment does not have the system libraries
  // required to run Puppeteer. Skip prerendering there — the Vite build
  // output is still deployed; SSR prerendering only runs locally.
  if (process.env.CF_PAGES) {
    console.log('ℹ️  CF_PAGES detected — skipping Puppeteer prerender (not supported in Cloudflare build environment).');
    return;
  }

  let server;
  let browser;

  try {
    await readFile(distIndexPath);
    const resources = await getResourceMetadata();
    const routes = [
      ...STATIC_ROUTES,
      ...resources.map((resource) => `/resources/insights/${resource.slug}`),
    ];

    server = await startServer();

    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (shouldBlock(request.url())) {
        request.abort();
        return;
      }
      request.continue();
    });

    for (const route of routes) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded' });

      await page.waitForFunction(
        () => {
          const root = document.querySelector('#root');
          return !!root && (root.textContent || '').trim().length > 50;
        },
        { timeout: TIMEOUT_MS }
      );

      await page.evaluate(() => {
        document
          .querySelectorAll('script[src*="googletagmanager.com/gtm.js"]')
          .forEach((script) => script.remove());
      });

      const html = await page.content();
      await writeRouteHtml(route, html);
    }

    await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemapXml(resources), 'utf8');
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`⚠️  Prerender skipped: ${message}`);
    console.warn('Site will deploy without server-side prerendering (React SPA still works fine).');
    // Do NOT set process.exitCode = 1 — prerender failure must never break the build.
  } finally {
    if (browser) {
      await browser.close();
    }
    if (server) {
      await stopServer(server);
    }
  }

}

run();

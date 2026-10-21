/**
 * Generates the branded 1200x627 share image (og:image) for every Insight
 * article: public/og/<slug>.jpg. Run locally, then commit the images.
 *
 *   npm run og            → only articles that don't have an image yet
 *   npm run og -- --force → regenerate every image
 *
 * Runs locally with Puppeteer (devDependency). It is NOT part of the
 * Cloudflare build: prerender.mjs stays Puppeteer-free and falls back to
 * /preview.png for any article whose image hasn't been generated.
 */

import puppeteer from 'puppeteer';
import { access, mkdir, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const resourcesDir = path.join(rootDir, 'src/content/resources');
const outDir = path.join(rootDir, 'public/og');
const force = process.argv.includes('--force');

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return {};
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return {};
  const fm = {};
  raw.slice(3, end).trim().split('\n').forEach((line) => {
    const sep = line.indexOf(':');
    if (sep === -1) return;
    fm[line.slice(0, sep).trim()] = line.slice(sep + 1).trim().replace(/^["'](.*)["']$/, '$1');
  });
  return fm;
}

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const exists = (file) => access(file).then(() => true, () => false);

async function fontBase64(pkg, file) {
  const buf = await readFile(path.join(rootDir, 'node_modules/@fontsource-variable', pkg, 'files', file));
  return buf.toString('base64');
}

async function run() {
  const template = (await readFile(path.join(__dirname, 'og/template.html'), 'utf8'))
    .replace('__MONTSERRAT_B64__', await fontBase64('montserrat', 'montserrat-latin-wght-normal.woff2'))
    .replace('__OPENSANS_B64__', await fontBase64('open-sans', 'open-sans-latin-wght-normal.woff2'));

  await mkdir(outDir, { recursive: true });
  const files = (await readdir(resourcesDir)).filter((f) => f.endsWith('.md'));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 627, deviceScaleFactor: 1 });

  let made = 0;
  for (const file of files) {
    const fm = parseFrontmatter(await readFile(path.join(resourcesDir, file), 'utf8'));
    if (!fm.slug || !fm.title) continue;
    const out = path.join(outDir, `${fm.slug}.jpg`);
    if (!force && (await exists(out))) continue;

    const html = template
      .replace('__CATEGORY__', escapeHtml(fm.category ?? ''))
      .replace('__HEADLINE__', escapeHtml(fm.title))
      .replace('__SUBLINE__', escapeHtml(fm.description ?? fm.metaDescription ?? ''));

    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: out, type: 'jpeg', quality: 85 });
    made++;
    console.log(`  ✓  og/${fm.slug}.jpg`);
  }

  await browser.close();
  console.log(`\n${made} share image(s) generated.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const assetVersion = '2';
const pages = [];
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) pages.push(path);
  }
}
visit(root);
for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  const updated = html.includes('/assets/locale.js')
    ? html.replace(/\/assets\/locale\.(css|js)(?:\?v=[^"']+)?(?=["'])/g, (_, extension) => `/assets/locale.${extension}?v=${assetVersion}`)
    : html.replace('</head>', `\n  <link rel="stylesheet" href="/assets/locale.css?v=${assetVersion}" />\n  <script defer src="/assets/locale.js?v=${assetVersion}"></script>\n  </head>`);
  if (updated !== html) writeFileSync(path, updated);
}
console.log(`Locale assets linked in ${pages.length} HTML pages.`);

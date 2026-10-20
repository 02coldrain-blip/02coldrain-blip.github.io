import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
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
  if (html.includes('/assets/locale.js')) continue;
  writeFileSync(path, html.replace('</head>', '\n  <link rel="stylesheet" href="/assets/locale.css" />\n  <script defer src="/assets/locale.js"></script>\n  </head>'));
}
console.log(`Locale assets linked in ${pages.length} HTML pages.`);

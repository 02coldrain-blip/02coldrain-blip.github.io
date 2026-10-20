import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://thatsparallel.space";
const homeDescription = "PARALLEL is an independent creative production studio making AI video, campaign images and finished ads for brands, real estate, furniture and hotels.";
const categoryMeta = {
  "real-estate": ["AI Real Estate Films & Visualizations | PARALLEL", "Scripted AI films and architectural visualizations for unbuilt real estate developments. See PARALLEL's concept, scene creation and finished edits."],
  furniture: ["AI Furniture Videos & Images | PARALLEL", "Furniture product visuals and short AI videos focused on materials, interiors and distinctive settings. Explore PARALLEL's studio work."],
  brands: ["AI Brand Videos & Campaign Images | PARALLEL", "Short AI videos and campaign imagery for products, beauty, fashion and sport. Explore PARALLEL's independent creative concepts."],
  hotels: ["AI Hotel Social Videos & Reels | PARALLEL", "AI-generated hotel social reels showing guest stories, rooms, atmosphere and everyday experiences. Explore PARALLEL's hospitality work."],
};
const categoryLabels = { "real-estate": "Real Estate", furniture: "Furniture", brands: "Brands", hotels: "Hotel Stories" };

function text(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, " ").trim();
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function escapeXml(value) {
  return escapeHtml(value).replaceAll("'", "&apos;");
}

function setMeta(html, attribute, value) {
  const selector = attribute.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*(" \\/>)`);
  if (!pattern.test(html)) throw new Error(`Missing ${attribute}`);
  return html.replace(pattern, (_, before, after) => before + escapeHtml(value) + after);
}

function addJsonLd(html, graph) {
  const payload = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replaceAll("<", "\\u003c");
  html = html.replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, "");
  return html.replace("</head>", `\n  <script type="application/ld+json">${payload}</script>\n  </head>`)
    .replace(/\n[ \t]+\n(?=  <script type="application\/ld\+json">)/, "\n");
}

const entries = [];
async function collect(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const target = path.join(dir, item.name);
    if (item.isDirectory()) await collect(target);
    else if (item.name === "index.html") entries.push(target);
  }
}
await collect(path.join(root, "work"));
entries.unshift(path.join(root, "index.html"));

const runtimeMeta = {};
const sitemapEntries = [];
for (const file of entries) {
  let html = await readFile(file, "utf8");
  const route = path.relative(root, path.dirname(file)).split(path.sep).join("/");
  const pathname = route ? `/${route}/` : "/";
  const url = origin + pathname;
  const categoryKey = route.startsWith("work/category/") ? route.split("/")[2] : null;
  const project = route.startsWith("work/") && !categoryKey && route !== "work";
  const heading = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const summary = text(html.match(/<p class="project-summary">([\s\S]*?)<\/p>/)?.[1] ?? "");
  const detail = text(html.match(/<div class="project-story">[\s\S]*?<p class="body-copy">([\s\S]*?)<\/p>/)?.[1] ?? "");
  const back = html.match(/class="text-link project-back" href="\/work\/category\/([^"]+)"/)?.[1];
  const poster = html.match(/<video[^>]*poster="([^"]+)"/)?.[1];
  const video = html.match(/<source src="([^"]+\.mp4)"/)?.[1];
  const still = project && !poster ? html.match(/<figure[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"/)?.[1] : null;
  let title, description;
  if (!route) {
    title = "AI Video & Image Production Studio | PARALLEL";
    description = homeDescription;
  } else if (route === "work") {
    title = "AI Video & Image Portfolio | PARALLEL";
    description = "Explore PARALLEL's AI video and image portfolio: real estate films, furniture visuals, brand concepts and hotel social reels.";
  } else if (categoryKey) {
    [title, description] = categoryMeta[categoryKey];
  } else {
    const sector = back === "real-estate" ? "AI Real Estate Film" : back === "furniture" ? (video ? "AI Furniture Video" : "AI Furniture Image") : back === "hotels" ? "AI Hotel Social Video" : "AI Brand Video";
    title = `${heading.replace(/\s+/g, " ").toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase())}: ${sector} | PARALLEL`;
    description = route === "work/development-architecture-film"
      ? "Script-led AI film visualizing an unbuilt development. PARALLEL created the environments and shots without source footage or visual assets."
      : route === "work/development-arrival-film"
        ? "A scripted arrival film for an unbuilt development. PARALLEL created and animated the hospitality and interior scenes from the supplied script."
        : `${summary} ${detail.split(/(?<=\.)\s/)[0]}`.trim();
  }
  if (!title || !description) throw new Error(`Missing SEO content: ${route}`);
  runtimeMeta[pathname.replace(/\/$/, "") || "/"] = { title, description };

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = setMeta(html, 'name="description"', description);
  html = setMeta(html, 'property="og:title"', title);
  html = setMeta(html, 'property="og:description"', description);
  html = setMeta(html, 'name="twitter:title"', title);
  html = setMeta(html, 'name="twitter:description"', description);
  if (poster || still) {
    const image = origin + (poster || still);
    html = setMeta(html, 'property="og:image"', image);
    html = setMeta(html, 'name="twitter:image"', image);
    html = setMeta(html, 'property="og:image:alt"', `${heading} — PARALLEL project visual`);
    html = html.replace(/^.*<meta property="og:image:(?:width|height)".*\r?\n/gm, "");
  }
  html = html.replace(/<link rel="canonical" href="[^"]*" \/><meta property="og:url" content="[^"]*" \/>/, `<link rel="canonical" href="${url}" /><meta property="og:url" content="${url}" />`);
  if (!html.includes('<meta name="robots"')) html = html.replace(/(<meta name="description"[^>]+\/>)\s*/, '$1\n    <meta name="robots" content="index, follow, max-image-preview:large" />\n    ');

  const graph = [];
  if (!route) {
    graph.push({ "@type": "Organization", "@id": `${origin}/#organization`, name: "PARALLEL", url: `${origin}/`, description: homeDescription, email: "work@thatsparallel.space", sameAs: ["https://www.instagram.com/thatsparallel/"] });
    graph.push({ "@type": "WebSite", "@id": `${origin}/#website`, name: "PARALLEL", url: `${origin}/`, publisher: { "@id": `${origin}/#organization` } });
  } else {
    const crumbs = [{ name: "Home", item: `${origin}/` }, { name: "Work", item: `${origin}/work/` }];
    if (categoryKey) crumbs.push({ name: categoryLabels[categoryKey], item: url });
    if (project) {
      crumbs.push({ name: categoryLabels[back], item: `${origin}/work/category/${back}/` });
      crumbs.push({ name: heading, item: url });
    }
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, ...crumb })) });
    if (project) graph.push({ "@type": "CreativeWork", name: heading, description, url, image: origin + (poster || still), creator: { "@id": `${origin}/#organization` } });
  }
  html = addJsonLd(html, graph);
  await writeFile(file, html, "utf8");
  sitemapEntries.push({ url, title: heading || title, description, poster, video });
}

const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">'];
for (const entry of sitemapEntries) {
  xml.push(`  <url><loc>${escapeXml(entry.url)}</loc>`);
  if (entry.video) xml.push(`    <video:video><video:thumbnail_loc>${escapeXml(origin + entry.poster)}</video:thumbnail_loc><video:title>${escapeXml(entry.title)}</video:title><video:description>${escapeXml(entry.description)}</video:description><video:content_loc>${escapeXml(origin + entry.video)}</video:content_loc></video:video>`);
  xml.push("  </url>");
}
xml.push("</urlset>");
await writeFile(path.join(root, "sitemap.xml"), xml.join("\n") + "\n", "utf8");

for (const name of ["index-ByvSNv6Y.js", "index-real-estate-20261019.js"]) {
  const file = path.join(root, "assets", name);
  let source = await readFile(file, "utf8");
  const old = 'document.title=r?`${r.title} — PARALLEL`:i?`${i.label} — PARALLEL`:l===`/work`?`Selected work — PARALLEL`:l===`/`?`PARALLEL — AI Creative Production Studio`:`Page not found — PARALLEL`;let a=r?.summary||i?.description||(l===`/`?`PARALLEL is an independent creative studio. AI video and images, bold ideas and complete advertising production for brands.`:`The page you’re looking for isn’t here. Return to PARALLEL.`)';
  const replacement = `let seoMeta=${JSON.stringify(runtimeMeta)}[l];document.title=seoMeta?.title||\`Page not found — PARALLEL\`;let a=seoMeta?.description||\`The page you’re looking for isn’t here. Return to PARALLEL.\``;
  if (source.includes(old)) source = source.replace(old, replacement);
  else {
    const start = source.indexOf("let seoMeta=");
    const end = source.indexOf(";if(document.querySelector", start);
    if (start < 0 || end < 0) throw new Error(`Runtime metadata pattern changed: ${name}`);
    source = source.slice(0, start) + replacement + source.slice(end);
  }
  source = source.replace('t.href=`${Cr.canonicalUrl.replace(/\\/$/,``)}${l}`', 't.href=`${Cr.canonicalUrl.replace(/\\/$/,``)}${l===`/`?`/`:`${l}/`}`');
  await writeFile(file, source, "utf8");
}

console.log(`Updated SEO metadata, structured data and sitemap for ${sitemapEntries.length} pages.`);

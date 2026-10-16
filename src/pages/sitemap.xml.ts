import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../consts';

// Every static .astro page is picked up automatically; dynamic routes
// ([...slug] etc.) are listed from their content collection below.
const pageFiles = Object.keys(import.meta.glob('./**/*.astro')).filter((f) => !f.includes('['));

/** './index.astro' → '/', './privacy.astro' → '/privacy/', './blog/index.astro' → '/blog/' */
function toRoute(file: string): string {
  const path = file.replace(/^\./, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
  return path ? `${path}/` : '/';
}

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const postDate = (p: (typeof posts)[number]) => p.data.updatedDate ?? p.data.pubDate;
  const newestPost = posts.map(postDate).sort((a, b) => b.valueOf() - a.valueOf())[0];

  // lastmod only where we have a real date — a made-up one teaches Google to ignore it.
  const entries: { loc: string; lastmod?: Date }[] = [
    ...pageFiles.map(toRoute).map((route) => ({
      loc: `${SITE_URL}${route}`,
      lastmod: route === '/blog/' ? newestPost : undefined,
    })),
    ...posts.map((post) => ({ loc: `${SITE_URL}/blog/${post.id}/`, lastmod: postDate(post) })),
  ].sort((a, b) => a.loc.localeCompare(b.loc));

  const urls = entries
    .map(({ loc, lastmod }) =>
      `  <url><loc>${escape(loc)}</loc>${lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}</url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

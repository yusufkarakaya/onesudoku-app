import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '../consts';
import { everyLanguage, PREFIXED_LANGS, type Alternate } from '../i18n/ui';
import { postLang, postPath, translationsOf } from '../lib/blog';

// Every static .astro page is picked up automatically; dynamic routes
// ([lang], [...slug]) are listed explicitly below.
const pageFiles = Object.keys(import.meta.glob('./**/*.astro')).filter((f) => !f.includes('['));

/** './index.astro' → '/', './privacy.astro' → '/privacy/', './blog/index.astro' → '/blog/' */
function toRoute(file: string): string {
  const path = file.replace(/^\./, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
  return path ? `${path}/` : '/';
}

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Pages that exist in every language. */
const TRANSLATED_ROUTES = ['/', '/blog/'];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const postDate = (p: (typeof posts)[number]) => p.data.updatedDate ?? p.data.pubDate;
  const newestIn = (lang: string) =>
    posts
      .filter((p) => postLang(p) === lang)
      .map(postDate)
      .sort((a, b) => b.valueOf() - a.valueOf())[0];

  // lastmod only where we have a real date — a made-up one teaches Google to ignore it.
  const entries: { loc: string; lastmod?: Date; alternates: Alternate[] }[] = [
    ...pageFiles.map(toRoute).map((route) => ({
      loc: route,
      lastmod: route === '/blog/' ? newestIn('en') : undefined,
      alternates: TRANSLATED_ROUTES.includes(route) ? everyLanguage(route) : [],
    })),
    ...PREFIXED_LANGS.flatMap((lang) =>
      TRANSLATED_ROUTES.map((route) => ({
        loc: `/${lang}${route}`,
        lastmod: route === '/blog/' ? newestIn(lang) : undefined,
        alternates: everyLanguage(route),
      })),
    ),
    ...posts.map((post) => ({ loc: postPath(post), lastmod: postDate(post), alternates: translationsOf(post, posts) })),
  ].sort((a, b) => a.loc.localeCompare(b.loc));

  const urls = entries
    .map(({ loc, lastmod, alternates }) => {
      const links =
        alternates.length > 1
          ? [...alternates, ...alternates.filter((a) => a.lang === 'en').map((a) => ({ ...a, lang: 'x-default' }))]
              .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${escape(SITE_URL + a.path)}"/>`)
              .join('')
          : '';
      const date = lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
      return `  <url><loc>${escape(SITE_URL + loc)}</loc>${date}${links}${links ? '\n  ' : ''}</url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

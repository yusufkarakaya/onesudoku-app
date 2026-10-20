import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LANG, isLang, localizePath, type Alternate, type Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/**
 * Translations live in a folder named for their language
 * (`src/content/blog/tr/sudoku-nasil-oynanir.md` → id `tr/sudoku-nasil-oynanir`);
 * English posts sit at the top level.
 */
export function postLang(post: Post): Lang {
  const [first, ...rest] = post.id.split('/');
  return rest.length > 0 && isLang(first) ? first : DEFAULT_LANG;
}

/** The last path segment, which is the post's URL slug in its own language. */
export function postSlug(post: Post): string {
  return post.id.split('/').pop()!;
}

/** Ties a translation to its English original: the English post's id. */
export function postKey(post: Post): string {
  return post.data.translationKey ?? post.id;
}

export function postPath(post: Post): string {
  return localizePath(`/blog/${postSlug(post)}/`, postLang(post));
}

const newestFirst = (a: Post, b: Post) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.data.title.localeCompare(b.data.title);

/** Every post in one language, newest first (ties by title, so the order is stable). */
export async function getPosts(lang: Lang = DEFAULT_LANG): Promise<Post[]> {
  return (await getCollection('blog')).filter((p) => postLang(p) === lang).sort(newestFirst);
}

/** Every version of a post, for hreflang and the language menu. */
export function translationsOf(post: Post, all: Post[]): Alternate[] {
  const key = postKey(post);
  return all.filter((p) => postKey(p) === key).map((p) => ({ lang: postLang(p), path: postPath(p) }));
}

/**
 * Where to link a post from a page in `lang`: its translation if there is one,
 * otherwise the English original.
 */
export async function localizedPostPath(key: string, lang: Lang): Promise<string> {
  const all = await getCollection('blog');
  const match =
    all.find((p) => postKey(p) === key && postLang(p) === lang) ??
    all.find((p) => p.id === key);
  return match ? postPath(match) : `/blog/${key}/`;
}

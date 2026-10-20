import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE_URL } from '../consts';
import { getPosts, postPath } from '../lib/blog';

export const GET: APIRoute = async () => {
  // English only: the feed declares one language, and the translations are
  // reached through hreflang instead.
  const posts = await getPosts('en');

  return rss({
    title: 'One Sudoku Blog',
    description:
      'Writing about sudoku: how the puzzle works, the techniques worth learning, and what a daily solve is actually good for.',
    site: SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
    })),
    customData: '<language>en-us</language>',
  });
};

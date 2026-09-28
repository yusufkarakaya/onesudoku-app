import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '../consts';

// Plain-text summary for language models (https://llmstxt.org).
// Keep every claim here in line with the homepage copy — nothing it doesn't already say.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const body = `# One Sudoku

> One Sudoku is a free, minimal sudoku game for iPhone, iPad, and Android, and a free sudoku you can play online in the browser. Four difficulty levels, a daily challenge, and unlimited offline puzzles, with no account required.

Key facts:

- Price: free to download and play, supported by minimal banner ads and optional rewarded video ads for extra hints.
- Platforms: iPhone and iPad (App Store), Android phones and tablets (Google Play), and any web browser at ${SITE_URL}/play/
- Difficulty levels: Easy, Medium, Hard, and Expert.
- Daily Challenge: one puzzle a day, the same for every player worldwide, with a streak for solving it each day.
- Offline: the apps generate puzzles on the device and need no internet connection.
- Accounts: optional. Everything can be played as a guest; signing in with Google, Apple, or email syncs progress and streaks across devices.
- Features: candidate notes, unlimited undo, auto-save, hints, light and dark themes.

## Pages

- [Home](${SITE_URL}/): Overview of the One Sudoku app, screenshots, how to play, and FAQ.
- [Play online](${SITE_URL}/play/): Play classic sudoku free in the browser — no sign-up, no download. Easy, Medium, Hard and Expert puzzles with notes, hints, undo and auto-save.
- [Blog](${SITE_URL}/blog/): Writing about sudoku: how the puzzle works, the techniques worth learning, and what a daily solve is actually good for.
- [Support](${SITE_URL}/support/): Help and frequently asked questions about the app.
- [Privacy policy](${SITE_URL}/privacy/): What data the apps and website collect and why.
- [Delete your account](${SITE_URL}/delete-account/): How to delete a One Sudoku account and all associated data.

## Blog

${posts.map((p) => `- [${p.data.title}](${SITE_URL}/blog/${p.id}/): ${p.data.description}`).join('\n')}

## Download

- [One Sudoku on the App Store](${APP_STORE_URL})
- [One Sudoku on Google Play](${PLAY_STORE_URL})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

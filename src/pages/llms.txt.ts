import type { APIRoute } from 'astro';
import { SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from '../consts';
import { LANG_META, PREFIXED_LANGS } from '../i18n/ui';
import { getPosts, postPath } from '../lib/blog';

// Plain-text summary for language models (https://llmstxt.org).
// Keep every claim here in line with the homepage copy — nothing it doesn't already say.
export const GET: APIRoute = async () => {
  const posts = await getPosts('en');

  const body = `# One Sudoku

> One Sudoku is a free, minimal sudoku game for iPhone, iPad, and Android. Classic, Killer, and Rescue sudoku, the Haunted Manor Halloween puzzle, a daily challenge, and unlimited offline puzzles, with no account required.

Key facts:

- Price: free to download and play, supported by minimal banner ads and optional rewarded video ads for extra hints. An optional Premium removes all ads, refills hints every game, and adds a monthly report: $0.99 a month, $9.99 a year, or $29.99 once (US prices).
- Platforms: iPhone and iPad (App Store), Android phones and tablets (Google Play)
- Game modes: Classic sudoku; Killer sudoku, where cages with sums replace the given numbers; and Rescue, where the player takes over a badly solved puzzle and fixes it.
- Difficulty levels: Classic has Easy, Medium, Hard, and Expert. Killer and Rescue have their own levels.
- Haunted Manor: a Halloween logic puzzle alongside the sudoku modes. The player hides one ghost on every row, column, and coloured room, with no two ghosts touching. Three sizes: Cottage, Manor, and Castle.
- Daily Challenge: one puzzle a day, the same for every player worldwide, with a streak for solving it each day.
- Offline: the apps generate puzzles on the device and need no internet connection.
- Accounts: optional. Everything can be played as a guest; signing in with Google, Apple, or email syncs progress and streaks across devices.
- Features: candidate notes, unlimited undo, auto-save, hints, light and dark themes.

## Pages

- [Home](${SITE_URL}/): Overview of the One Sudoku app, screenshots, how to play, and FAQ.
- [Blog](${SITE_URL}/blog/): Writing about sudoku: how the puzzle works, the techniques worth learning, and what a daily solve is actually good for.
- [Support](${SITE_URL}/support/): Help and frequently asked questions about the app.
- [Privacy policy](${SITE_URL}/privacy/): What data the apps and website collect and why.
- [Delete your account](${SITE_URL}/delete-account/): How to delete a One Sudoku account and all associated data.

## Blog

${posts.map((p) => `- [${p.data.title}](${SITE_URL}${postPath(p)}): ${p.data.description}`).join('\n')}

## Other languages

The home page, blog and core guides are also published in ${PREFIXED_LANGS.map((l) => LANG_META[l].name).join(', ')}. The app itself is in English.

${PREFIXED_LANGS.map((l) => `- [${LANG_META[l].name}](${SITE_URL}/${l}/)`).join('\n')}

## Download

- [One Sudoku on the App Store](${APP_STORE_URL})
- [One Sudoku on Google Play](${PLAY_STORE_URL})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

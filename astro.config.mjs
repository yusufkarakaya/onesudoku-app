// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { SITE_URL } from './src/consts';

import preact from '@astrojs/preact';

// https://astro.build/config
// The sitemap is a single hand-rolled endpoint: src/pages/sitemap.xml.ts
export default defineConfig({
  site: SITE_URL,
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()]
  }
});

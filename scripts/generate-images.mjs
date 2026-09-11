/**
 * Rasterizes the SVG sources in public/ into the PNGs the site references.
 *
 * Social scrapers (Facebook, X, LinkedIn, Slack, iMessage) do not render SVG
 * OG images, and Google rejects SVG for Organization.logo — so these PNGs are
 * required, not a nicety. Run `npm run generate:images` after editing either
 * SVG, then commit the output.
 *
 * sharp comes in via Astro's image service; no extra dependency needed.
 */
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const publicDir = path.resolve(fileURLToPath(new URL('../public', import.meta.url)));

/** density lifts the rasterization DPI so text and strokes stay crisp when upscaled. */
const targets = [
  { from: 'og-image.svg', to: 'og-image.png', width: 1200, height: 630, density: 144 },
  { from: 'favicon.svg', to: 'apple-touch-icon.png', width: 180, height: 180, density: 384 },
  { from: 'favicon.svg', to: 'icon-192.png', width: 192, height: 192, density: 384 },
  { from: 'favicon.svg', to: 'icon-512.png', width: 512, height: 512, density: 768 },
  { from: 'favicon.svg', to: 'logo-512.png', width: 512, height: 512, density: 768 },
];

for (const { from, to, width, height, density } of targets) {
  const svg = await fs.readFile(path.join(publicDir, from));
  await sharp(svg, { density })
    .resize(width, height, { fit: 'contain', background: { r: 5, g: 46, b: 22, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, to));
  console.log(`${from} -> ${to} (${width}x${height})`);
}

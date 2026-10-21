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

/**
 * Frames the app's home screen as a phone for the hero and "look inside".
 *
 * scripts/home-screen.png is a raw iPhone 17 Pro simulator capture (1206x2622):
 * status bar overridden to 9:41, ads off, the Expo dev button hidden. It lives
 * outside public/ because only the framed result is served. Re-shoot it when the
 * home screen changes; the frame is drawn here so a capture is all it takes.
 *
 * The screen gets rounded display corners and sits in a near-black bezel, all at
 * source scale, then the whole phone is downscaled once.
 */
const screen = { width: 1206, height: 2622, radius: 165 };
const bezel = 36;

const shotsDir = path.join(publicDir, 'screenshots');
await fs.mkdir(shotsDir, { recursive: true });

const roundedRect = (w, h, r, fill) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
       <rect width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}"/>
     </svg>`,
  );

// sharp composites after resizing whatever the call order, so the mask has to be
// applied to the full-size capture in its own pass before the downscale.
const roundedScreen = await sharp(new URL('./home-screen.png', import.meta.url).pathname)
  .composite([{ input: roundedRect(screen.width, screen.height, screen.radius, '#fff'), blend: 'dest-in' }])
  .png()
  .toBuffer();

const phone = { width: screen.width + 2 * bezel, height: screen.height + 2 * bezel };
const framed = await sharp(roundedRect(phone.width, phone.height, screen.radius + bezel, '#0b0d0c'))
  .composite([{ input: roundedScreen, left: bezel, top: bezel }])
  .png()
  .toBuffer();

const { width, height } = await sharp(framed)
  .resize(720)
  .webp({ quality: 82 })
  .toFile(path.join(shotsDir, 'home.webp'));

console.log(`home-screen.png -> screenshots/home.webp (${width}x${height})`);

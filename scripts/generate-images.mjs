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
 * Crops the phone out of the App Store hook image into a reusable screenshot.
 *
 * appstore-1-hook.png is a marketing card: a framed device sitting on a green
 * background, with a headline baked in above it. The site needs the device on
 * its own, over both the dark hero and the white "look inside" section — so the
 * background outside the frame's rounded top corners has to become transparent,
 * or it shows up as green wedges.
 *
 * Frame bounds were measured off the source pixels, not eyeballed: the frame
 * spans x 132..1187 and starts at y 645, reaching full width by y 740 — so the
 * corner radius is ~95px. The device runs off the bottom edge of the source, so
 * the bottom corners are square by construction.
 */
const phone = { left: 132, top: 645, width: 1056, radius: 95 };
phone.height = 2868 - phone.top;

const shotsDir = path.join(publicDir, 'screenshots');
await fs.mkdir(shotsDir, { recursive: true });

/** Rounded on top, flush at the bottom — matches how the device is cropped. */
const cornerMask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${phone.width}" height="${phone.height}">
     <path d="M0 ${phone.radius}
              A ${phone.radius} ${phone.radius} 0 0 1 ${phone.radius} 0
              H ${phone.width - phone.radius}
              A ${phone.radius} ${phone.radius} 0 0 1 ${phone.width} ${phone.radius}
              V ${phone.height} H 0 Z" fill="#fff"/>
   </svg>`,
);

// sharp composites after resizing whatever the call order, so the mask has to be
// applied to the full-size crop in its own pass before the downscale.
const masked = await sharp(path.join(publicDir, 'appstore-1-hook.png'))
  .extract({ left: phone.left, top: phone.top, width: phone.width, height: phone.height })
  .composite([{ input: cornerMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const { width, height } = await sharp(masked)
  .resize(720)
  .webp({ quality: 82 })
  .toFile(path.join(shotsDir, 'home.webp'));

console.log(`appstore-1-hook.png -> screenshots/home.webp (${width}x${height})`);

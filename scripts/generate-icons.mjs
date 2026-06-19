import sharp from 'sharp';
import { writeFileSync } from 'fs';

const src = 'src/assets/logo/logo.png';

const pngSizes = [
  // Android Chrome — múltiples densidades
  { size: 36,  name: 'android-chrome-36x36.png' },
  { size: 48,  name: 'android-chrome-48x48.png' },
  { size: 72,  name: 'android-chrome-72x72.png' },
  { size: 96,  name: 'android-chrome-96x96.png' },
  { size: 144, name: 'android-chrome-144x144.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 256, name: 'android-chrome-256x256.png' },
  { size: 384, name: 'android-chrome-384x384.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  // Windows / Edge tiles (fondo blanco)
  { size: 70,  name: 'mstile-70x70.png',   bg: { r: 255, g: 255, b: 255, alpha: 1 } },
  { size: 144, name: 'mstile-144x144.png',  bg: { r: 255, g: 255, b: 255, alpha: 1 } },
  { size: 150, name: 'mstile-150x150.png',  bg: { r: 255, g: 255, b: 255, alpha: 1 } },
  { size: 310, name: 'mstile-310x310.png',  bg: { r: 255, g: 255, b: 255, alpha: 1 } },
];

async function run() {
  // Iconos estándar
  for (const s of pngSizes) {
    const bg = s.bg ?? { r: 0, g: 0, b: 0, alpha: 0 };
    await sharp(src)
      .resize(s.size, s.size, { fit: 'contain', background: bg })
      .png()
      .toFile(`public/${s.name}`);
    console.log(`✅  ${s.name}`);
  }

  // Maskable icon 512×512 — zona segura con padding 20% y fondo de marca
  const brand = { r: 34, g: 85, b: 34, alpha: 1 };
  const padded = Math.round(512 * 0.8); // 410 px logo dentro del safe area
  const pad = Math.round((512 - padded) / 2); // 51 px padding cada lado
  await sharp(src)
    .resize(padded, padded, { fit: 'contain', background: brand })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: brand })
    .png()
    .toFile('public/maskable-icon-512x512.png');
  console.log('✅  maskable-icon-512x512.png');

  // og-image 1200×630 para Open Graph / Twitter Card
  const logoBuffer = await sharp(src)
    .resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: { r: 22, g: 60, b: 22, alpha: 1 } },
  })
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');
  console.log('✅  og-image.jpg');

  // Safari Pinned Tab SVG (monocromo negro)
  const svgContent = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">',
    '  <circle cx="256" cy="256" r="240" fill="black"/>',
    '  <text x="256" y="345" text-anchor="middle"',
    '    font-family="Georgia, serif" font-weight="bold"',
    '    font-size="310" fill="white">A</text>',
    '</svg>',
  ].join('\n');
  writeFileSync('public/safari-pinned-tab.svg', svgContent, 'utf-8');
  console.log('✅  safari-pinned-tab.svg');

  console.log('\n🎉  All icons generated!');
}

run().catch((e) => { console.error(e.message); process.exit(1); });

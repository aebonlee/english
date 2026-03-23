/**
 * OG Image Generator — PNG 1200×630
 * Uses sharp to render SVG → PNG with system Korean fonts
 */
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = resolve(__dirname, '..', 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0046C8"/>
      <stop offset="50%" style="stop-color:#002E8A"/>
      <stop offset="100%" style="stop-color:#1E3A5F"/>
    </linearGradient>
    <linearGradient id="hl" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#93C5FD"/>
      <stop offset="100%" style="stop-color:#FFFFFF"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="150" cy="500" r="200" fill="rgba(255,255,255,0.03)"/>
  <circle cx="1050" cy="130" r="250" fill="rgba(255,255,255,0.03)"/>
  <circle cx="600" cy="315" r="350" fill="rgba(255,255,255,0.02)"/>

  <!-- Logo box -->
  <rect x="460" y="120" width="64" height="64" rx="14" fill="#4A8FE7"/>
  <text x="492" y="165" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="800" text-anchor="middle">E</text>
  <text x="540" y="162" fill="#FFFFFF" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="700" text-anchor="start">nglish Pro</text>

  <!-- Divider line -->
  <rect x="440" y="220" width="320" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>

  <!-- Title -->
  <text x="600" y="290" fill="#FFFFFF" font-family="Malgun Gothic, Apple SD Gothic Neo, NanumGothic, sans-serif" font-size="54" font-weight="800" text-anchor="middle" letter-spacing="-0.5">실용 영어 마스터</text>

  <!-- Subtitle -->
  <text x="600" y="350" fill="rgba(255,255,255,0.85)" font-family="Malgun Gothic, Apple SD Gothic Neo, NanumGothic, sans-serif" font-size="22" font-weight="400" text-anchor="middle">비즈니스 영어 · 일상 회화 · TOEIC · AI 학습</text>

  <!-- Stats row -->
  <!-- Words -->
  <text x="210" y="460" fill="url(#hl)" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" text-anchor="middle">2,300+</text>
  <text x="210" y="492" fill="rgba(255,255,255,0.55)" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-size="14" text-anchor="middle">단어</text>

  <!-- Divider dot -->
  <circle cx="340" cy="475" r="3" fill="rgba(255,255,255,0.2)"/>

  <!-- Lessons -->
  <text x="460" y="460" fill="url(#hl)" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" text-anchor="middle">36+</text>
  <text x="460" y="492" fill="rgba(255,255,255,0.55)" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-size="14" text-anchor="middle">페이지</text>

  <!-- Divider dot -->
  <circle cx="590" cy="475" r="3" fill="rgba(255,255,255,0.2)"/>

  <!-- Categories -->
  <text x="720" y="460" fill="url(#hl)" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" text-anchor="middle">9</text>
  <text x="720" y="492" fill="rgba(255,255,255,0.55)" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-size="14" text-anchor="middle">학습 모듈</text>

  <!-- Divider dot -->
  <circle cx="850" cy="475" r="3" fill="rgba(255,255,255,0.2)"/>

  <!-- AI -->
  <text x="980" y="460" fill="url(#hl)" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="700" text-anchor="middle">AI</text>
  <text x="980" y="492" fill="rgba(255,255,255,0.55)" font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" font-size="14" text-anchor="middle">영어 학습</text>

  <!-- Bottom URL -->
  <text x="600" y="580" fill="rgba(255,255,255,0.45)" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="400" text-anchor="middle">english.dreamitbiz.com</text>
</svg>`;

async function generate() {
  try {
    const buf = await sharp(Buffer.from(svg))
      .png({ quality: 95, compressionLevel: 6 })
      .toBuffer();

    writeFileSync(OUTPUT, buf);
    const kb = (buf.length / 1024).toFixed(1);
    console.log(`✅ OG image generated: ${OUTPUT} (${kb} KB)`);
  } catch (err) {
    console.error('❌ Failed:', err.message);
    process.exit(1);
  }
}

generate();

/**
 * Masks public/icon.png to a circle (transparent outside).
 * Re-run after replacing the square source asset.
 */
import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const iconPath = join(__dirname, '..', 'public', 'icon.png')

const inputBuf = readFileSync(iconPath)
const meta = await sharp(inputBuf).metadata()
const w = meta.width
const h = meta.height
if (!w || !h) throw new Error('Could not read icon dimensions')

const r = Math.min(w, h) / 2
const cx = w / 2
const cy = h / 2
const svg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="white"/>` +
    `</svg>`
)

const out = await sharp(inputBuf)
  .ensureAlpha()
  .composite([{ input: svg, blend: 'dest-in' }])
  .png()
  .toBuffer()

writeFileSync(iconPath, out)
console.log(`Circular mask applied: ${w}x${h}`)

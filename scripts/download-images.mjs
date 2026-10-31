// Downloads the photos listed in public/images/vision/README.md and stores them as WebP.
// Existing files are skipped, so it can be re-run after a partial failure.
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readme = readFileSync(join(root, "public/images/vision/README.md"), "utf8");
const outDir = resolve(process.argv[2] || join(root, "public/images/vision"));
const ids = [...new Set([...readme.matchAll(/photos\/(\d+)\//g)].map((m) => m[1]))];

// Slider images are kept wider than the rest; keep in sync with HERO in src/lib/site.ts.
const HERO = new Set(["8082312", "8134762", "13752348"]);

async function download(id) {
  const file = join(outDir, `pexels-photo-${id}.webp`);
  if (existsSync(file)) return "skipped";
  const width = HERO.has(id) ? 2400 : 1600;
  const res = await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=${width}`, {
    headers: { "User-Agent": "Mozilla/5.0" },
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  await sharp(Buffer.from(await res.arrayBuffer()))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(file);
  return "saved";
}

mkdirSync(outDir, { recursive: true });
let failed = 0;
for (const id of ids) {
  try {
    console.log(`${id}: ${await download(id)}`);
  } catch (error) {
    failed++;
    console.error(`${id}: FAILED (${error.cause?.code || error.message})`);
  }
}
console.log(`${ids.length - failed}/${ids.length} images ready in ${outDir}`);
if (failed) {
  console.error("Pexels may be blocked on this network: turn on a VPN and run this again.");
  process.exit(1);
}

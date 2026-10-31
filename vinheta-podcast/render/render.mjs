// Grava a vinheta quadro a quadro com o Chrome e monta o MP4 com ffmpeg.
// Uso (com o site servido em http://localhost:5510):
//   node render.mjs --name podcriar-vinheta  -> ../podcriar-vinheta-16x9.mp4
//   ... --v 9x16                             -> versão vertical
//   node render.mjs --stills 1,2.5  -> PNGs desses instantes em ./stills (para conferir)
//   --name podcriar                 -> usa ../podcriar.html e grava ../podcriar-16x9.mp4
import { chromium } from "playwright-core";
import ffmpegPath from "ffmpeg-static";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";

const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > -1 ? process.argv[i + 1] : d; };
const v = arg("v", "16x9");
const fps = Number(arg("fps", 30));
const stills = arg("stills");
const name = arg("name", "podcriar-vinheta");
const base = arg("url", `http://localhost:5510/vinheta-podcast/${name}.html`);
const [W, H] = v === "9x16" ? [1080, 1920] : [1920, 1080];

const chrome = ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(existsSync);
const browser = await chromium.launch({ executablePath: chrome, args: ["--force-color-profile=srgb", "--hide-scrollbars"] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto(`${base}?render${v === "9x16" ? "&v=9x16" : ""}`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
const duration = await page.evaluate(() => window.__duration);
const shot = async (t) => { await page.evaluate((t) => window.__seek(t), t); return page.screenshot({ type: "png" }); };

if (stills) {
  mkdirSync("stills", { recursive: true });
  for (const t of stills.split(",").map(Number)) writeFileSync(`stills/${name}-${v}-${t.toFixed(2)}.png`, await shot(t));
  console.log("stills ok");
} else {
  const out = `../${name}-${v}.mp4`;
  const ff = spawn(ffmpegPath, ["-y", "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out], { stdio: ["pipe", "ignore", "inherit"] });
  const total = Math.round(duration * fps) + 1;
  for (let f = 0; f < total; f++) {
    const buf = await shot(f / fps);
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (f % 30 === 0) process.stdout.write(`\r${f}/${total}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
  console.log(`\n${out} (${total} quadros, ${duration.toFixed(2)} s)`);
}
await browser.close();

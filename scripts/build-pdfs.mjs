/**
 * Regenerates the two download files in public/ from the running site.
 *
 *   npx astro dev --port 4321     # or any base URL
 *   npm run pdf
 *
 * JS is disabled while printing so the scroll-reveal tweens never hide content
 * and Lenis never interferes with the page layout.
 */
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:4321";

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({ javaScriptEnabled: false });
const page = await context.newPage();

await page.goto(`${base}/cv`, { waitUntil: "networkidle" });
await page.pdf({
  path: "public/deny-rianto-cv.pdf",
  format: "A4",
  printBackground: true,
});

/* The portfolio is laid out for 1440px; A4 landscape at 0.78 fits it. */
await page.goto(`${base}/`, { waitUntil: "networkidle" });
await page.pdf({
  path: "public/deny-rianto-portfolio.pdf",
  landscape: true,
  format: "A4",
  scale: 0.78,
  printBackground: true,
});

await browser.close();
console.log("wrote public/deny-rianto-cv.pdf and public/deny-rianto-portfolio.pdf");

import pw from "./node_modules/playwright/index.js";
const { chromium } = pw;
const browser = await chromium.launch();
for (const width of [1440, 390]) {
  const page = await (await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 900 } })).newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1600);
  const plate = page.locator("[data-carousel]").first();
  await plate.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  const next = '[data-carousel] [data-carousel-step="1"]';
  // three rapid steps: 1 -> 2 -> 1 -> 2, 55ms apart
  await page.click(next);
  await page.waitForTimeout(55);
  await page.click(next);
  await page.waitForTimeout(55);
  await page.click(next);
  await page.waitForTimeout(900);
  await page.evaluate(() => document.querySelector("[data-carousel]").scrollIntoView({ block: "center" }));
  await page.waitForTimeout(400);
  const state = await page.evaluate(() => {
    const p = document.querySelector("[data-carousel]");
    return {
      status: p.querySelector("[data-carousel-status]").textContent.trim(),
      slides: [...p.querySelectorAll("[data-slide]")].map((s) => {
        const cs = getComputedStyle(s);
        return { op: cs.opacity, vis: cs.visibility, x: cs.transform };
      }),
    };
  });
  await plate.screenshot({ path: `/tmp/opencode/shots/rapid2-${width}.png` });
  console.log(width, JSON.stringify({ state, errors }));
  await page.context().close();
}
await browser.close();

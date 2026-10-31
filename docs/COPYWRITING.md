# Portfolio — Copywriting

Every user-facing string for the site, final unless marked *(draft)*.
Facts restricted to `docs/CV.md`. Structure from `docs/PLAN.md`. Design from `docs/DESIGN.md`.

---

## 0. Voice

**Register:** a printed profile in a design annual — declarative, dry, first-name-basis. Not a résumé, not a sales page.

Rules:
1. Short declaratives. One idea per sentence. Full stop beats a comma splice.
2. Verbs do the work: *built, shipped, integrated, deployed, owned, maintained*. Not *was responsible for*.
3. Concrete nouns only — Go, PostgreSQL, Coolify, SatuSehat. No abstractions standing in for facts.
4. No adjectives about himself. "Detail-oriented", "passionate", "innovative" never appear.
5. Numbers only where the CV has them: 2 years, 90%, 35%, 3.88, 815.
6. Sentence case for running text; ALL CAPS only in Canopee display and micro-labels.
7. No exclamation marks anywhere. The display banners state their section and stop.

Banned words: passionate, leverage, seamless, cutting-edge, journey, dynamic, robust, synergy, ninja, rockstar,
"results-driven", "proven track record". They date the page and say nothing.

---

## 1. Navigation

| Slot | Copy |
|---|---|
| Header left | `Semarang, ID` |
| Header center | `Deny Rianto, Fullstack Engineer` |
| Menu items | `Work` · `About` · `Stack` · `Experience` · `Contact` |
| Section anchors | `#work` `#about` `#stack` `#experience` `#contact` |
| Skip link (a11y) | `Skip to content` |

No "Home" item — the wordmark is the home link.

---

## 2. Opening strip

**Display (Canopee, 65–86px) — this is the page's only `<h1>`, carrying the `#work` section label:**

> BUILT, SHIPPED.

**Portrait:** left slot, 4:5, 0px radius. Placeholder art until a real photo exists.

**Subhead (Editorial New 17px) — professional profile, not a project count:**

> Fullstack engineer in Semarang, Indonesia. Two years shipping web and mobile products end to end. Schema, API, container, deploy.

**Downloads (text links under the subhead, `download` attribute):**

| Label | File |
|---|---|
| `Download CV (PDF)` | `/resume.pdf` |
| `Portfolio (PDF)` | `/deny-rianto-portfolio.pdf` |

---

## 3. Work section

Nine cards. Visuals are off: every card renders a hairline rule and a stack kicker (`NEXT`, `GO`, `INERTIA`,
`JAVA`, `LARAVEL`, `EXPO`, then `MV3` on the three tools). A card with more than one picture cycles them inside its plate.

### Card 1 — Katresna Creations
- **Title:** `Katresna Creations`
- **Description:** A digital service platform built end to end: Strapi content, Next.js SSR for search visibility, PostgreSQL, S3-compatible media. Ships through a self-hosted pipeline behind a Docker reverse proxy — the unglamorous infrastructure that keeps a small product online.
- **Metadata:** `Product Engineer · Katresna · 2025–Present`
- **Link label:** `katresna.web.id`
- **Visual:** none for now — stack kicker only (assets kept, unreferenced)

### Card 2 — National Competition Platform
- **Title:** `National Competition Platform`
- **Description:** Go services, a Nuxt and Tailwind interface, PostgreSQL, and Docker deploys. Delivered ahead of schedule, with external vendor APIs integrated end to end. Two vendors, one contract, no excuses in the retro.
- **Metadata:** `Fullstack & DevOps · Azura Labs · 2025–Present`
- **Visual:** none for now — stack kicker only (assets kept, unreferenced)

### Card 3 — National Competition System
- **Title:** `National Competition System`
- **Description:** Sole developer on a national competition system: Laravel, Inertia.js, and React — 90% complete in the first week, vendor APIs wired in end to end. Frontend and backend work cut overall app speed by 90%.
- **Metadata:** `Hybrid Fullstack Engineer & IT Lead · ID Career · Sept 2026 – Present`
- **Visual:** none for now — stack kicker only (assets kept, unreferenced)

### Card 4 — Ministry Portal
- **Title:** `Ministry Portal — Maintenance & Features`
- **Description:** Sole bugfix owner through the maintenance window, then 35% of feature delivery. Java Spring Boot, jQuery, Bootstrap. Maintenance teaches what the original author meant, not what he wrote.
- **Metadata:** `Fullstack Engineer · Azura Labs · 2025–Present`
- **Visual:** none (NDA) — stack kicker only

### Card 5 — SatuSehat Hospital Integration
- **Title:** `SatuSehat Hospital Integration`
- **Description:** A hospital feature wired into Indonesia’s national health platform. Laravel, jQuery, Bootstrap. The integration was the work; the screen was the easy part.
- **Metadata:** `Fullstack Engineer · Azura Labs · 2025–Present`
- **Visual:** none (NDA) — stack kicker only

### Card 6 — Mobile App
- **Title:** `Cross-Platform Mobile App`
- **Description:** A cross-platform mobile app in React Native and Expo, delivered in sprint cycles within a remote Agile team. Held the API contract and data flow with backend engineers.
- **Metadata:** `Mobile Developer Intern · PT. Muri Digital Grup Internasional · 2025`
- **Visual:** none (NDA) — stack kicker only

### Card 7 — Histora
- **Title:** `Histora`
- **Description:** A browser extension that removes chosen pages from history as they load. Exact rules — domain, subdomain, keyword, path — a local audit log, and a scheduled re-check. No telemetry, no network requests, no remote code.
- **Metadata:** `Browser extension · Personal · 2026`
- **Link label:** `github.com/denyryn/histora`
- **Visual:** none — stack kicker `MV3`

### Card 8 — Web UI Commentator
- **Title:** `Web UI Commentator`
- **Description:** Point at any element on a page, leave a comment, and export a locator a coding agent can act on: selector, tag, text, geometry, URL. No screenshots, no DevTools, nothing leaves the browser.
- **Metadata:** `Browser extension · Personal · 2026`
- **Link label:** `github.com/denyryn/wecom`
- **Visual:** none — stack kicker `MV3`

### Card 9 — Authentia
- **Title:** `Authentia`
- **Description:** A TOTP authenticator in the toolbar: live codes, a vault encrypted behind a passcode, encrypted backups, and QR capture by framing the code on the page — no camera. Chromium MV3 and Firefox MV2.
- **Metadata:** `Browser extension · Personal · 2026`
- **Link label:** `github.com/denyryn/authentia`
- **Visual:** none — stack kicker `MV3`

### Media controls (only on cards with more than one image)
| Slot | Copy |
|---|---|
| Previous button (`aria-label`) | `Previous image` |
| Next button (`aria-label`) | `Next image` |
| Position counter (live region) | `1 / 3` — current image, then total |

---

## 4. Banner I

> SELECTED WORK

Decorative — `aria-hidden="true"`, no subtitle, no chip. It names the half of the page it closes; the
page's real `<h1>` is `BUILT, SHIPPED.` in the opening strip (§2).

---

## 5. About block

**Section label:** `ABOUT` — caption scale, uppercase, wide tracking. Same treatment as `STACK`,
`THE RECORD`, `PAPER TRAIL`; it is the section's `h2`, not a display headline.

**Canopee drop cap:** `D` (decorative, first letter of the name)

**Body, one column capped at ~65ch (58 of 60 words — cut before adding):**

> Deny Rianto builds systems end to end — schema and API through container and reverse proxy. Two years of production work across a national competition platform, a ministry portal, and a hospital integration with Indonesia’s national health data platform. Go, Laravel, Nuxt. AI coding agents draft roughly 80% of the code. He directs, reviews, integrates, and owns what ships.

**Byline beneath the body (Editorial New 17px, Charcoal):**

> Deny Rianto · fullstack engineer · Semarang, ID

The byline closes the paragraph it follows — there is no second column and no portrait in this block, so
nothing sits alone in an empty half. The title and city reach the document through the body and the byline,
not through a claim set in display type.

---

## 6. Banner II

> THE RECORD

Decorative, `aria-hidden="true"`, no subtitle. It opens the technical half of the page. The words repeat the
Experience section label (§8) deliberately — one names the half, the other marks its rows.

---

## 7. Stack section

**Section label:** `STACK`
**Kicker (Editorial New 16px, Charcoal):**

> Six languages. One deployment habit.

**Micro-line beneath (Editorial New 14px, Charcoal):**

> Ordered by use: CORE first, FAMILIAR last.

| Row label | Copy |
|---|---|
| `CORE` | `Go · Nuxt.js · Docker · Tailwind CSS · Laravel · Opencode · CI/CD` |
| `WORKING` | `Java Spring Boot · React · jQuery · Bootstrap · Git · Linux server administration · PostgreSQL · MySQL` |
| `FAMILIAR` | `TypeScript · Next.js · Express.js · Nest.js · Inertia.js · Redis · Dokploy · Coolify` |

Separator `·` throughout — never `/`, never commas inside a row (commas imply a sentence, dots imply a set).

---

## 8. Experience section

**Section label:** `THE RECORD`

Small kicker beneath: `Roles, newest first.`

### Row 1
- **Role:** `Hybrid Fullstack Engineer`
- **Org:** `Azura Labs`
- **Dates:** `Sept 2025 – Present`
- **Line:** Three engagements: national competition platform in Go and Nuxt, ministry project in Spring Boot, SatuSehat integration in Laravel. As project engineer lead, reviews others' code while shipping his own and takes over in-flight features.
- **Stack:** `Go · Nuxt.js · Tailwind CSS · PostgreSQL · Docker · Java Spring Boot · jQuery · Bootstrap · Laravel`

### Row 2
- **Role:** `Hybrid Fullstack Engineer & IT Lead`
- **Org:** `ID Career`
- **Dates:** `Sept 2026 – Present`
- **Line:** National competition system built on Laravel, Inertia.js, and React — 90% of the build in the first week, vendor APIs integrated alongside. As sole developer, frontend and backend work cut overall app speed by 90%.
- **Stack:** `Laravel · Inertia.js · React · REST API integration · Git`

### Row 3
- **Role:** `Remote Mobile Developer Intern`
- **Org:** `PT. Muri Digital Grup Internasional`
- **Dates:** `Apr – Jun 2025`
- **Line:** Cross-platform mobile delivery in a remote Agile team — sprint planning, daily stand-ups, and a shared API contract with the backend. Practiced cross-team communication and progress reporting.
- **Stack:** `React Native · Expo · Redux · Git`

### Earlier (caption line, no card)
> Earlier: curriculum content developer at Semarang State Polytechnic, writing WordPress and WooCommerce course modules (Oct – Dec 2024).

The overlapping `Sept 2025 – Present` (Azura) and `Sept 2026 – Present` (ID Career) rows are both genuine. Do not merge them, do not add an explanation on the page.

---

## 9. Credentials

**Section label:** `PAPER TRAIL`

Small kicker beneath: `Education, GPA, five certifications.`

**Left block:**

> **D4, Computer Engineering Technology**
> Semarang State Polytechnic · 2022–2026
> GPA 3.88 / 4.00

**Right block (rows, issuer + date in Charcoal caption):**

| Line | Caption |
|---|---|
| `TOEIC — 815` | `ETS · Jul 2026` |
| `Frontend Developer (React)` | `HackerRank · Jun 2025` |
| `Problem Solving (Basic)` | `HackerRank · Jun 2025` |
| `Oracle Database Programming SQL` | `Oracle Academy · Jul 2023` |
| `Oracle Database Design` | `Oracle Academy · May 2023` |

---

## 10. Contact / footer

**Banner III *(not built unless asked)*:** `SAY HI`

**Left column — link list, each label is the destination:**

| Label | href |
|---|---|
| `denyrianto@outlook.com` | `mailto:denyrianto@outlook.com` |
| `github.com/denyryn` | `https://github.com/denyryn` |
| `linkedin.com/in/denyrianto` | `https://linkedin.com/in/denyrianto` |
| `portfolio.rianto.site` | `https://portfolio.rianto.site` |

**Right column — stamp seal:**

| Field | Copy |
|---|---|
| Top caption | `THIS IS TO CERTIFY` |
| Signature line | handwritten-style `Deny Rianto` |
| Row 1 | `NAME` — `Deny Rianto` |
| Row 2 | `BASE` — `Semarang, ID` |
| Row 3 | `YEAR` — `2026` |

**Colophon (caption, centred, Charcoal):**

> Set in Bodoni Moda and Source Serif 4. Written, built, deployed, and maintained by one pair of hands.

**Copyright line:**

> © 2026 Deny Rianto. No cookies, no analytics, no tracking.

Only true if it is. If analytics is added later, cut the second sentence rather than soften it.

**Phone:** intentionally absent from the site. Do not add it back without a decision in `PLAN.md §11`.

---

## 11. SEO & social

**`<title>`**

> Deny Rianto — Fullstack Engineer & DevOps, Semarang

**Meta description (143 chars):**

> Fullstack engineer in Semarang, ID. Go, Laravel, Nuxt, PostgreSQL, Docker. Two years of government, healthcare, and competition systems — built end to end.

**OG title**

> Deny Rianto, Fullstack Engineer is

**OG image**

> `/images/og.jpg` — 1200×630, portrait centred on its own background.

**OG description**

> Two years of production web systems: Go, Laravel, Nuxt, PostgreSQL, Docker. Built end to end, deployed on self-hosted infrastructure.

**`Person` JSON-LD values**

| Field | Value |
|---|---|
| `name` | `Deny Rianto` |
| `jobTitle` | `Fullstack Engineer` |
| `address` | `Semarang, Central Java, Indonesia` |
| `email` | `denyrianto@outlook.com` |
| `alumniOf` | `Semarang State Polytechnic` |
| `sameAs` | GitHub, LinkedIn, `https://portfolio.rianto.site` |
| `knowsAbout` | `Go`, `Laravel`, `Nuxt.js`, `PostgreSQL`, `Docker`, `Java Spring Boot`, `React`, `TypeScript` |

---

## 12. Alt text

Alt text describes what is visible, not the project's value.

| Image | Alt |
|---|---|
| Portrait | `Stylised portrait of Deny Rianto against a warm parchment background.` |
| Katresna card | `Katresna Creations homepage: service listings on a cream background.` |
| Competition platform card | `Competition platform interface showing a leaderboard and bracket view.` |
| Ministry portal card | `Government ministry portal dashboard with data tables and navigation.` |
| SatuSehat card | `Hospital patient record screen with national health platform integration status.` |
| Mobile app card | `Cross-platform mobile app screens on a phone frame.` |
| Stamp seal | `Decorative postage stamp reading Deny Rianto, Semarang, 2026.` |
| Banner text | none — `aria-hidden`, decorative |

Write the real alt after the screenshot is chosen; the above are placeholders that already describe the intended shot.
Card plates render `alt=""` on purpose: the title, description, and metadata already say what the project is, and
the carousel announces position, so a description of the picture would only repeat the card. An empty `alt=""`
is correct for the banners and for the plates.

---

## 13. Length budget

Display type sets the budget. Anything that must be read at 300px+ has to survive being cut in half.

| Element | Target | Hard ceiling |
|---|---|---|
| Banner phrase | 2 words | 13 characters |
| Section headline (Canopee 65–86px) | 2–4 words | 5 words |
| Project description | 25–35 words | 40 words |
| Experience line | 20–30 words | 35 words |
| Bio paragraph | ~50 words | 60 words |
| Meta description | 140–150 chars | 155 chars |

---

## 14. Consistency ledger

Facts used, and where they come from — check this before publishing.

| Claim | CV source |
|---|---|
| 2 years of experience | Professional Summary |
| 90% of build in first week | ID Career bullet |
| 90% app speed improvement (solo) | ID Career bullet |
| 35% feature contribution | Azura Labs, item 2 |
| Project engineer lead — reviews others' code while shipping his own, takes over in-flight features | Azura Labs, item 4 |
| Delivered ahead of schedule | Azura Labs, item 1 |
| GPA 3.88/4.00 | Education |
| TOEIC 815 | Certifications |
| Katresna URL | Projects |
| All 5 project stack lists | Experience + Projects tech stack lines |
| Job titles and dates | Experience |
| 80% of delivery via AI agent harness (Opencode) | Technical Skills → Workflow |
| Histora, Web UI Commentator, Authentia — purpose, stack, browsers | Projects → Browser extensions |

Anything not in this table does not go on the page.

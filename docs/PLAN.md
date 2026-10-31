# Portfolio Site — Content & Structure Plan

> Source of truth: `docs/CV.md` (facts) + `docs/DESIGN.md` (Miranda broadsheet system).
> Deliverable of this plan: `docs/COPYWRITING.md` holds every user-facing string.
> Status: content plan only. No implementation decisions beyond what content forces.

---

## 1. Goal

One-page portfolio for **Deny Rianto — Fullstack Engineer / DevOps**, built in the Miranda
broadsheet style. Job: get a recruiter or hiring engineer from "who is this" to "email him"
in under 90 seconds, without a single claim the CV cannot back.

Two audiences, one page:

| Audience | What they scan for | Where it lives |
|---|---|---|
| Recruiter / HR (non-technical) | Current role, years, location, stack keywords, contact | Header, project cards, experience rows, footer |
| Engineer / tech lead | Real systems shipped, depth, deployment ownership, links | Project cards + description, stack tiers, Katresna URL |

---

## 2. Ground rules

1. **Nothing invented.** No frameworks, employers, clients, metrics, or URLs absent from `docs/CV.md`.
   Rephrasing, reordering, and emphasis are allowed. Additions are not.
2. Only two hard numbers may be used: *90% of the build shipped in week one* and *35% of feature work*
   (Azura Labs ministry project). Plus GPA 3.88 and TOEIC 815. No invented percentages, user counts, or revenue.
3. Client work with no public URL never gets a fake link or a fake product name.
4. Display type is the design. Copy must survive being set at 300–500px — headlines are 1–4 words, never sentences.
5. Bahasa Indonesia is out of scope; the CV is English and the audience is international. Keep one language.
6. **Voice may editorialise; facts may not.** A dry aside on a project card is allowed. A number, client, or technology that isn't in the CV is not. See `COPYWRITING.md §0` and the ledger in §14.

---

## 3. Information architecture

Single scrolling page. Order mirrors the Miranda layout rhythm: strip → grid → banner → about → banner → rows → footer.

| # | Section | Design component | Purpose |
|---|---|---|---|
| 1 | Header bar | Editorial Header Bar | Location, name, menu |
| 2 | Opening strip | Three-Column Section Header | portrait / `BUILT, SHIPPED.` — sets the broadsheet tone, carries the page's `h1` |
| 3 | Work grid | Project Grid Card ×9 | Six client and product builds, then three personal browser extensions |
| 4 | Banner I | Display Banner Block | **SELECTED WORK** — closes the work half of the page |
| 5 | About | Label + drop-cap paragraph | Who he is, where, what he does |
| 6 | Banner II | Display Banner Block | **THE RECORD** — announces the technical half |
| 7 | Stack | Project Metadata Row pattern (no new chart component) | Languages, frameworks, infra, tiers |
| 8 | Experience | Editorial rows (title / org / dates / byline) | 3 roles + 1 line of earlier work |
| 9 | Credentials | Caption block / Stamp Seal | Education, GPA, 5 certifications |
| 10 | Footer | Two-column text block + Stamp Seal | Contact, links, colophon |

**Cut for laziness:** no blog, no case-study detail pages, no contact form, no dark mode, no i18n.
A `mailto:` link beats a form for one person. Revisit only if a case-study page is explicitly requested.

---

## 4. Section specs

### 4.1 Header bar
- Left: `Semarang, ID` (Editorial New 19px/300).
- Center: `Deny Rianto, Fullstack Engineer`.
- Right: hamburger. Menu = anchor links: Work / About / Stack / Experience / Contact.
- 1px Ink Black bottom border, Parchment background. Sticky is optional; if sticky, keep it 1px and quiet.

### 4.2 Opening strip (portrait / profile)
- Left: portrait, 4:5, 0px radius, `--shadow-portrait`.
- Right: **BUILT, SHIPPED.** in Canopee 65–86px, line-height 0.91.
- Subhead (Editorial New 17px): `Fullstack engineer in Semarang, Indonesia. Two years shipping web and mobile products end to end. Schema, API, container, deploy.`
- This strip introduces the person; it must not preview project thumbnails.
- Mobile: portrait above the type, capped at 260px wide.

### 4.3 Work grid
Nine cards, 3-column grid (3 + 3 + 3) at ≥1200px, 2-col from 768px, 1-col below.
Card = visual + title (Editorial New 20px/300) + 2–3 line description + metadata row (role / org / year).
Card order: public product first, then client work by technical weight, then the personal extension trio.

**Visuals — currently off.** All nine cards render with no image (owner request, Oct 2026): a hairline rule
plus a small uppercase stack kicker (`NEXT`, `GO`, `INERTIA`, `JAVA`, `LARAVEL`, `EXPO`, then `MV3` on all three tools) occupies the top of
the card. An empty box reads as a missing asset; the kicker reads as a decision. The screenshot assets are
still on disk, unreferenced by `src/constants/projects.ts`.

The supporting machinery stays in place for when visuals return. Each card's pictures belong in its own
folder — `public/images/work/<slug>/01.webp`, `02.webp`, … — listed in order in `src/constants/projects.ts`;
the first entry is the cover. One image prints as a still with no controls. Two or more add a carousel inside
the 4:3 plate: previous/next buttons and a `1 / 3` counter on a parchment chip bottom-right, with the word chip
holding the bottom-left so the two never collide. No autoplay; keyboard operable, 40px targets, ink glyphs on
solid parchment. See `COPYWRITING.md §3` for the control labels.

| # | Title | Link | Why it's here |
|---|---|---|---|---|
| 1 | Katresna Creations | katresna.web.id | Only live public product; proves end-to-end + SEO + CI/CD |
| 2 | National Competition Platform | — | Go + Nuxt + Postgres + Docker, delivered ahead of schedule |
| 3 | National Competition System | — | Laravel + Inertia + React, 90% of the build in week one |
| 4 | Ministry Portal — Maintenance & Features | — | Sole bugfix owner, 35% feature contribution, Java stack |
| 5 | SatuSehat Hospital Integration | — | National health-platform integration, Laravel |
| 6 | Cross-Platform Mobile App | — | React Native + Expo; shows range beyond web |
| 7 | Histora | github.com/denyryn/histora | Personal tool; TypeScript, browser APIs, strict rule matching, privacy claim with nothing to hide |
| 8 | Wecom | github.com/denyryn/wecom | Personal tool; solves a problem his own agent workflow has — element locators for AI agents |
| 9 | Authentia | github.com/denyryn/authentia | Personal tool; TOTP, AES-GCM vault, PBKDF2, QR capture — security-shaped work beyond web CRUD |

**No badges.** LIVE/CLIENT chips were removed at the owner's request (Oct 2026).
DESIGN.md still specifies a badge slot; ignore it — the metadata row carries the truth.

### 4.4 Banner I — SELECTED WORK
Full-bleed Ink Black, Parchment type, line-height 0.73, tracking −0.03em. Two words on one line, calibrated
to ~95% of the shell measure. `SELECTED WORK` advances 8.46em, so it sets at `11.23cqw` of the shell content
box: 41px at 390, 81px at 768, 127px at 1200, 152px once the shell tops out at 1440. The `cqw` size follows
the measure at every width, so there is no breakpoint step, no wrap and no clipped edge. Text: `SELECTED WORK`.

### 4.5 About block
One column.
- Section label `ABOUT` at caption scale (14px, uppercase, 0.14em tracking, Charcoal) — an `h2`, the same
  treatment as `STACK` / `THE RECORD` / `PAPER TRAIL`. No display headline: the claim it used to make is
  already in the opening strip.
- Body: Canopee drop cap **D** (92px), then ~50 words of Editorial New 19px, flush-left, capped at 65ch.
- Byline directly under the body in Editorial New 17px Charcoal
  (`Deny Rianto · fullstack engineer · Semarang, ID`). One column, so nothing floats in an empty half.
- No portrait here — the portrait belongs to the opening strip (§4.2).
- The page's only `h1` is `BUILT, SHIPPED.` in the opening strip.

### 4.6 Banner II — THE RECORD
Same treatment. `THE RECORD` advances 6.38em → `14.89cqw`: 55px at 390, 108px at 768, 168px at 1200,
202px once the shell tops out. Text: `THE RECORD` — the same words as the Experience label (§4.8), on purpose.

### 4.7 Stack
No proficiency bars — the design system has no chart component, and bars would invent a visual language
the reference doesn't have. Instead: three tiers as typographic rows, each row = `CAPS LABEL` +
skills in Editorial New 22px, Charcoal labels, hairline Ink Black separators.

Tiers derived directly from the CV ratings, not taste:

| Tier | Contents | Basis |
|---|---|---|
| **CORE** | Go, Nuxt.js, Docker, Tailwind CSS, Laravel, Opencode, CI/CD | Rating ≥ 5, every build — the agent harness is part of the daily loop |
| **WORKING** | Java Spring Boot, React, jQuery, Bootstrap, Git, Linux server admin, PostgreSQL, MySQL | Rating 4–5, shipped but not the lead story |
| **FAMILIAR** | TypeScript, Next.js, Express.js, Nest.js, Inertia.js, Redis, Dokploy, Coolify | Rating 4 or tooling in use |

A one-line kicker above: `Six languages. One deployment habit.` (No claim beyond the listed skills.)

### 4.8 Experience — label `THE RECORD`
Three rows, newest first, plus one tertiary line. `EXPERIENCE` is the dullest word on the page; the broadsheet label costs nothing and reads better.

| Org | Role | Dates | One-line proof |
|---|---|---|---|
| Azura Labs | Hybrid Fullstack Engineer | Sept 2025 – Present | Three distinct engagements: competition platform (Go/Nuxt), ministry project (Spring Boot), SatuSehat (Laravel) |
| ID Career | Hybrid Fullstack Engineer & IT Lead | Sept 2026 – Present | National competition system, vendor API integration, Laravel + Inertia + React |
| PT. Muri Digital Grup Internasional | Remote Mobile Developer Intern | Apr – Jun 2025 | React Native + Expo, Agile/remote delivery |
| *(tertiary, caption)* | Curriculum Content Developer, Semarang State Polytechnic | Oct – Dec 2024 | WordPress/WooCommerce course modules — one line, no card |

The overlapping `Sept 2025 – Present` (Azura) and `Sept 2026 – Present` (ID Career) entries are real in the CV. Present them as-is, in separate rows;
do not merge or hide the overlap. Explain nothing on the page.

### 4.9 Credentials — label `PAPER TRAIL`
Caption-scale block, two columns, with a one-line kicker (`Education, GPA, five certifications.`) so the joke stays legible:
- Left: D4 Computer Engineering Technology, Semarang State Polytechnic, 2022–2026 · GPA 3.88/4.00.
- Right: certifications list with issuer + date (TOEIC 815, HackerRank Frontend React, HackerRank Problem Solving, Oracle SQL, Oracle DB Design).
No badge graphics; a 5-row text list is more editorial and cheaper.

### 4.10 Footer
Two columns.
- Left: contact links (email, GitHub, LinkedIn, portfolio) as Text Link with Underline, 1px offset 3px.
- Right: Stamp Seal — Ember Orange sunburst, signature line, `NAME Deny Rianto`, `BASE Semarang, ID`, `YEAR 2026`.
- Bottom caption: `Set in Canopee, Editorial New, Domaine Display. Built and deployed by the author.`
  Only true if he actually builds this site — he will, so it stays.
- **Phone number: omit.** Public pages get scraped; email is enough. Keep `+62 896-6481-8032` for the CV/PDF only.

---

## 5. Content sources map (CV → page)

| CV block | Destination | Treatment |
|---|---|---|
| Contact (name, city, email, GitHub, LinkedIn, portfolio) | Header, footer | Phone dropped |
| Professional summary | About block | Rewritten to fit 55 words, all claims retained |
| Technical skills table | Stack tiers | Re-grouped by proficiency tier, no additions |
| Proficiency bubbles / bar charts | Stack tiers (implicit) | Never rendered as bars; tier label only |
| Experience (4 entries) | Experience section | 3 rows + 1 caption line |
| Katresna project | Card 1 | Only card with a URL |
| Education | Credentials | GPA shown, coursework dropped (noise at this scale) |
| Certifications | Credentials | All 5, compact |
| Target roles (Fullstack, DevOps) | Opening strip, header wordmark, SEO | DevOps carried by Docker/CI-CD/Linux proof, not by a separate section |
| `exclude-from-tex` curriculum role | Experience caption | Kept as one line; relevance is low but the fact is real |

---

## 6. Banner / display sizing

Approximate only — calibrate in the browser against the actual font. Target: one line, full shell measure,
line-height 0.73–0.79, tracking −0.03em to −0.09em, never positive. Sizes are `cqw` of the shell content box
so they hold ~95% of the measure at every viewport; the px figures are what that resolves to at the stated
breakpoints, not separate clamp bounds.

| Word | Chars | Size | At 390 / 768 / 1200 / 1440+ | Line-height |
|---|---|---|---|---|
| SELECTED WORK | 13 | 11.23cqw (8.46em advance) | 41 / 81 / 127 / 152px | 0.73 |
| THE RECORD | 10 | 14.89cqw (6.38em advance) | 55 / 108 / 168 / 202px | 0.73 |
| BUILT, SHIPPED. | 15 (2 lines allowed) | 86px | 40–86px | 0.91 |

There is no mobile override: the `cqw` size follows the shell, so a banner never wraps to a second line.

---

## 7. Assets needed

| Asset | Slot | State |
|---|---|---|
| Portrait / self-portrait illustration | Opening strip | **Done** — `public/images/portrait.webp` (900×1125, 4:5) |
| 3 project visuals | Cards 1–3 | **Hidden for now** — all cards are text-only per the Oct 2026 request. Assets on disk: `work/competition/01.webp` (Founders Arena hero) and `work/ihdc/01.webp` (SIP Impact dashboard) are real; `work/katresna/01.webp` is still a placeholder. Re-enable by adding an `images` array back to a project. Extra visuals are `02.webp`, `03.webp`, … in the same folder; the card renders them as a carousel |
| CV + portfolio PDFs | Opening strip downloads | **CV: hand-authored** — `public/resume.pdf` is the LaTeX CV (`~/Documents/Jobhunt/resume-ats/`), copied in by hand; it is what the download link serves. **Portfolio: generated** — `npm run pdf` prints `/` through `scripts/build-pdfs.mjs`. That script also prints `/cv` to `public/deny-rianto-cv.pdf`, which is no longer linked and is kept only as a print-route artifact |
| Ember sunburst graphic | Stamp seal | Vector, single colour `#c03f13` |
| Fonts | All | Licensed originals not owned; use substitutes below |

**Font fallbacks** (from DESIGN.md substitutes), self-hosted as `woff2` in `public/fonts/` and declared with `@font-face` in `src/styles/global.css` so nothing phones Google at runtime:
Canopee → Bodoni Moda (700–900), Editorial New → Source Serif 4 (300), Domaine Display → Playfair Display (500),
Germgoth → IM Fell English. If a substitute lands, keep the negative tracking and sub-1.0 line-heights —
they carry the style more than the exact face does. Always set `font-display: swap` and a serif fallback stack.

---

## 8. Responsive behaviour

| Breakpoint | Change |
|---|---|
| ≥ 1200px | 3-col grid, About is one column, 1440px max width, 43px section rhythm |
| 768–1199px | 2-col grid, banners keep their calibrated size (no breakpoint step) |
| < 768px | 1-col, portrait capped at 260px, experience rows become stacked blocks, banners keep their calibrated size |

Body text stays flush-left at every width. No centred paragraph over two lines (design rule).

---

## 9. SEO & metadata

- `<title>`: `Deny Rianto — Fullstack Engineer & DevOps, Semarang`
- Meta description: see COPYWRITING §12 (≤ 155 chars, contains Go / Laravel / Nuxt / PostgreSQL)
- `Person` JSON-LD: name, jobTitle, address (Semarang, ID), sameAs (GitHub, LinkedIn, portfolio), alumniOf, knowsAbout
  limited to listed skills.
- OG image: Banner I typography at 1200×630 (name + one-line role). No portrait needed.
- Single H1 = `BUILT, SHIPPED.` in the opening strip. The banners are decorative (`aria-hidden`) and the
  About label is an `h2`, so the outline stays one `h1` with sections under it.

---

## 10. Build order (when implementation starts)

1. Tokens + fonts + header + banner component (banner is the whole design; validate it first).
2. Work grid with placeholder Bone Cream blocks → real screenshots.
3. About block, stack tiers, experience, credentials, footer.
4. Copy pass against COPYWRITING.md, then a fabrication audit: every claim greppable in `docs/CV.md`.

---

## 11. Open decisions

| # | Decision | Default if unanswered |
|---|---|---|
| 1 | Portrait: commission illustration vs. type-only bio | Type-only, no frame |
| 2 | Client work names: keep descriptive titles, or get permission and use real product names? | Descriptive titles |
| 3 | Reveal phone number on the site? | No |
| 4 | Add a 3rd banner (`SAY HI`) before the footer? | No — two banners already carry the rhythm |
| 5 | Domain: keep `portfolio.rianto.site` or move to `denyrianto.com`? | Keep current |

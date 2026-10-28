import type { ContactLink, NavItem } from "../types/content";

export const site = {
  origin: "https://portfolio.rianto.site",
  name: "Deny Rianto",
  jobTitle: "Fullstack Engineer",
  address: "Semarang, Central Java, Indonesia",
  email: "denyrianto@outlook.com",
  location: "Semarang, ID",
  wordmark: "Deny Rianto — Fullstack Engineer",
  title: "Deny Rianto — Fullstack Engineer & DevOps, Semarang",
  description:
    "Fullstack engineer in Semarang, ID. Go, Laravel, Nuxt, PostgreSQL, Docker. Two years of government, healthcare, and competition systems — built end to end.",
  ogTitle: "Deny Rianto — Fullstack Engineer",
  ogDescription:
    "Two years of production web systems: Go, Laravel, Nuxt, PostgreSQL, Docker. Built end to end, deployed on self-hosted infrastructure.",
  github: "https://github.com/denyryn",
  linkedin: "https://linkedin.com/in/denyrianto",
  alumniOf: "Semarang State Polytechnic",
  knowsAbout: [
    "Go",
    "Laravel",
    "Nuxt.js",
    "PostgreSQL",
    "Docker",
    "Java Spring Boot",
    "React",
    "TypeScript",
  ],
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const contacts: ContactLink[] = [
  { label: "denyrianto@outlook.com", href: "mailto:denyrianto@outlook.com" },
  { label: "github.com/denyryn", href: "https://github.com/denyryn" },
  { label: "linkedin.com/in/denyrianto", href: "https://linkedin.com/in/denyrianto" },
  { label: "portfolio.rianto.site", href: "https://portfolio.rianto.site" },
];

export const hero = {
  display: "BUILT, SHIPPED.",
  subhead:
    "Fullstack engineer in Semarang, Indonesia. Two years shipping web and mobile products end to end. Schema, API, container, deploy.",
  portrait: {
    src: "/images/portrait.webp",
    alt: "Stylised portrait of Deny Rianto against a warm parchment background.",
  },
  downloads: [
    { label: "Download CV (PDF)", href: "/resume.pdf" },
    { label: "Portfolio (PDF)", href: "/deny-rianto-portfolio.pdf" },
  ],
};

export const bio = {
  label: "ABOUT",
  body: "Deny Rianto builds systems end to end — schema and API through container and reverse proxy. Two years of production work across a national competition platform, a ministry portal, and a hospital integration with Indonesia’s national health data platform. Go, Laravel, Nuxt. AI coding agents draft roughly 80% of the code. He directs, reviews, integrates, and owns what ships.",
  byline: "Deny Rianto · fullstack engineer · Semarang, ID",
};

/* Colophon names the faces actually shipped, not the unlicensed originals. */
export const colophon =
  "Set in Bodoni Moda and Source Serif 4. Written, built, deployed, and maintained by one pair of hands.";

export const copyright =
  "© 2026 Deny Rianto. No cookies, no analytics, no tracking.";

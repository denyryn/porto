import type {
  Certification,
  Education,
  Role,
  StackTier,
} from "../types/content";

export const stack = {
  label: "STACK",
  kicker: "Six languages. One deployment habit.",
  note: "Ordered by use: CORE first, FAMILIAR last.",
};

export const stackTiers: StackTier[] = [
  {
    tier: "CORE",
    skills: [
      "Go",
      "Nuxt.js",
      "Docker",
      "Tailwind CSS",
      "Laravel",
      "Opencode",
      "CI/CD",
    ],
  },
  {
    tier: "WORKING",
    skills: [
      "Java Spring Boot",
      "React",
      "jQuery",
      "Bootstrap",
      "Git",
      "Linux server administration",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    tier: "FAMILIAR",
    skills: [
      "TypeScript",
      "Next.js",
      "Express.js",
      "Nest.js",
      "Inertia.js",
      "Redis",
      "Dokploy",
      "Coolify",
    ],
  },
];

export const experience = {
  label: "THE RECORD",
  kicker: "Roles, newest first.",
  earlier:
    "Earlier: curriculum content developer at Semarang State Polytechnic, writing WordPress and WooCommerce course modules (Oct – Dec 2024).",
};

export const roles: Role[] = [
  {
    role: "Hybrid Fullstack Developer",
    org: "ID Career",
    dates: "Sept 2026 – Present",
    line: "National competition system built on Laravel, Inertia.js, and React — 90% of the build in the first week, vendor APIs integrated alongside. As sole developer, frontend and backend work cut overall app speed by 90%.",
    stack: ["Laravel", "Inertia.js", "React", "REST API integration", "Git"],
  },
  {
    role: "Hybrid Fullstack Engineer",
    org: "Azura Labs",
    dates: "Sept 2025 – Present",
    line: "Three engagements: national competition platform in Go and Nuxt, ministry project in Spring Boot, SatuSehat integration in Laravel. As project engineer lead, reviews others' code while shipping his own and takes over in-flight features.",
    stack: [
      "Go",
      "Nuxt.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "Java Spring Boot",
      "jQuery",
      "Bootstrap",
      "Laravel",
    ],
  },
  {
    role: "Remote Mobile Developer Intern",
    org: "PT. Muri Digital Grup Internasional",
    dates: "Apr – Jun 2025",
    line: "Cross-platform mobile delivery in a remote Agile team — sprint planning, daily stand-ups, and a shared API contract with the backend. Practiced cross-team communication and progress reporting.",
    stack: ["React Native", "Expo", "Redux", "Git"],
  },
];

export const credentials = {
  label: "PAPER TRAIL",
  kicker: "Education, GPA, five certifications.",
};

export const education: Education = {
  award: "D4, Computer Engineering Technology",
  school: "Semarang State Polytechnic",
  years: "2022–2026",
  gpa: "GPA 3.88 / 4.00",
};

export const certifications: Certification[] = [
  { name: "TOEIC — 815", issuer: "ETS", date: "Jul 2026" },
  { name: "Frontend Developer (React)", issuer: "HackerRank", date: "Jun 2025" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank", date: "Jun 2025" },
  {
    name: "Oracle Database Programming SQL",
    issuer: "Oracle Academy",
    date: "Jul 2023",
  },
  { name: "Oracle Database Design", issuer: "Oracle Academy", date: "May 2023" },
];

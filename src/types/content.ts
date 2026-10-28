export interface Project {
  title: string;
  /** Primary technology printed on the media plate. */
  plate: string;
  /** Card visuals, in order. The first image is the cover. Placeholder art until real screenshots exist. */
  images?: string[];
  description: string;
  meta: string;
  href?: string;
  hrefLabel?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface StackTier {
  tier: "CORE" | "WORKING" | "FAMILIAR";
  skills: string[];
}

export interface Role {
  role: string;
  org: string;
  dates: string;
  line: string;
  stack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Education {
  award: string;
  school: string;
  years: string;
  gpa: string;
}

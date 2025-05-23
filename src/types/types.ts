import { ReactNode } from "react";

interface NavbarLink {
  id: number;
  label: string;
  href: string;
}

interface ShowcaseDetails {
  title: string;
  summary: string;
}

interface Skills {
  id: string;
  name: string;
  path: string;
  url: string;
}

interface CityTimeRange {
  city: string;
  from: string;
  to: string;
}

interface Education extends CityTimeRange {
  id: string;
  course: string;
  institute: string;
}

interface Experience extends CityTimeRange {
  id: string;
  company: string;
  role: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string | null;
  techStack: Array<string>;
}

interface ContactLinks {
  id: string;
  link: string;
  children: ReactNode;
  ariaLabel: string;
}

export type {
  NavbarLink,
  ShowcaseDetails,
  Skills,
  Education,
  Experience,
  Project,
  ContactLinks,
};

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
  name: string;
  path: string;
  url: string;
}

interface Education {
  course: string;
  institute: string;
  city: string;
  from: number;
  to: number;
}

interface Experience {
  company: string;
  role: string;
  description: string;
  city: string;
  from: string;
  to: string;
}

export type { NavbarLink, ShowcaseDetails, Skills, Education, Experience };

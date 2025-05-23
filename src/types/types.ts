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

export type { NavbarLink, ShowcaseDetails, Skills, Education, Experience };

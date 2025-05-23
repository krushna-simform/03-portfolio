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

interface CityTimeRange {
  city: string;
  from: string;
  to: string;
}

interface Education extends CityTimeRange {
  course: string;
  institute: string;
}

interface Experience extends CityTimeRange {
  company: string;
  role: string;
  description: string;
}

export type { NavbarLink, ShowcaseDetails, Skills, Education, Experience };

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

export type { NavbarLink, ShowcaseDetails, Skills };

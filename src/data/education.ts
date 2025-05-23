import type { Education } from "@/types/types";

const EDUCATION: Array<Education> = [
  {
    id: crypto.randomUUID(),
    course: "Bachelors in Information Technology",
    institute: "A. D. Patel Institute of Technology",
    city: "Anand",
    from: "2021",
    to: "2025",
  },
  {
    id: crypto.randomUUID(),
    course: "Higher Secondary Education",
    institute: "Shree M. B. Vamdom School",
    city: "Bardoli - Surat",
    from: "2019",
    to: "2021",
  },
] as const;

export { EDUCATION };

import { ContactLinks } from "@/types/types";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const CONTACT_LINKS: Array<ContactLinks> = [
  {
    id: crypto.randomUUID(),
    link: "https://www.linkedin.com/in/krushna-rathod",
    children: (
      <>
        <FaLinkedinIn /> LinkedIn
      </>
    ),
    ariaLabel: "LinkedIn",
  },
  {
    id: crypto.randomUUID(),
    link: "https://www.github.com/krushna-simform",
    children: (
      <>
        <FaGithub /> GitHub
      </>
    ),
    ariaLabel: "GitHub",
  },
  {
    id: crypto.randomUUID(),
    link: "mailto:krushna.rathod@simformsolutions.com",
    children: (
      <>
        <IoMdMail /> Mail
      </>
    ),
    ariaLabel: "Mail",
  },
] as const;

export { CONTACT_LINKS };

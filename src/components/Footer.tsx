import { LineAttractor } from "@/components/ui/LineAttractor";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="bg-[#0000FE]">
      <div className="md:w-[60%] px-4 mx-auto py-10 mt-35">
        <LineAttractor />
        <div className="mt-10 text-2xl">
          <p className="text-white text-2xl">Contact Me</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/krushna-rathod"
              target="_blank"
              aria-label="LinkedIn link (opens in a new tab)"
              className="inline-flex items-center gap-2 text-white bg-[#2727FE] py-2 px-8 rounded-full"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
            <a
              href="https://www.github.com/krushna-simform"
              target="_blank"
              aria-label="GitHub link (opens in a new tab)"
              className="inline-flex items-center gap-2 text-white bg-[#2727FE] py-2 px-8 rounded-full"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="mailto:krushna.rathod@simformsolutions.com"
              target="_blank"
              aria-label="Mail link (opens in a new tab)"
              className="inline-flex items-center gap-2 text-white bg-[#2727FE] py-2 px-8 rounded-full"
            >
              <IoMdMail />
              Mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

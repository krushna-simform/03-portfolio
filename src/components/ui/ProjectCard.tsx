import type { Project } from "@/types/types";
import githubLogo from "/icon/github.svg";
import linkLogo from "/icon/link.svg";

export const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
}: Project) => {
  return (
    <div className="border border-[#ababab] bg-[#F5F4F4] rounded-lg overflow-hidden flex flex-col">
      <div
        className="project-image-div h-55 flex items-center justify-center"
        style={{ backgroundImage: "url" }}
      >
        <p
          className="text-white w-[250px] text-center text-4xl font-bold"
          role="heading"
        >
          {title}
        </p>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-[26px]">{title}</p>
        <p className="text-[15px] mt-3 text-gray-700 text-justify mb-5">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span className="bg-[#ABAAF9] border border-[#5756FA] py-1 px-4 text-[#0A0A0A] rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-5">
          <a
            href={githubLink}
            target="_blank"
            aria-label={`${title} GitHub link (opens in a new tab)`}
            className="flex items-center gap-2 bg-black py-2 px-4 rounded-sm hover:brightness-80"
            role="button"
          >
            <img src={githubLogo} alt="GitHub logo" />
            <span className="font-semibold text-sm text-white">
              GitHub Link
            </span>
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              aria-label={`${title} Deployment link (opens in a new tab)`}
              className="flex items-center gap-2 bg-black py-2 px-4 rounded-sm hover:brightness-80"
              role="button"
            >
              <img src={linkLogo} alt="Link logo" />
              <span className="font-semibold text-sm text-white">
                Live Link
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

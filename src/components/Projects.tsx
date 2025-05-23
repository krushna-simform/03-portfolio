import { PROJECT } from "@/data/project";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const Projects = () => {
  return (
    <div className="mt-30">
      <div className="md:w-[60%] px-4 mx-auto mt-20">
        <p className="text-[40px] font-bold" role="heading">
          Projects
        </p>
        <div className="grid grid-cols-auto-fit gap-4 mt-10">
          {PROJECT.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

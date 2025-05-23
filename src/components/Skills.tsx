import { SKILLS } from "@/data/skills";
import { Tagline } from "@/components/ui/Tagline";

export const Skills = () => {
  return (
    <div id="skills">
      <div className="md:w-[60%] px-4 mx-auto mt-20">
        <Tagline />
        <p className="text-[40px] font-bold mt-20" role="heading">
          Skills
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] gap-10 mt-10">
          {SKILLS.map((skill) => (
            <a
              href={skill.url}
              className="h-18 md:h-22 hover:invert-20"
              target="blank"
              key={skill.id}
            >
              <img
                src={skill.path}
                alt={skill.name}
                className="h-full w-full object-contain invert"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

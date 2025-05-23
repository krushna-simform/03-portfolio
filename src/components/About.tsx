import { EDUCATION } from "@/data/education";
import { Education } from "@/components/ui/Education";

import { EXPERIENCE } from "@/data/experience";
import { Experience } from "@/components/ui/Experience";

import { Hobbies } from "@/components/ui/Hobbies";

import educationImage from "/images/education.svg";
import experienceImage from "/images/experience.png";

export const About = () => {
  return (
    <div id="about">
      <div className="md:w-[60%] px-4 mx-auto">
        <div className="flex justify-between pt-30">
          <div className="space-y-8">
            <p className="text-4xl font-bold" role="heading">
              Education
            </p>
            <div className="space-y-8 mt-10">
              {EDUCATION.map((education) => (
                <Education {...education} key={education.id} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[500px]">
            <img src={educationImage} alt="Round Shape Image" />
          </div>
        </div>

        <div className="flex justify-between mt-30">
          <div className="hidden lg:block lg:min-w-[500px]">
            <img src={experienceImage} alt="Round Shape Image" />
          </div>
          <div className="space-y-8">
            <p className="text-4xl font-bold" role="heading">
              Experience
            </p>
            <div className="space-y-8 mt-10">
              {EXPERIENCE.map((experience) => (
                <Experience {...experience} key={experience.id} />
              ))}
            </div>
          </div>
        </div>

        <Hobbies />
      </div>
    </div>
  );
};

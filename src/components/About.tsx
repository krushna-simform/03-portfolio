import { EDUCATION } from "@/data/education";
import { Education } from "./ui/Education";
import educationImage from "/images/education.svg";

export const About = () => {
  return (
    <div id="education">
      <div className="md:w-[60%] px-4 mx-auto">
        <div className="flex justify-between mt-30">
          <div className="space-y-8">
            <p className="text-4xl font-bold" role="heading">
              Education
            </p>
            <div className="space-y-8 mt-10">
              {EDUCATION.map((education) => (
                <Education
                  course={education.course}
                  institute={education.institute}
                  city={education.city}
                  from={education.from}
                  to={education.to}
                  key={education.course}
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[500px]">
            <img src={educationImage} alt="Round Shape Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

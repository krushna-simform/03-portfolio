import type { ShowcaseDetails as ShowcaseDetailsProps } from "@/types/types";
import showcaseImage from "/images/showcase.png";

export const ShowcaseDetails = ({ ...props }: ShowcaseDetailsProps) => {
  return (
    <div className="md:w-[60%] px-4 mx-auto flex items-center h-full justify-between">
      <div className="w-[536px] h-[357px] flex flex-col justify-center">
        <p>Hey, I'm</p>
        <p
          className="text-[40px] mt-2 font-semibold"
          aria-label={props.title}
          role="heading"
        >
          {props.title}
        </p>
        <p className="text-[18px] mt-2" aria-label="Summary">
          {props.summary}
        </p>
      </div>
      <div className="hidden lg:block lg:w-[540px]">
        <img src={showcaseImage} alt="Showcase Image" />
      </div>
    </div>
  );
};

import showcaseImage from "/images/showcase.png";

export const MaskShowCaseDetails = () => {
  return (
    <div className="md:w-[60%] px-4 mx-auto flex items-center h-full justify-between">
      <div className="w-[536px] h-[357px] flex flex-col justify-center">
        <p>Hey, I'm</p>
        <p
          className="text-[40px] mt-2 font-semibold"
          aria-label="Frontend Developer"
        >
          Frontend Developer
        </p>
        <p className="text-[18px] mt-2" aria-label="Developer Summary">
          I’m always exploring new tools in the frontend ecosystem to push the
          boundaries of what’s possible. From optimizing performance to refining
          component architecture, I thrive on turning complex challenges into
          seamless user experiences.
        </p>
      </div>
      <div className="hidden lg:block lg:w-[540px]">
        <img src={showcaseImage} alt="Showcase Image" />
      </div>
    </div>
  );
};

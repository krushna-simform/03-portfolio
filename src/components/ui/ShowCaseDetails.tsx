import showcaseImage from "/images/showcase.png";

export const ShowCaseDetails = () => {
  return (
    <div className="md:w-[60%] px-4 mx-auto flex items-center h-full justify-between">
      <div className="w-[536px] h-[357px] flex flex-col justify-center">
        <p>Hey, I'm</p>
        <p
          className="text-[40px] mt-2 font-semibold"
          aria-label="Krushna Rathod - Frontend Developer"
        >
          Krushna Rathod
        </p>
        <p className="text-[18px] mt-2" aria-label="Developer Summary">
          I'm a frontend developer who builds fast, responsive web apps with
          React, focusing on performance, accessibility, and clean UI. I write
          modular, maintainable code and enjoy solving real problems through
          intuitive interfaces.
        </p>
      </div>
      <div className="hidden lg:block lg:w-[540px]">
        <img src={showcaseImage} alt="Showcase Image" />
      </div>
    </div>
  );
};

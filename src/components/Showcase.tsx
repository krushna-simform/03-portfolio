import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import { ShowcaseDetails } from "@/components/ui/ShowcaseDetails";
import { SHOWCASE_DETAILS_TITLE_SUMMARY } from "@/data/showcaseDetails";

export const Showcase = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 320 : 0;

  return (
    <section className="relative h-[678.844px] bg-[#0A0A0A] text-white flex items-center mt-[55px] overflow-hidden">
      <motion.div
        className={`absolute top-0 left-0 w-full h-full z-10`}
        animate={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        style={{
          WebkitMaskImage: "url('/images/mask.svg')",
          maskImage: "url('/images/mask.svg')",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          background: "#0000FE",
          pointerEvents: "none",
        }}
      >
        <ShowcaseDetails {...SHOWCASE_DETAILS_TITLE_SUMMARY[1]} />
      </motion.div>
      <div
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ShowcaseDetails {...SHOWCASE_DETAILS_TITLE_SUMMARY[0]} />
      </div>
    </section>
  );
};

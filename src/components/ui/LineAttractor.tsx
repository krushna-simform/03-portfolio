import { useRef, useEffect, useState } from "react";

export const LineAttractor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const ROWS = 8;
  const COLS = 39;
  const SPACING = 30;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", () => setIsInside(true));
      container.addEventListener("mouseleave", () => setIsInside(false));
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", () => setIsInside(true));
        container.removeEventListener("mouseleave", () => setIsInside(false));
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[200px] relative overflow-hidden rounded-md flex items-center"
    >
      {Array.from({ length: ROWS }).map((_, row) =>
        Array.from({ length: COLS }).map((_, col) => {
          const x = col * SPACING + SPACING / 2;
          const y = row * SPACING + SPACING / 2;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const angle = isInside ? Math.atan2(dy, dx) : 0;
          const deg = (angle * 180) / Math.PI;

          return (
            <div
              key={`${row}-${col}`}
              className="absolute w-[14px] h-[2px] bg-white origin-center transition-transform duration-75"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${deg}deg)`,
              }}
            />
          );
        })
      )}
    </div>
  );
};

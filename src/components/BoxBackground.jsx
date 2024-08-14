import React, { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { throttle } from "lodash";

const colors = [
  "--sky-300",
  "--pink-300",
  "--green-300",
  "--yellow-300",
  "--red-300",
  "--purple-300",
  "--blue-300",
  "--indigo-300",
  "--violet-300",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const BoxesCore = ({ className, ...rest }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = throttle((event) => {}, 16);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div className="fixed inset-0 overflow-hidden z-10">
      <div
        style={{
          transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
          width: `${dimensions.width * 2}px`,
          height: `${dimensions.height * 2}px`,
        }}
        className={`absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-auto ${className}`}
        {...rest}
      >
        {rows.map((_, i) => (
          <motion.div
            key={`row-${i}`}
            className="w-16 h-8 border-l border-slate-500 relative"
          >
            {cols.map((_, j) => (
              <motion.div
                key={`col-${j}`}
                whileHover={{
                  backgroundColor: `var(${getRandomColor()})`,
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2 },
                }}
                className="w-16 h-8 relative"
                style={{
                  borderRight: "1px solid rgba(100, 100, 100, 0.2)",
                  borderTop: "1px solid rgba(100, 100, 100, 0.2)",
                }}
              >
                {j % 2 === 0 && i % 2 === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                )}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Boxes = memo(BoxesCore);

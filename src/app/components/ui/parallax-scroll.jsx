"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

import { cn } from "../lib/utils";

export const ParallaxScroll = ({
  images,
  className
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] items-start w-full overflow-y-auto", // Keep overflow-y-auto for scrolling
        "scrollbar-hide", // Add this class to hide scrollbar
        "[&::-webkit-scrollbar]:hidden", // Hide scrollbar for Webkit browsers
        "[-ms-overflow-style:none]", // Hide scrollbar for IE and Edge
        "[scrollbar-width:none]", // Hide scrollbar for Firefox
        className
      )}
      ref={gridRef}
      style={{
        background: 'linear-gradient(135deg, #030C16 0%, #030C16 100%)',
      }}
    >
      {/* Unified background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(0, 220, 244, 0.1) 0%, rgba(13, 10, 25, 0) 50%), radial-gradient(circle at 30% 70%, rgba(0, 220, 244, 0.08) 0%, rgba(13, 10, 25, 0) 40%)',
        }}
      />
      
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10 relative z-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="group"
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border border-[#00dcf4]/20 shadow-lg shadow-[#00dcf4]/10 transition-all duration-300 group-hover:border-[#00dcf4]/40 group-hover:shadow-xl group-hover:shadow-[#00dcf4]/20"
                height="400"
                width="400"
                alt="thumbnail" 
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateSecond }} 
              key={"grid-2" + idx}
              className="group"
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border border-[#00dcf4]/20 shadow-lg shadow-[#00dcf4]/10 transition-all duration-300 group-hover:border-[#00dcf4]/40 group-hover:shadow-xl group-hover:shadow-[#00dcf4]/20"
                height="400"
                width="400"
                alt="thumbnail" 
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div 
              style={{ y: translateThird }} 
              key={"grid-3" + idx}
              className="group"
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 border border-[#00dcf4]/20 shadow-lg shadow-[#00dcf4]/10 transition-all duration-300 group-hover:border-[#00dcf4]/40 group-hover:shadow-xl group-hover:shadow-[#00dcf4]/20"
                height="400"
                width="400"
                alt="thumbnail" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
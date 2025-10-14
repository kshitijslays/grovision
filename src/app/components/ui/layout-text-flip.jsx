"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LayoutTextFlip = ({
  text = "to grow your ",
  words = ["Vision", "Brand"],
  duration = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <motion.span
        layoutId="subtext"
        className="text-2xl font-light tracking-tight drop-shadow-lg md:text-4xl lg:text-5xl text-white/90">
        {text}
      </motion.span>
      <motion.span
        layout
        className="relative inline-block w-fit overflow-hidden rounded-xl border border-[#00dcf4]/30 bg-gradient-to-r from-[#00dcf4]/10 to-[#00a8cc]/10 px-6 py-3 font-sans text-2xl font-light tracking-tight text-[#00dcf4] shadow-lg shadow-[#00dcf4]/20 backdrop-blur-sm md:text-4xl lg:text-5xl">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block whitespace-nowrap">
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <LayoutTextFlip 
        text="to grow your "
        words={["Vision", "Brand", "Business", "Dreams"]}
        duration={2500}
      />
    </div>
  );
}
"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../components/ui/use-outside-click";

const Team = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <section
        className="relative w-full min-h-screen overflow-hidden rounded-2xl md:rounded-4xl bg-[#0a0613] font-light text-white antialiased py-8"
        style={{
          background: 'linear-gradient(135deg, #030C16 0%, #030C16 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(0, 220, 244, 0.1) 0%, rgba(13, 10, 25, 0) 50%), radial-gradient(circle at 30% 70%, rgba(0, 220, 244, 0.08) 0%, rgba(13, 10, 25, 0) 40%)',
          }}
        />
        
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10" />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-4 right-4 lg:top-2 lg:right-2 items-center justify-center bg-white rounded-full h-8 w-8 lg:h-6 lg:w-6 z-50"
                onClick={() => setActive(null)}>
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-full md:max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden">
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-60 md:h-80 object-cover object-top" />
                </motion.div>

                <div className="flex-1 overflow-auto">
                  <div className="flex flex-col md:flex-row justify-between items-start p-4 gap-3">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200 text-lg">
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-[#00DCF4] text-white whitespace-nowrap">
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4 pb-6">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-sm md:text-base h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        
        {/* Added Heading Section */}
        <div className="relative max-w-2xl pt-20 md:pt-22 mx-auto w-full mb-8 text-center px-4">
          <h1 className="mx-auto mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light">
            Our
            <span className="text-[#00dcf4]"> Team </span>  
          </h1>
          <p className="text-base md:text-lg text-neutral-300">
            Meet the talented individuals who make it all happen
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto w-full gap-4 px-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-white/10 rounded-xl cursor-pointer backdrop-blur-sm border border-white/10 mb-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full">
                <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0">
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-24 w-24 md:h-14 md:w-14 rounded-lg object-cover object-top" />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-white text-lg md:text-base">
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-300 text-sm">
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-white/10 hover:bg-[#00DCF4] hover:text-white text-white mt-4 md:mt-0 transition-colors duration-200 w-full md:w-auto">
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Full Stack Developer",
    title: "Harsh Aswal",
    src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5Lybijn5V4dQjwtUe75ApxbP68hlkFNKnGZIq",
    ctaText: "Resume",
    ctaLink: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5rDwTLYf8BWI64UPVzZcp0EidljyDOusNoxLG",
    content: () => {
      return (
        <p>Alex is a passionate full-stack developer with 5+ years of experience in building scalable web applications. He specializes in React, Node.js, and cloud technologies. <br /> <br />When not coding, Alex enjoys contributing to open-source projects and mentoring junior developers in the community.</p>
      );
    },
  },
  {
    description: "UI/UX Designer",
    title: "Hasnain Khan",
    src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5YKmwnzkdqrAaPiXWyjJwRgVxh49pENQmO51K",
    ctaText: "Resume",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Sarah is a creative UI/UX designer with a keen eye for detail and user experience. She has worked with numerous startups and established companies to create intuitive digital experiences. <br /> <br />Her design philosophy centers around creating interfaces that are both beautiful and functional.</p>
      );
    },
  },
  {
    description: "Graphic Designer",
    title: "Rimjhim Kumari",
    src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5MiHd5IWpkPgjheEISXdl7DYxNyuCsc5QtnmM",
    ctaText: "Resume",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Michael is an experienced project manager who ensures all projects are delivered on time and exceed client expectations. <br /> <br />With a background in both technical and business domains, he bridges the gap between client requirements and technical implementation.</p>
      );
    },
  },
  {
    description: "Web & App Developer",
    title: "Kshitij Raj",
    src: "https://1kga789wdc.ufs.sh/f/lJZn16SaUVX5hi3eQpNdx4bWp0UlI1ZKuzEFvVsLw7JfMokX",
    ctaText: "Resume",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>Web & App Developer | Turning ideas into fast, functional & visually stunning digital experiences. Skilled in crafting responsive websites and intuitive mobile apps that blend creativity with technology. Passionate about clean code, UI/UX, and continuous innovation. </p>
      );
    },
  },
];

export default Team;
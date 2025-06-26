import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { words } from "../../constants";

const HeroTitleHeader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col space-y-1 sm:space-y-5">
        <h1 className="text-2xl sm:text-4xl md:text-[47px] text-[var(--white-50)] font-bold text-center flex flex-wrap gap-2">
          <span>Transforming</span>
          <span className="relative inline-block h-[1.4em] sm:h-[3rem] w-[11ch] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index].text}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 gap-1 top-0 w-full flex items-center justify-start"
              >
                <img
                  src={words[index].img}
                  alt={words[index].text}
                  className="size-7 sm:size-10 p-1 sm:p-1.5 rounded-full bg-[var(--blue-50)]"
                />
                <span>{words[index].text}</span>
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-[47px] text-[var(--white-50)] font-bold">
          Into Real‑World Solutions
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-[47px] text-[var(--white-50)] font-bold">
          That Elevate Digital Experiences.
        </h1>
      </div>
    </>
  );
};

export default HeroTitleHeader;

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TitleHeader = ({ title, subTitle }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div ref={sectionRef} className="relative text-center mb-5">
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative inline-block text-3xl sm:text-4xl font-bold capitalize pb-7"
      >
        {/* Decorative underline */}
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[60px] bg-green-300"
          aria-hidden="true"
        ></span>

        {title}

        <span className="block text-[13px] font-medium uppercase tracking-[4px] text-[var(--white-50)] pt-3">
          {subTitle}
        </span>
      </motion.h1>
    </div>
  );
};

export default TitleHeader;

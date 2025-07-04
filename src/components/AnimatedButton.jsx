import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const AnimatedButton = ({
  toggled,
  onToggle,
  textOff = "READ MORE",
  textOn = "READ LESS",
  arrow = "→",
  className = "",
}) => {
  const buttonRef = useRef(null);
  const bubbleRef = useRef(null);
  const animationTimeline = useRef(null);
  const [textKey, setTextKey] = useState(textOff);

  // Sync textKey with toggled initially
  useEffect(() => {
    setTextKey(toggled ? textOn : textOff);
  }, [toggled, textOn, textOff]);

  useEffect(() => {
    const bubble = bubbleRef.current;

    animationTimeline.current = gsap.timeline({ paused: true });

    animationTimeline.current
      .to(bubble, {
        width: "calc(100% + 1.3em)",
        ease: "elastic.out(0.25, 0.3)",
        duration: 0.4,
        onComplete: () => {
          setTextKey(textOn);
        },
        onReverseComplete: () => {
          setTextKey(textOff);
        },
      })
      .to(bubble, {
        width: "2em",
        left: "calc(100% - 1.45em)",
        ease: "elastic.out(0.4, 0.4)",
        duration: 0.6,
      });
  }, [textOff, textOn]);

  // Play or reverse timeline when toggled changes
  useEffect(() => {
    const tl = animationTimeline.current;
    if (!tl) return;

    if (toggled) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [toggled]);

  const handleClick = () => {
    if (onToggle) onToggle(!toggled);
  };

  return (
    <div className="wrapper">
      <button
        ref={buttonRef}
        type="button"
        className={`link ${className}`}
        onClick={handleClick}
        aria-expanded={toggled}
      >
        <div ref={bubbleRef} className="color"></div>

        <AnimatePresence mode="wait">
          <motion.span
            key={textKey}
            className="span-1"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {textKey}
          </motion.span>
        </AnimatePresence>

        <motion.span
          className="span-2"
          animate={{ rotate: toggled ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {arrow}
        </motion.span>
      </button>
    </div>
  );
};

export default AnimatedButton;
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const bubbleButtonStyles = `
  .bubbly-button {
    position: relative;
    transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  }
  .bubbly-button:before, .bubbly-button:after {
    content: '';
    position: absolute;
    display: block;
    width: 140%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 0.5s;
    background-repeat: no-repeat;
    opacity: 0;
  }
  .bubbly-button:before {
    top: -75%;
    background-image:  
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #8bbccc 20%, transparent 30%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%), 
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #8bbccc 15%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }
  .bubbly-button:after {
    bottom: -75%;
    background-image:  
      radial-gradient(circle, #8bbccc 20%, transparent 20%), 
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #8bbccc 15%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%),
      radial-gradient(circle, #8bbccc 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }
  .bubbly-button.animate:before {
    animation: topBubbles 0.75s ease-in-out forwards;
    opacity: 1;
  }
  .bubbly-button.animate:after {
    animation: bottomBubbles 0.75s ease-in-out forwards;
    opacity: 1;
  }
  @keyframes topBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }
    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }
    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      opacity: 0;
    }
  }
  @keyframes bottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }
    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }
    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
      opacity: 0;
    }
  }
`;

const AnimatedBubblyButton = () => {
  const buttonRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const triggerAnimations = () => {
    const button = buttonRef.current;
    if (!button) return;

    button.classList.remove("animate");
    void button.offsetWidth;
    button.classList.add("animate");
    setIsClicked(true);
    setTimeout(() => {
      button.classList.remove("animate");
      setIsClicked(false);
    }, 700);
  };

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = bubbleButtonStyles;
    document.head.appendChild(styleElement);

    const button = buttonRef.current;

    const handleButtonPress = () => {
      triggerAnimations();
    };

    // button.addEventListener("mousedown", handleButtonPress);
    button.addEventListener("touchstart", handleButtonPress);

    return () => {
      // button.removeEventListener("mousedown", handleButtonPress);
      button.removeEventListener("touchstart", handleButtonPress);
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      className="bubbly-button w-full relative inline-flex items-center justify-center my-1 px-6 py-3 
        bg-gradient-to-tr from-gray-900 to-[var(--blue-50)] text-white transition-transform 
        duration-200 rounded-lg border-none cursor-pointer shadow-[0px_2px_5px_rgba(139,188,204,0.24)]"
      whileTap={{
        scale: 0.9,
        background: "linear-gradient(to right, #111828, #1a365d)",
        boxShadow: "0px 3px 8px rgba(139,188,204,0.35)",
      }}
      onClick={() => {
        const link = document.createElement("a");
        link.href = "/resumes/david_silva_resume.pdf";
        link.download = "david_silva_resume.pdf";
        link.click();
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isClicked ? "clicked" : "normal"}
          initial={{ y: 0 }}
          animate={{
            y: isClicked ? [0, -5, 0] : 0,
            transition: { duration: 0.7 },
          }}
          className="inline-flex items-center gap-2"
        >
          <motion.span
            className="text-base"
            animate={{
              scale: isClicked ? [1, 1.1, 1] : 1,
              transition: { duration: 0.7 },
            }}
          >
            Download My CV
          </motion.span>
          <motion.span
            animate={{
              rotate: isClicked ? [0, 15, -15, 0] : 0,
              transition: { duration: 0.7 },
            }}
          >
            <FiDownload className="text-xl" />
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default AnimatedBubblyButton;
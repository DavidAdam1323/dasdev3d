import { motion } from "framer-motion";

// Animation for the container that will stagger its children
export const MotionSection = ({ children, className }) => (
  <motion.div
    className={className}
    variants={{
      hidden: {},
      show: {
        // Delay of 0.25s between each child's animation
        transition: { staggerChildren: 0.25 },
      },
    }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

// Animation for each item inside the section
export const MotionItem = ({ children, className }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      },
    }}
  >
    {children}
  </motion.div>
);

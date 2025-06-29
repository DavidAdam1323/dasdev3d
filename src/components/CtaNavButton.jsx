import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const CtaNavButton = () => {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Get in Touch with Me"
      title="Get in Touch with Me"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="group relative hidden lg:inline-flex items-center justify-center gap-2 px-4 py-2
           rounded-lg text-white bg-gradient-to-tr from-gray-900 to-[var(--blue-50)] hover:from-gray-800 
           hover:to-[var(--white-50)] cursor-pointer active:scale-95 transition-transform duration-200 shadow-xl hover:shadow-2xl 
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-50)] focus-visible:ring-offset-2"
    >
      <motion.span
        whileHover={{ scale: 1.25 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="text-xl text-[var(--blue-50)] group-hover:text-white"
      >
        <FaComments />
      </motion.span>

      <span className="text-lg">Get in Touch</span>
    </motion.button>
  );
};

export default CtaNavButton;

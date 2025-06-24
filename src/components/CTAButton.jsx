import { motion } from "framer-motion";

const CTAButton = () => {
  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="hidden lg:inline-flex relative items-center justify-center px-6 py-3 rounded-lg shadow-2xl overflow-hidden group"
    >
      {/* Hover Background */}
      <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-50 via-blue-950 to-gray-900 group-hover:opacity-100 z-0"></span>

      {/* Glass gradients */}
      <span className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent opacity-5 z-10"></span>
      <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5 z-10"></span>
      <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5 z-10"></span>
      <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5 z-10"></span>
      <span className="absolute inset-0 w-full h-full border border-white rounded-lg opacity-10 z-10"></span>

      {/* Glow on hover */}
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5 z-0"></span>

      {/* Button text */}
      <span className="relative z-20 text-xl text-white-50 font-semibold hover:text-white">Get in Touch</span>
    </motion.button>
  );
};

export default CTAButton;

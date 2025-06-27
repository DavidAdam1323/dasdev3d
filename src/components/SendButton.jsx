import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function SendButton({ isLoading = false }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      type="submit"
      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white 
                  bg-gradient-to-tr from-gray-900 to-[var(--blue-50)] hover:from-gray-800 hover:to-[var(--white-50)]
                  active:scale-95 transition-transform duration-200
                  shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
      whileTap={{ scale: 0.95 }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : (
        <>
          <span>Send Message</span>
          <FaPaperPlane className={`transform transition-transform duration-200 ${isPressed ? "-translate-y-0.5" : "-translate-y-1"}`} />
        </>
      )}
    </motion.button>
  );
}

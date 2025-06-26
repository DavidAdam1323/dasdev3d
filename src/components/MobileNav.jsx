import NavItem from "./NavItem";
import { useState } from "react";
import { navLinks } from "../constants/index";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = () => {
  // State to track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Framer Motion animation variants for each menu item (li)
  const itemVariants = {
    // Hidden state (before appearing or when exiting)
    hidden: { opacity: 0, y: -10 },

    // Visible state with animation delay based on index (i)
    // Adds a staggered drop effect (1 by 1)
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2, // delay each item slightly
        type: "spring",       // spring animation for natural motion
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <nav className="relative lg:hidden">
      {/* Hamburger icon to toggle the menu */}
      <div onClick={toggleMenu}>
        <Hamburger
          toggled={isOpen} // sync open state with hamburger animation
          toggle={setIsOpen}
          size={42}
          color="#d9ecff"
          rounded
        />
      </div>

      {/* Animated menu dropdown using Framer Motion */}
      <AnimatePresence>
        {/* Only render menu when isOpen is true */}
        {isOpen && (
          <motion.menu
            // Menu enter animation (fades & scales in)
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            // Menu exit animation (fades & scales out)
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute w-[15ch] sm:w-[20ch] px-1 sm:px-2 bg-gray-900 
              shadow-xl right-0 mt-6 sm:mt-8 rounded-md z-50 before:content-[''] 
              before:absolute before:w-4 before:h-4 before:bg-gray-900 
              before:rotate-45 before:right-4 before:-top-2"
          >
            <ul className="flex flex-col divide-y divide-[var(--blue-50)]">
              {/* Map through navLinks and render animated NavItems */}
              {navLinks.map(({ id, name, icon }, index) => (
                <motion.li
                  key={name}
                  custom={index}          // passes index to variants for stagger effect
                  initial="hidden"        // start hidden
                  animate="visible"       // animate in
                  exit="hidden"           // animate out when removed
                  variants={itemVariants} // control animation per item
                >
                  <NavItem
                    id={id}
                    name={name}
                    icon={icon}
                    variant="mobile"
                    onClick={() => {
                      // Close the menu after selecting a nav item
                      setIsOpen(false);
                    }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.menu>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;

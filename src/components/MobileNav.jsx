import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { navLinks } from "../constants/index";
import NavItem from "./NavItem";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative lg:hidden">
      {/* Hamburger Menu Icon */}
      <div onClick={toggleMenu}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={42}
          color="#d9ecff"
          rounded
        />
      </div>

      {/* Drop-Down Menu */}
      <menu
        className={`absolute w-[15ch] sm:w-[20ch] px-1 sm:px-2 bg-gray-900 shadow-xl right-0 mt-6 sm:mt-8 rounded-md 
        z-50 transition-all duration-300 before:content-[''] before:absolute before:w-4 
        before:h-4 before:bg-gray-900 before:rotate-45 before:right-4 before:-top-2
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col divide-y divide-blue-50">
          {navLinks.map(({ id, name, icon }) => (
            <NavItem
              key={name}
              id={id}
              name={name}
              icon={icon}
              variant="mobile"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </ul>
      </menu>
    </nav>
  );
};

export default MobileNav;

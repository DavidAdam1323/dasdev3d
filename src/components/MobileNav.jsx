import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { mobileNavLinks } from "../constants/index";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative lg:hidden">
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
      <div
        className={`absolute w-[15ch] sm:w-[20ch] px-1 sm:px-2 bg-black-200 shadow-xl right-0 mt-8 rounded-md 
        z-50 transition-all duration-300 before:content-[''] before:absolute before:w-4 
        before:h-4 before:bg-black-200 before:rotate-45 before:right-4 before:-top-2
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col divide-y divide-blue-50">
          {mobileNavLinks.map(({ icon: Icon, name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="block px-5 py-3 text-xl sm:text-2xl sm:py-6 text-white-50"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  <Icon className="text-blue-50 mr-2" />
                  {name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;

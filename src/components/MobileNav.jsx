import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileNavLinks = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

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
        className={`absolute w-87.5 bg-black-100 shadow-xl right-0 mt-3 rounded-md 
        z-50 transition-all duration-300 before:content-[''] before:absolute before:w-4 
        before:h-4 before:bg-black-200 before:rotate-45 before:right-4 before:-top-2
        ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col divide-y divide-black-200">
          {mobileNavLinks.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="block px-5 py-3 text-lg text-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;

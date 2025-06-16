import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Logo from "../assets/dasdev-logo.png";
import NavLinks from "./NavLinks";

const NavBar = ({ showAnnouncement }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      className={`navbar fixed w-full left-1/2 -translate-x-1/2 md:py-4 py-2.5
        transition-all duration-300 ease-in-out z-[100] bg-black-100 ${
          showAnnouncement ? "top-[24px]" : "top-0"
        }`}
    >
      <div className="inner flex items-center justify-between">
        {/* Logo */}
        <a href="#hero">
          <img
            src={Logo}
            alt="Logo"
            className="w-36 xl:w-40 h-auto transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="desktop hidden lg:flex">
          <NavLinks />
        </nav>

        {/* Contact Button - only desktop */}
        <a href="#contact" className="hidden lg:block contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>

        {/* Hamburger - only mobile */}
        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={42}
            color="#d9ecff"
            rounded
            label="Toggle menu"
          />
        </div>

        {/* Mobile Menu */}
      </div>
    </header>
  );
};

export default NavBar;

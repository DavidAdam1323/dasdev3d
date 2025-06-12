import NavLinks from "./NavLinks";
import Logo from "../assets/dasdev-logo.png";

const NavBar = () => {
  return (
    <header className="navbar bg-black">
      <div className="inner px-4 py-4 xl:rounded-lg rounded-lg bg-black-100 border border-black-200">
        <a href="#hero">
          <img
            src={Logo}
            alt="Logo"
            className="logo px-2  w-36 xl:w-40 h-auto"
          />
        </a>
        <nav className="desktop">
          <NavLinks />
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;

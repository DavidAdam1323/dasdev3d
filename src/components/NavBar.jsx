import NavLinks from "./NavLinks";
import Logo from "../assets/dasdev-logo.png";

const NavBar = () => {
  return (
    <header className="navbar bg-black">
      <div className="inner px-2 py-2 rounded-xl bg-[#191919]">
        <a href="#profile">
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

import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
import CTAButton from "../components/CTAButton";
import logo from "../assets/dasdev-logo.png";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900">
      <nav className="flex items-center justify-between px-5 md:px-10 xl:px-20 py-1.5 sm:py-2 md:py-2.5 lg:py-3.5">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.05 }}
            className="w-40 h-auto"
          />
        </a>
        <DeskNav />
        <MobileNav />
        <CTAButton />
      </nav>
    </header>
  );
};

export default NavBar;

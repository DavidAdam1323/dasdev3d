import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";

const NavBar = ({ showAnnouncement }) => {
  return (
    <header
      className={`fixed z-[100] w-full left-1/2 -translate-x-1/2 px-5 md:px-10 xl:px-20 
        bg-gray-900 transition-all duration-300 ease-in-out ${
          showAnnouncement ? "top-[18px] sm:top-[24px]" : "top-0"
        }`}
    >
      <nav className="flex items-center justify-between py-1 md:py-2 lg:py-4">
        <a href="#home">
          <img
            src="src/assets/dasdev-logo.png"
            alt="Logo"
            className="h-7 transition-transform duration-300 hover:scale-105"
          />
        </a>
        <DeskNav />
        <MobileNav />
        <div className="hidden lg:block space-x-3 md:space-x-0">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

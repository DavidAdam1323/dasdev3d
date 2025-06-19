import { FaDownload, FaFolderOpen } from "react-icons/fa";

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-3 w-full md:w-auto">
      {/* Download CV Button */}
      <a
        href="" 
        download
        className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 
          rounded-lg bg-black-200 text-white-50 font-semibold text-lg 
          hover:bg-blue-50 hover:text-white transition duration-300 group"
      >
        <FaDownload className="text-xl group-hover:animate-bounce" />
        <span>Download My CV</span>
      </a>

      {/* Explore Work Button */}
      <a
        href="#projects"
        className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 
          rounded-lg border border-white-50 text-white-50 font-semibold text-lg 
          hover:bg-white-50 hover:text-black-200 transition duration-300 group"
      >
        <FaFolderOpen className="text-xl group-hover:scale-110 transition-transform" />
        <span>Explore My Work</span>
      </a>
    </div>
  );
};

export default HeroButtons;

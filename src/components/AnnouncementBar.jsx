import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AnnouncementBar = ({ show }) => {
  if (!show) return null;

  return (
    <div
      className="w-full bg-black-200 text-white-50 text-sm md:text-base 
      px-5 md:px-20 py-0.5 flex justify-between items-center flex-wrap shadow-md z-40 
      fixed top-0 left-0 right-0 transition duration-300 ease-in-out animate-pulse"
    >
      {/* Mobile layout */}
      <div className="w-full flex justify-between md:hidden">
        <span className="text-blue-50">📍 London, UK — Thanks for visiting!</span>
        <div className="flex items-center gap-3">
          <a href="https://github.com/DavidAdam1323" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/davidadamsilva" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:davidadamgtr@gmail.com?subject=Let's Work Together&body=Hi David,">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="w-full justify-between hidden md:flex text-sm">
        <span className="text-blue-50">📍 London, UK</span>
        <span className="text-blue-50">
          Welcome to my portfolio, thanks for visiting!
        </span>
        <div className="flex items-center gap-6 text-xl">
          <a href="https://github.com/DavidAdam1323" target="_blank" rel="noreferrer" className="hover:text-blue-50 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/davidadamsilva" target="_blank" rel="noreferrer" className="hover:text-blue-50 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:davidadamgtr@gmail.com?subject=Let's Work Together&body=Hi David," className="hover:text-blue-50 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

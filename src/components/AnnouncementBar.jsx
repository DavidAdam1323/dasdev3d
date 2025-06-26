import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const AnnouncementBar = () => {
  return (
    <div
      className="sticky top-0 z-40 w-full bg-[var(--blue-50)] text-black px-5 
      sm:px-10 xl:px-20 py-0.5 md:py-1 text-sm md:text-base animate-pulse"
    >
      {/* Mobile layout */}
      <div className="w-full flex justify-between md:hidden">
        <span className="text-black text-[0.6rem]">
          📍 London, UK | Welcome! Thanks for visiting.
        </span>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/DavidAdam1323"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/davidadamsilva"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/DavidAdam1323"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="w-full justify-between hidden md:flex text-sm">
        <span className="text-black text-[0.85rem]">📍 London, UK</span>
        <span className="text-black text-[0.85rem]">
          Welcome to my digital portal! I'm glad you're here, thanks for
          visiting!
        </span>
        <div className="flex items-center gap-3 text-xl">
          <a
            href="https://github.com/DavidAdam1323"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/davidadamsilva"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/DavidAdam1323"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;

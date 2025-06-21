import { navLinks } from "../constants/index";
import { FaGithub, FaLinkedin, FaCubes, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white-50 py-5 lg:py-10 px-5 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-7 ">
        {/* Brand */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold">David Adam Silva</h3>
          <p className="flex items-center gap-2 text-sm text-blue-50">
            <FaCubes />
            Creative Developer & Problem Solver
          </p>
        </div>

        {/* Navigation Links */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <ul className="flex gap-7 xl:gap-20">
            {navLinks.map(({ id, name, icon: Icon }) => (
              <li key={name} className="hover:text-blue-50 transition">
                <a
                  href={id}
                  title={name}
                  className="flex flex-col items-center"
                >
                  <Icon className="lg:hidden text-blue-50" />
                  <span className="text-xs xl:text-sm text-white hover:text-blue-50 transition">
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="order-1 lg:order-2 flex gap-5 lg:gap-5 text-lg">
          <a
            href="https://github.com/DavidAdam1323"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-50 transition"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://linkedin.com/in/davidadamsilva"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-50 transition"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            href="https://x.com/DavidAdam1323"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-50 transition"
          >
            <FaXTwitter className="text-4xl" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black-200 mt-5 pt-5 lg:mt-10 lg:pt-10 text-center text-xs text-blue-50">
        © {new Date().getFullYear()} David A Silva. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import { links } from "../constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white-50 py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">David Adam Silva</h3>
          <p className="text-sm text-blue-50">
            Creative Developer & Problem Solver
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col justify-center">
          <ul className="flex md:gap-30 gap-5 text-sm text-blue-50">
            {links.map(({ link, name }) => (
              <li key={name} className="hover:text-white-50 transition">
                <a href={link} title={name}>
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex md:gap-15 gap-5 text-lg">
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
            href="mailto:davidadamgtr@gmail.com?subject=Let's Work Together&body=Hi David,"
            className="hover:text-blue-50 transition"
          >
            <FaEnvelope className="text-4xl" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black-200 mt-10 pt-6 text-center text-xs text-blue-50">
        © {new Date().getFullYear()} David A Silva. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

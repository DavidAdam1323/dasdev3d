import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MotionItem } from "../AnimatedSection";
import AnimatedBubblyButton from "../AnimatedBubblyButton";

const getButtonClass = (isMobile) =>
  isMobile
    ? "w-full flex flex-col justify-center items-center"
    : "w-full md:w-[350px] h-auto";

const getIconContainerClass = (isMobile) =>
  isMobile
    ? "flex flex-row justify-center text-[var(--white-50)] items-center gap-5 my-5"
    : "flex justify-center md:gap-15 gap-5 text-lg";

const AboutSocials = ({ isMobile }) => (
  <MotionItem>
    <div className={!isMobile ? "flex justify-between items-center pt-4" : ""}>
      <div className={`${getButtonClass(isMobile)} relative overflow-visible`}>
        <AnimatedBubblyButton />
      </div>

      <div className={getIconContainerClass(isMobile)}>
        <a
          href="https://github.com/DavidAdam1323"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--blue-50)] transition"
        >
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://linkedin.com/in/davidadamsilva"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--blue-50)] transition"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="https://x.com/DavidAdam1323"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--blue-50)] transition"
        >
          <FaXTwitter className="text-4xl" />
        </a>
      </div>
    </div>
  </MotionItem>
);

export default AboutSocials;

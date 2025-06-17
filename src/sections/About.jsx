import { useRef, useEffect, useState } from "react";
import Button from "../components/Button";
import TitleHeader from "../components/TitleHeader";
import AboutMePic from "../assets/AboutMePic.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import useScrollReveal from "../hooks/useScrollReveal";                                     // Custom hook for scroll-triggered animations
import { useCollapse } from "react-collapsed";                                              // Hook to manage collapsible content

const About = () => {
  const sectionRef = useRef(null);                                                          // Ref to the main section for scroll-based animations

  const animateScrollReveal = useScrollReveal();                                            // Retrieve animation trigger function from custom scroll reveal hook

  const [isMobile, setIsMobile] = useState(false);                                          // Track whether we're on a mobile screen
  const [isExpanded, setIsExpanded] = useState(false);                                      // Track whether the collapsible text is expanded

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });                 // Always call collapse hook — React rule — even if you won’t use the props on desktop

  const collapseProps = isMobile                                                            // Collapse behavior: apply real collapse on mobile, otherwise keep content always visible
    ? getCollapseProps()
    : { style: { height: "auto", overflow: "visible" } };

  useEffect(() => {                                                                         // Check screen size on mount and whenever window resizes
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();                                                                      // Set on mount
    window.addEventListener("resize", checkScreenSize);                                     // Listen for future resizes
    return () => window.removeEventListener("resize", checkScreenSize);                     // Cleanup on unmount
  }, []);

  useEffect(() => {                                                                         // Trigger scroll animations (only on desktop view)
    if (!isMobile && sectionRef.current) {
      animateScrollReveal(sectionRef, {
        selector: ".reveal",                                                                // target only elements with this class
        stagger: 0.4,                                                                       // delay between each item’s animation
        duration: 1.5,                                                                      // how long the animation lasts
      });
    }
  }, [isMobile, animateScrollReveal]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden md:pt-40 pt-35"
    >
      {/* Title section with eyebrow and headline */}
      <TitleHeader
        eyebrowText="Get to Know Me"
        titleText="A Little About My Journey"
      />

      <div className="mx-auto md:px-20 px-5 mt-7">
        <div
          className="lg:mt-10 mt-5 grid grid-cols-1 md:grid-cols-[1fr_2fr] 
              items-center bg-black-100 border border-black-200 rounded-lg
               relative reveal"
        >
          {/* LEFT SIDE - PROFILE IMAGE */}
          <div className="order-1 md:order-2 p-5 md:h-[600px] reveal">
            <img
              src={AboutMePic}
              alt="Profile Picture"
              className="rounded-lg w-full md:h-[558px] object-cover"
            />
          </div>

          {/* RIGHT SIDE - TEXT CONTENT */}
          <div
            className="order-2 md:order-3 w-full md:space-y-7 space-y-3 text-sm 
                md:text-[21px] text-justify text-white-50 lg:pl-0 lg:pr-5 p-5 z-10"
          >
            {/* Intro paragraph — animated only on desktop */}
            <p className={!isMobile ? "reveal" : ""}>
              My journey into tech began on an unexpected stage; the music industry.
            </p>

            {/* Collapsible Section — expands on mobile */}
            <div
              {...collapseProps}
              className="md:space-y-7 space-y-3 text-sm md:text-[21px]"
            >
              <p className={!isMobile ? "reveal" : ""}>
                For 21 years, I worked as a session guitarist, collaborating
                with artists, tutoring students, and performing across countless
                venues. It was a career that demanded quick thinking, strong
                communication, and the ability to adapt under pressure;
                qualities that became second nature to me. Those years taught me
                how to connect with people, solve problems creatively, and stay
                calm in high-stakes environments.
              </p>

              <p className={!isMobile ? "reveal" : ""}>
                When I transitioned into tech, I discovered that many of the
                same principles applied. Writing clean, efficient code reminded
                me of composing music; deliberate, layered, and collaborative. I
                found that my strengths in communication, teamwork, and
                attention to detail translated naturally into development.
              </p>

              <p className={!isMobile ? "reveal" : ""}>
                I’m someone who thrives in collaborative environments, takes
                initiative, and is always looking at how my contributions fit
                into the bigger picture. I'm passionate about creating
                meaningful digital experiences and working with teams that value
                clarity, creativity, and continuous improvement.
              </p>

              {/* Download CV Button (only animated on desktop) */}
              <div className={!isMobile ? "flex justify-between items-center pt-4" : ""}>
                <div className={!isMobile ? "w-full md:w-[350px] h-auto reveal" : "mt-7"}>
                  <Button id="" href="" className="" text="Download My CV" />
                </div>

                {/* Social Icons */}
                <div className={!isMobile ? "flex justify-center md:gap-15 gap-5 text-lg reveal" : "flex flex-row justify-center items-center gap-10 my-7"}>
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
            </div>

            {/* Red More/Less Button — Only visible on mobile */}
            {isMobile && (
              <div className="flex justify-center md:justify-start">
                <button
                  {...getToggleProps({
                    onClick: () => setIsExpanded((prev) => !prev),
                  })}
                  className="py-2.5 px-5 text-sm rounded-lg bg-black-200 inset-shadow-black 
                            border border-black-50 inset-shadow-sm text-white-50 font-semibold"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

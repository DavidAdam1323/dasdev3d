// import Bg from "/images/bg.png";
import IdeasIcon from "/images/ideas.svg";
import ConcecptsIcon from "/images/concepts.svg";
import DesignsIcon from "/images/designs.svg";
import CodeIcon from "/images/code.svg";
import Button from "../components/Button";
import HeroExp from "../components/models/heroModel/HeroExp";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  const words = [
    { text: "Ideas", img: IdeasIcon },
    { text: "Concepts", img: ConcecptsIcon },
    { text: "Designs", img: DesignsIcon },
    { text: "Code", img: CodeIcon },
    { text: "Ideas", img: IdeasIcon },
    { text: "Concepts", img: ConcecptsIcon },
    { text: "Designs", img: DesignsIcon },
    { text: "Code", img: CodeIcon },
  ];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 z-10">
        <img src={Bg} alt="background" />
      </div> */}

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="hero-left">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.img}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl text-[15px] relative z-10 pointer-events-none">
              Hi! I'm David, a London-based developer building high-quality
              digital experiences.
            </p>
            <Button
              id="button"
              href="#projects"
              className="md:w-80 md:h-16 w-60 h-12"
              text="See My Work"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure className="hero-right">
          <div className="model-bg">
            <HeroExp />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;

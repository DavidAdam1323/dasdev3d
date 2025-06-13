import { useEffect, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import ProjectCard from "../components/ProjectCard";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants";

const Projects = () => {
  const sectionRef = useRef(null);
  const animate = useScrollReveal();

  useEffect(() => {
    animate(sectionRef, {
      selector: ".reveal",
      stagger: 0.2,
      duration: 0.8,
    });
  }, [animate]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden md:pt-40 pt-25"
    >
      <div className="md:mb-20 mb-7">
        <TitleHeader
          eyebrowText="See What I Build"
          titleText="Through Code & Design"
        />
      </div>

      {/* Mobile Carousel */}
      <div className="w-full md:hidden overflow-x-auto pb-4">
        <div className="flex gap-6 px-5 snap-x snap-mandatory scroll-smooth">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[85%] snap-start shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-3-cols w-full px-4 md:px-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

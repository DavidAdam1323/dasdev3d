import { useRef } from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { MotionSection, MotionItem } from "../components/AnimatedSection";

const Projects = () => {
  const projectRef = useRef(null);

  return (
    <Section
      id="projects"
      ref={projectRef}
      className="relative overflow-hidden padding-x-lg pt-40"
    >
      <TitleHeader
        title="Explore My Work"
        subTitle="Projects That Showcase My Skills & Creativity"
      />

      {/* Mobile Carousel */}
      <MotionSection className="w-full md:hidden overflow-x-auto pb-4">
        <MotionItem className="flex gap-6 px-0 snap-x snap-mandatory scroll-smooth">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[85%] snap-start shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </MotionItem>
      </MotionSection>

      {/* Desktop Grid */}
      <div className="hidden md:flex wrap-normal justify-between w-full px-5 md:px-0">
        {/* <div className="hidden md:grid grid-3-cols w-full px-5 md:px-20"> */}
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

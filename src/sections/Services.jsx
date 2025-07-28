import React from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";
import { MotionSection, MotionItem } from "../components/AnimatedSection";
import { services } from "../constants";
import { FiSliders, FiArrowDown } from "react-icons/fi";

const Services = () => {
  return (
    <Section id="services">
      <TitleHeader
        title={"Crafting Digital Experiences"}
        subTitle={"Services Designed to Elevate Your Project"}
      />
      <MotionSection className="space-y-12">
        {services.map((service, index) => (
          <MotionItem
            key={index}
            className="pb-5 border-b border-[var(--black-200)] last:border-0"
          >
            <div className="flex flex-col md:flex-row gap-5">
              
              {/* Icon & Title Column */}
              <div className="md:w-1/4">
                <div className="flex items-center gap-4">
                  <span className="p-2.5 bg-[var(--black-200)] text-2xl rounded-lg">
                    {React.createElement(service.icon)}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-emerald-600 mt-0">
                      {service.projects}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[var(--blue-50)] text-sm">
                  {service.description}
                </p>
              </div>

              {/* Skills Column */}
              <div className="md:w-3/4">
                <div className="flex items-baseline mb-2.5">
                  <FiSliders
                    className="shrink-0 relative top-[2px] mr-2"
                    size={14}
                  />
                  <h4 className="text-sm font-medium text-white">
                    SKILLS APPLIED
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[var(--black-50)] text-xs rounded-full border border-[var(--black-200)] shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Learning Progress Bar */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-[var(--blue-50)] mb-1.5">
                    <span>Current confidence</span>
                    <span>Growing →</span>
                  </div>
                  <div className="w-full h-2 bg-red-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#890f27]"
                      style={{
                        width: `${
                          index === 0 ? "85%" : index === 1 ? "70%" : "65%"
                        }`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </MotionItem>
        ))}

        {/* Learning Callout */}
        <div className="mt-0 p-5 bg-[var(--black-100)] border border-[var(--black-200)] rounded-lg">
          <h4 className="font-bold text-white mb-2">Currently Leveling Up!</h4>
          <p className="text-[var(--blue-50)] text-sm mb-3">
            Actively expanding into:{" "}
            <span className="text-green-300">Python fundamentals</span>,
            <span className="text-green-300"> Next.js</span>, and
            <span className="text-green-300"> backend integration</span> through
            courses and personal projects.
          </p>
          <a
            href="#projects"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white 
           bg-gradient-to-tr from-gray-900 to-[var(--blue-50)] hover:from-gray-800 hover:to-[var(--white-50)]
           active:scale-95 transition-transform duration-200"
          >
            <span className="flex items-baseline text-md">
              See My Learning Journey
              <FiArrowDown
                className="ml-1.5 relative top-[2px] animate-bounce"
                size={16}
              />
            </span>
          </a>
        </div>
      </MotionSection>
    </Section>
  );
};

export default Services;

import { useEffect, useState } from "react";
import Section from "../components/Section";
import TitleHeader from "../components/TitleHeader";
import AboutImage from "../components/About/AboutImage";
import AboutText from "../components/About/AboutText";
import { MotionSection, MotionItem } from "../components/AnimatedSection";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Section id="about">
      <TitleHeader
        title="Get to Know Me"
        subTitle="A Little About My Journey"
      />

      <MotionSection>
        <MotionItem className="w-full sd:max-w-[400px] flex flex-col justify-center items-center border border-[var(--black-50)] bg-[var(--black-100)] rounded-lg">
          <div className="p-5 pb-0 w-full">
            <AboutImage />
          </div>
          <AboutText isMobile={isMobile} />
        </MotionItem>
      </MotionSection>
    </Section>
  );
};

export default About;

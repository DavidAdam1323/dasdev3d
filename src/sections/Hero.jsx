import HeroTitleHeader from "../components/Hero/HeroTitleHeader";
import HeroExp from "../components/models/heroModel/HeroExp";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroButtons from "../components/Hero/HeroButtons";
import Section from "../components/Section";
import { FaLayerGroup } from "react-icons/fa6";

const Hero = () => {
  return (
    <Section id={"home"}>
      <div className="">
        <div className="py-5">
          <HeroTitleHeader />
        </div>

        {/* 3D Model Experience */}
        <div className="py-0">
          <div className="hero3dmodel-background relative">
            <div
              className="absolute z-10 top-0 right-0 w-full flex justify-end 
              items-center text-sm font-semibold text-[var(--white-50)] gap-1 p-2"
            >
              <FaLayerGroup />
              <p>
                <span className="text-[var(--blue-100)]">3D</span> exp.
              </p>
            </div>
            <HeroExp />
          </div>
        </div>

        <div className="py-5">
          <p className="text-[var(--blue-50)] text-sm md:text-xl relative z-10 pointer-events-none">
            Hello there 👋🏼! <br />
            I'm David, a London-based developer passionate about empowering
            businesses and individuals with innovative digital experiences
            designed for success.
          </p>
        </div>

        <div>
          <HeroButtons />
        </div>

        <div className="py-5">
          <AnimatedCounter />
        </div>
      </div>
    </Section>
  );
};

export default Hero;

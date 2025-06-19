import HeroTitleHeader from "../components/Hero/HeroTitleHeader";
import HeroExp from "../components/models/heroModel/HeroExp";
import AnimatedCounter from "../components/AnimatedCounter";
import HeroButtons from "../components/Hero/HeroButtons";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        <div>
          {/* Small Devices Layout */}
          <HeroTitleHeader />
        </div>

        {/* 3D Model */}
        <figure className="hero-right">
          <div className="model-bg">
            <HeroExp />
          </div>
        </figure>

        <p className="text-blue-50 text-sm md:text-xl relative z-10 pointer-events-none">
          Hello there 👋🏼! <br />
          I'm David, a London-based developer passionate about empowering
          businesses and individuals with innovative digital experiences
          designed for success.
        </p>

        <HeroButtons />
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;

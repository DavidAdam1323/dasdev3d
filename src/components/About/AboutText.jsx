import AnimatedButton from "../AnimatedButton";
import useResponsiveCollapse from "./useResponsiveCollapse";
import AboutSocials from "./AboutSocials";

const AboutText = ({ isMobile }) => {
  const { isExpanded, pendingState, collapseProps, handleToggle } =
    useResponsiveCollapse(isMobile);

  return (
    <div className="text-justify space-y-4 text-sm md:text-[21px] text-[var(--blue-50)] p-5">
      <p>
        My journey into tech began on an unexpected stage; the music industry.
      </p>

      <div {...collapseProps} className="space-y-4 clear-both md:clear-none">
        <p>
          For 21 years, I worked as a session guitarist, collaborating with
          artists, tutoring students, and performing across countless venues. It
          was a career that demanded quick thinking, strong communication, and
          the ability to adapt under pressure; qualities that became second
          nature to me. Those years taught me how to connect with people, solve
          problems creatively, and stay calm in high-stakes environments.
        </p>
        <p>
          When I transitioned into tech, I discovered that many of the same
          principles applied. Writing clean, efficient code reminded me of
          composing music; deliberate, layered, and collaborative. I found that
          my strengths in communication, teamwork, and attention to detail
          translated naturally into development.
        </p>
        <p>
          I’m someone who thrives in collaborative environments, takes
          initiative, and is always looking at how my contributions fit into the
          bigger picture. I'm passionate about creating meaningful digital
          experiences and working with teams that value clarity, creativity, and
          continuous improvement.
        </p>

        <AboutSocials isMobile={isMobile} />
      </div>

      {isMobile && (
        <AnimatedButton
          toggled={pendingState !== null ? pendingState : isExpanded}
          onToggle={handleToggle}
          textOff="READ MORE"
          textOn="READ LESS"
        />
      )}
    </div>
  );
};

export default AboutText;

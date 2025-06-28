import { useRef } from "react";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import TitleHeader from "../components/TitleHeader";
import { FaBriefcase } from "react-icons/fa";
import { MotionSection, MotionItem } from "../components/AnimatedSection";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <Section id="contact" ref={contactRef}>
      <TitleHeader
        title="Let’s Build Together"
        subTitle="Have a project or just want to chat code? Reach out."
      />

      <MotionSection className="w-full max-w-[400px] flex flex-col justify-center items-center gap-5">
        <MotionItem className="space-y-4 text-[var(--white-50)] max-w-3xl">
          <p className="text-[var(--blue-50)] text-sm sm:text-base leading-relaxed">
            Whether you're starting a new project, need help solving a complex
            problem, or simply want to explore potential collaboration — I'm
            here to help.
          </p>
          <p className="text-[var(--blue-50)] text-sm sm:text-base leading-relaxed">
            Fill out the form below with as much detail as you'd like. I
            typically respond within 1-2 business days.
          </p>
        </MotionItem>

        <MotionItem className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-end items-center pr-2">
            <p className="pr-1 text-[var(--white-50)] text-xs sm:text-base italic">
              * Professional inquiries only, please.
            </p>
            <FaBriefcase className="text-xs text-[var(--blue-50)]" />
          </div>

          <ContactForm />
        </MotionItem>
      </MotionSection>
    </Section>
  );
};

export default Contact;

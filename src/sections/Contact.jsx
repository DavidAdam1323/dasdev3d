import { useRef, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import { FaBriefcase } from "react-icons/fa";

const Contact = () => {
  const contactRef = useRef(null);

  const animate = useScrollReveal();

  useEffect(() => {
    animate(contactRef, {
      selector: ".reveal",
      stagger: 0.4,
      duration: 0.8,
    });
  }, [animate]);

  return (
    <Section id={"contact"} ref={contactRef}>
      <div className="w-full max-w-[400px] flex flex-col justify-center items-center gap-5">
        <div>
          <div className="space-y-4 text-[var(--white-50)] max-w-3xl">
          {/* Header / Intro */}
            <h2 className="text-2xl text-white sm:text-3xl font-bold leading-snug">
              Let's Connect and Collaborate
            </h2>
            <p className="text-[var(--blue-50)] text-sm sm:text-base leading-relaxed">
              Whether you,re starting a new project, need help solving a complex
              problem, or simply want to explore potential collaboration — I'm
              here to help.
            </p>
            <p className="text-[var(--blue-50)] text-sm sm:text-base leading-relaxed">
              Fill out the form below with as much detail as you'd like. I
              typically respond within 1-2 business days.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-end items-center pr-4">
            <p className="pr-1 text-white text-xs sm:text-base leading-relaxed italic">
              * Professional inquiries only, please.
            </p>
            <FaBriefcase className="text-xs text-[var(--blue-50)]" />
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;

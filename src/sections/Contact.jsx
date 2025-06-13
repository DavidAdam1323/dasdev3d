import { useRef, useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contactModel/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const contactRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const animate = useScrollReveal();

  useEffect(() => {
    animate(contactRef, {
      selector: ".reveal",
      stagger: 0.4,
      duration: 0.8,
    });
  }, [animate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="relative overflow-hidden md:pt-40 pt-25"
    >
      <div className="mx-auto px-5 w-full h-full md:px-20">
        <TitleHeader
          eyebrowText="Get In Touch"
          titleText="Let's Create Digital Experiences"
        />

        <div className="grid-12-cols xl:mt-16 mt-9 reveal">
          {/* CONTACT FORM -LEFT SIDE */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-lg md:py-10 py-5 px-5">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Full Name..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email Address..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading} className="reveal">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* 3D EXPERIENCE - RIGHT SIDE */}
          <div className="xl:col-span-7 min-h-96">
            <div
              className="w-full max-w-[350px] sm:max-w-[500px] xl:max-w-full 
                h-[280px] sm:h-[400px] xl:h-full border border-[#c78d56]
                bg-[#cd7c2e] rounded-lg overflow-hidden 
                grid place-items-center hover:cursor-grab"
            >
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

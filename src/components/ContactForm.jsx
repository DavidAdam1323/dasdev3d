import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import SendButton from "./SendButton";

const ContactForm = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full max-w-[400px] h-auto py-5 px-5 flex-center 
      border border-[var(--black-50)] bg-[var(--black-100)] rounded-lg"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col  gap-5"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name">
            Name:
          </label>
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

        {/* Email Field */}
        <div>
          <label htmlFor="email">
            Email:
          </label>
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

        {/* Message Field */}
        <div>
          <label htmlFor="message">
            Message:
          </label>
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

        {/* Submit Button */}
        <SendButton isLoading={loading} />
      </form>
    </div>
  );
};

export default ContactForm;

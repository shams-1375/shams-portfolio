import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import { profile } from "../data.js";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const field =
  "w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500";

const info = [
  { Icon: FaEnvelope, label: profile.email, href: `mailto:${profile.email}` },
  { Icon: FaPhoneAlt, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: FaMapMarkerAlt, label: profile.location },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS keys are missing. Add them to your .env file.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-contact py-16">
      <div className="container-x max-w-2xl">
        <SectionTitle eyebrow="Get in touch" title="Contact" />

        <div className="mb-10 flex flex-col items-center justify-center gap-4 text-slate-300 sm:flex-row sm:flex-wrap sm:gap-8">
          {info.map(({ Icon, label, href }) => {
            const content = (
              <>
                <Icon className="text-brand-400" /> {label}
              </>
            );
            return href ? (
              <a key={label} href={href} className="inline-flex items-center gap-2 transition hover:text-brand-400">
                {content}
              </a>
            ) : (
              <span key={label} className="inline-flex items-center gap-2">
                {content}
              </span>
            );
          })}
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              className={field}
              type="text"
              name="from_name"
              placeholder="Your name"
              required
              autoComplete="name"
            />
            <input
              className={field}
              type="email"
              name="reply_to"
              placeholder="Your email"
              required
              autoComplete="email"
            />
          </div>
          <input className={field} type="text" name="subject" placeholder="Subject" required />
          <textarea
            className={`${field} resize-none`}
            name="message"
            rows="6"
            placeholder="Your message"
            required
          />

          <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="min-h-6 text-center text-sm">
            {status === "success" && (
              <span className="text-emerald-400">Thanks! Your message has been sent.</span>
            )}
            {status === "error" && (
              <span className="text-red-400">Something went wrong. Please try again later.</span>
            )}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
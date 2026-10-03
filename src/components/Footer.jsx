import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="bg-footer border-t border-slate-800 py-24">
      <div className="container-x flex flex-col items-center gap-6 text-sm text-slate-500 md:flex-row md:justify-between">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <ul className="flex flex-wrap justify-center gap-5">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="transition hover:text-brand-400">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-xl">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-brand-400"
          >
            <FaGithub />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-brand-400"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition hover:text-brand-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
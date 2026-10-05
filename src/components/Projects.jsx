import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import { projects } from "../data.js";


function ProjectImage({ src, title }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-800 bg-slate-950">
      {failed || !src ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-600/40 via-indigo-900/60 to-slate-950">
          <span className="px-4 text-center text-3xl font-extrabold text-white/80">
            {title}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={`${title} application screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-projects py-24">
      <div className="container-x">
        <SectionTitle eyebrow="Things I've built" title="Projects" />

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-brand-500/50 hover:shadow-[0_18px_40px_-15px_rgba(139,92,246,0.4)]"
            >
              <ProjectImage src={p.image} title={p.title} />

              <div className="flex flex-1 flex-col p-5">
                {/* Title + period */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-white">
                      {p.title}
                    </h3>

                    <p className="mt-1 text-sm text-brand-400">
                      {p.subtitle}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-400">
                    {p.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">
                  {p.description}
                </p>

                {/* Technologies */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-slate-800 bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5 border-t border-slate-800 pt-4 text-sm font-semibold">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-brand-400"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}

                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-brand-400"
                    >
                      <FaGithub className="text-base" />
                      Code Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
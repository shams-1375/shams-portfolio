import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import { skills } from "../data.js";

const icons = { code: FaCode, server: FaServer, tools: FaTools };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-skills py-24">
      <div className="container-x">
        <SectionTitle eyebrow="What I work with" title="Skills" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = icons[group.icon] || FaCode;
            return (
              <motion.div
                key={group.group}
                variants={item}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 18 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur transition-[border-color,box-shadow] duration-300 hover:border-brand-500/60 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.55)]"
              >
                <span aria-hidden className="shine pointer-events-none absolute inset-0" />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-500/30"
                />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-xl text-brand-400 transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-brand-500 group-hover:text-white">
                      <Icon />
                    </span>
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-brand-400">
                      {group.group}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className="cursor-default rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm text-brand-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
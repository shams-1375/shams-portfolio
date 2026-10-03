import { motion } from "framer-motion";
import { FaFolderOpen } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="bg-experience py-24">
      <div className="container-x max-w-5xl">
        <SectionTitle eyebrow="Where I've worked" title="Experience" />

        <ol className="relative ml-3 border-l border-slate-700">
          {experience.map((job, i) => (
            <motion.li
              key={job.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-brand-500" />

              <p className="text-sm font-medium text-brand-400">
                {job.period}
              </p>

              <h3 className="text-xl font-bold text-white">
                {job.role} - {job.company}
              </h3>

              <p className="text-sm text-slate-500">{job.location}</p>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        {/* Certifications & Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center px-4"
        >
          <a
            href="https://drive.google.com/file/d/1UlOkSFTYIcNIA3GCPc1XMpFMW-uK4MuM/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-2 flex w-full items-center justify-center gap-2 text-center text-sm sm:w-auto sm:justify-start sm:text-base"
          >
            <span>View Certifications & Recommendations</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
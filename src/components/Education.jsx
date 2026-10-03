import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionTitle from "./SectionTitle.jsx";
import { education } from "../data.js";

export default function Education() {
    return (
        <section id="education" className="bg-education py-24">
            <div className="container-x">
                <SectionTitle
                    eyebrow="What I've studied"
                    title="Education"
                />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur sm:p-8"
                >
                    <div className="space-y-8">
                        {education.map((e, i) => (
                            <div
                                key={e.degree}
                                className={`flex gap-5 ${i !== education.length - 1
                                        ? "border-b border-slate-800 pb-8"
                                        : ""
                                    }`}  >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-xl text-brand-400">
                                    <FaGraduationCap />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-white">
                                                {e.degree}
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-400">
                                                {e.school}
                                            </p>
                                        </div>

                                        <div className="shrink-0 sm:text-right">
                                            <p className="text-sm font-medium text-brand-400">
                                                {e.period}
                                            </p>

                                            <p className="mt-1 text-md text-slate-400">
                                                {e.score}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
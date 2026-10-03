import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-500" />
    </motion.div>
  );
}

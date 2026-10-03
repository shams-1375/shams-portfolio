import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { profile } from "../data.js";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

function RotatingRole() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block h-[1.25em] overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="block bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text font-bold text-transparent"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Home() {
  return (
    // reducedMotion="never" makes sure these animations play even if the OS has "reduce motion" on
    <MotionConfig reducedMotion="never">
      <section id="home" className="bg-hero relative flex min-h-screen items-center overflow-hidden pt-20">
        {/* floating glow blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-600/25 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-[-10rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container-x relative"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-[20px] font-semibold text-brand-400">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-2 bg-gradient-to-r from-white via-violet-200 to-brand-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-3 text-2xl font-bold text-slate-400 sm:text-4xl"
          >
            I'm a <RotatingRole />
          </motion.h2>

          <motion.p variants={item} className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }}>
              View my work
            </motion.a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex gap-6 text-3xl text-slate-400">
            <motion.a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -6, scale: 1.15 }}
              className="transition-colors hover:text-brand-400"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -6, scale: 1.15 }}
              className="transition-colors hover:text-brand-400"
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* scroll hint */}
        <motion.a
          href="#skills"
          aria-label="Scroll to skills"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-brand-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.6 },
            y: { delay: 1.5, duration: 1.6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <HiChevronDown />
        </motion.a>
      </section>
    </MotionConfig>
  );
}
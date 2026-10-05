import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMobileNavClick = (e, id) => {
    setOpen(false);

    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open
          ? "bg-slate-950/90 shadow-lg backdrop-blur"
          : "bg-transparent"
        }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold text-white sm:text-3xl"
        >
          Shams
          <span className="text-brand-500">.</span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative block rounded-full px-5 py-2.5 text-lg font-semibold transition hover:text-brand-400 ${active === l.id ? "text-white" : "text-slate-300"
                  }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 ring-1 ring-brand-500/40"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-800 md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleMobileNavClick(e, l.id)}
                  className={`block px-6 py-4 text-xl font-semibold transition hover:text-brand-400 ${active === l.id ? "text-brand-400" : "text-slate-300"
                    }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
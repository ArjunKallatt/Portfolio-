"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const LINKS = [
  { href: "#currently", label: "Currently" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#security", label: "Security" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-ink/70 border-b border-slate-line/60" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5">
          <Magnetic strength={0.25}>
            <a
              href="#top"
              className="font-mono text-sm tracking-[0.15em] text-paper hover:text-gold transition-colors"
            >
              AARU.K
            </a>
          </Magnetic>

          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Magnetic strength={0.3}>
                  <a
                    href={l.href}
                    className="font-mono text-xs tracking-[0.1em] uppercase text-paper/70 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden font-mono text-xs tracking-[0.15em] uppercase text-paper border border-slate-line px-4 py-2"
            data-cursor-hover
          >
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-mono text-sm tracking-[0.15em] text-paper">AARU.K</span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.15em] uppercase text-paper border border-slate-line px-4 py-2"
              >
                Close
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="font-display text-5xl leading-tight text-paper hover:text-gold transition-colors py-2"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

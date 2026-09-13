"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-24 md:pt-36 pb-10 px-6 md:px-12 border-t hairline">
      <div className="flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.2em] text-gold mb-6"
        >
          06 — GET IN TOUCH
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[12vw] md:text-[7.5vw] leading-[0.95] tracking-tightest mb-16 md:mb-24"
        >
          Let&apos;s build
          <br />
          <span className="italic text-gold">something exacting.</span>
        </motion.h2>

        <div className="w-full grid md:grid-cols-3 gap-10 md:gap-6 mb-20 md:mb-28">
          <Magnetic strength={0.15}>
            <a
              href="mailto:arjunkallatt@gmail.com"
              data-cursor-hover
              className="group flex flex-col gap-2 border-t hairline pt-4"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/40">
                Email
              </span>
              <span className="font-display text-xl md:text-2xl text-paper group-hover:text-gold transition-colors">
                arjunkallatt@gmail.com
              </span>
            </a>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href="https://github.com/ArjunKallatt"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group flex flex-col gap-2 border-t hairline pt-4"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/40">
                GitHub
              </span>
              <span className="font-display text-xl md:text-2xl text-paper group-hover:text-gold transition-colors">
                github.com/ArjunKallatt
              </span>
            </a>
          </Magnetic>

          <Magnetic strength={0.15}>
            <a
              href="https://linkedin.com/in/arjun-kallatt"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group flex flex-col gap-2 border-t hairline pt-4"
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/40">
                LinkedIn
              </span>
              <span className="font-display text-xl md:text-2xl text-paper group-hover:text-gold transition-colors">
                in/arjun-kallatt
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 border-t hairline font-mono text-[10px] tracking-[0.15em] uppercase text-paper/30">
          <span>© {new Date().getFullYear()} Arjun Kallatt. Built from scratch.</span>
          <span>Next.js · TypeScript · Framer Motion</span>
        </div>
      </div>
    </section>
  );
}

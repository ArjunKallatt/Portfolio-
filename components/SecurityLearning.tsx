"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const CERTS = [
  { name: "Ethical Hacking Essentials", org: "EC-Council" },
  { name: "Digital Forensics Essentials", org: "EC-Council" },
];

const CTFS = ["LPU CTF", "picoCTF"];

export default function SecurityLearning() {
  return (
    <section id="security" className="relative py-24 md:py-36 px-6 md:px-12 bg-ink-800">
      <SectionLabel index="04" title="Security & Learning" />

      <div className="grid md:grid-cols-12 gap-10 md:gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="flex items-baseline gap-4 mb-2">
            <span className="font-display text-6xl md:text-8xl text-gold leading-none">
              Top 20%
            </span>
          </div>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-paper/50 mb-6">
            TryHackMe global ranking
          </p>
          <p className="text-paper/60 text-base leading-relaxed max-w-md">
            50+ labs across web exploitation, privilege escalation, and
            network forensics — worked outside of coursework, for the sake
            of understanding how the systems I build could be broken.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:col-span-3 md:col-start-7"
        >
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-paper/40 mb-4">
            Certifications
          </p>
          <ul className="flex flex-col gap-4">
            {CERTS.map((c) => (
              <li key={c.name} className="border-l-2 border-gold pl-4">
                <p className="font-display text-lg text-paper leading-tight">
                  {c.name}
                </p>
                <p className="text-paper/40 text-xs font-mono mt-1">{c.org}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-3"
        >
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-paper/40 mb-4">
            CTF Participation
          </p>
          <ul className="flex flex-col gap-3">
            {CTFS.map((c) => (
              <li
                key={c}
                className="font-display text-lg text-paper flex items-center gap-2"
              >
                <span className="text-gold text-sm">▸</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const GROUPS = [
  {
    title: "Programming & Scripting",
    items: ["Python", "Bash", "SQL", "Git"],
  },
  {
    title: "Networking & Security",
    items: ["TCP/IP", "Nmap", "Wireshark", "Splunk"],
  },
  {
    title: "Systems",
    items: ["Linux (Arch/Ubuntu)", "Docker"],
  },
  {
    title: "Technical Communication",
    items: ["Documentation", "Structured problem-solving", "API testing"],
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12">
      <SectionLabel index="05" title="Skills" />

      <div className="grid md:grid-cols-4 gap-x-6 gap-y-12">
        {GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
              {g.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-xl md:text-2xl text-paper/85 leading-tight border-b hairline pb-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

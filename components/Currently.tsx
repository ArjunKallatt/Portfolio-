"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const MARQUEE_ITEMS = [
  "FINNONE NEO",
  "LOAN MANAGEMENT SYSTEMS",
  "NUCLEUS SOFTWARE",
  "ENGINEERING × PRODUCT",
];

export default function Currently() {
  return (
    <section id="currently" className="relative py-24 md:py-36 px-6 md:px-12">
      <SectionLabel index="01" title="Currently" />

      <div className="grid md:grid-cols-12 gap-8 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-8"
        >
          <h2 className="font-display text-3xl md:text-5xl leading-[1.15] text-paper">
            Assistant Solutions Analyst at{" "}
            <span className="italic text-gold">Nucleus Software Exports</span>,
            working on <span className="text-outline">FinnOne Neo</span> — an
            enterprise Loan Management System used by banks and NBFCs.
          </h2>
          <p className="mt-8 max-w-xl text-paper/60 text-base md:text-lg leading-relaxed">
            I sit at the join between engineering and product — translating
            platform behavior into documentation, validating APIs against
            spec, and turning domain research into system design that
            stakeholders can actually act on.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 flex md:justify-end"
        >
          <div className="border border-slate-line px-6 py-6 md:py-8 w-full md:w-auto self-start">
            <p className="font-mono text-[10px] tracking-[0.2em] text-paper/40 mb-4">
              BASED IN
            </p>
            <p className="font-display text-2xl text-paper mb-6">Noida, India</p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-paper/40 mb-4">
              EDUCATION
            </p>
            <p className="font-display text-lg text-paper">
              B.Tech, Computer Science
              <br />
              <span className="text-paper/50 text-sm">
                Lovely Professional University
              </span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24 border-y hairline py-4 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 font-mono text-xs md:text-sm tracking-[0.2em] text-paper/40 mx-6"
            >
              {item}
              <span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

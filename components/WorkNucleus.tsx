"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const CASES = [
  {
    num: "01",
    name: "API Documentation Comparator",
    line: "Diffs REST API docs across PDF releases to catch what changed.",
    problem:
      "Manual review of every field added, removed, or renamed between API doc releases was slow and error-prone — updates were easy to miss.",
    tech: ["Python", "Streamlit", "PyMuPDF", "Pandas", "pytest"],
    offset: "md:mt-0",
  },
  {
    num: "02",
    name: "Internal Document-Diff Platform",
    line: "A small internal tool for visual, side-by-side documentation diffing.",
    problem:
      "Reviewers needed a fast, visual way to compare doc revisions side by side instead of reading two PDFs in parallel tabs.",
    tech: ["FastAPI", "Python", "SPA frontend"],
    offset: "md:mt-24",
  },
  {
    num: "03",
    name: "Gold Loan Module — Research & Prototyping",
    line: "Domain research translated into UI mockups and system design.",
    problem:
      "Bridged regulatory frameworks and industry process research into UI mockups, system design docs, and stakeholder-facing decks for a gold loan product module.",
    tech: ["System Design", "UI Prototyping", "Stakeholder Decks"],
    offset: "md:mt-8",
  },
  {
    num: "04",
    name: "Testing & QA Support",
    line: "Validating API endpoints against documentation.",
    problem:
      "Manual and script-assisted validation of API endpoints against spec, with mismatch logging routed back to the engineering team.",
    tech: ["API Testing", "Python", "Mismatch Logging"],
    offset: "md:mt-32",
  },
];

export default function WorkNucleus() {
  return (
    <section id="work" className="relative py-24 md:py-36 px-6 md:px-12">
      <SectionLabel index="02" title="Work at Nucleus Software" />

      <p className="max-w-2xl text-paper/60 text-base md:text-lg leading-relaxed mb-16 md:mb-24">
        A gist of what I work on day to day, without the internal specifics —
        tools and research that sit between the FinnOne Neo engineering team
        and the product it ships to banks and NBFCs.
      </p>

      <div className="flex flex-col gap-16 md:gap-4">
        {CASES.map((c, i) => (
          <motion.div
            key={c.num}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative grid md:grid-cols-12 gap-4 md:gap-6 border-t hairline pt-8 pb-8 md:pb-16 ${c.offset}`}
          >
            <span className="md:col-span-2 font-mono text-sm text-gold">
              {c.num}
            </span>

            <div className="md:col-span-6">
              <h3 className="font-display text-2xl md:text-4xl text-paper leading-tight group-hover:text-gold transition-colors duration-300">
                {c.name}
              </h3>
              <p className="mt-3 text-paper/50 text-sm md:text-base">{c.line}</p>
            </div>

            <div className="md:col-span-4">
              <p className="text-paper/60 text-sm leading-relaxed mb-4">
                {c.problem}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.1em] uppercase text-paper/50 border border-slate-line px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

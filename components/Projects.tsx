"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    name: "India Air Pinpoint",
    tag: "Capstone · Defended in viva",
    desc: "Hyperlocal PM2.5 air-quality forecasting web app. XGBoost regression with ratio-based transfer learning to localize sparse ground-truth data, served through a FastAPI backend and mapped live with React + Leaflet.",
    tech: ["Python", "XGBoost", "FastAPI", "React", "Leaflet"],
    accent: "#C9A24B",
    meta: "Related paper submitted",
  },
  {
    num: "02",
    name: "ML-Based Web Attack Classifier",
    tag: "Security × ML",
    desc: "A Scikit-learn classifier trained on labeled HTTP request data to flag SQL-injection and XSS patterns in real time, served through a Flask API with a results dashboard for triage.",
    tech: ["Scikit-learn", "Python", "Flask", "Dashboard"],
    accent: "#8B7233",
    meta: "SQLi + XSS detection",
  },
  {
    num: "03",
    name: "Home Security Lab",
    tag: "Virtual SOC",
    desc: "An isolated KVM/QEMU virtual network for safely running and analyzing attack payloads — Splunk log collection from Metasploitable VMs, MITRE ATT&CK-mapped detection rules, Bash-scripted provisioning for fast rebuilds.",
    tech: ["KVM/QEMU", "Splunk", "MITRE ATT&CK", "Bash"],
    accent: "#E4C879",
    meta: "Fully scripted teardown/rebuild",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-72%"]);

  return (
    <section id="projects" ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-12 mb-8 md:mb-0 flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.2em] text-gold">03</span>
          <span className="h-px flex-1 bg-slate-line" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-paper/50">
            Selected Projects — scroll
          </span>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-6 md:pl-12 mt-8">
          {PROJECTS.map((p) => (
            <article
              key={p.num}
              className="relative shrink-0 w-[88vw] md:w-[46vw] lg:w-[38vw] h-[62vh] md:h-[68vh] border border-slate-line p-8 md:p-10 flex flex-col justify-between overflow-hidden"
              style={{ backgroundColor: "#10141C" }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: p.accent }}
              />

              <div className="relative flex items-start justify-between">
                <span className="font-mono text-6xl md:text-7xl font-light" style={{ color: p.accent }}>
                  {p.num}
                </span>
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-paper/40 text-right">
                  {p.tag}
                </span>
              </div>

              <div className="relative">
                <h3 className="font-display text-3xl md:text-4xl text-paper leading-tight mb-4">
                  {p.name}
                </h3>
                <p className="text-paper/60 text-sm md:text-base leading-relaxed mb-6">
                  {p.desc}
                </p>
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase mb-4" style={{ color: p.accent }}>
                  {p.meta}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-[0.1em] uppercase text-paper/60 border border-slate-line px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="shrink-0 w-[40vw] md:w-[20vw] flex items-center">
            <a
              href="https://github.com/ArjunKallatt"
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="font-display text-2xl md:text-3xl italic text-paper/50 hover:text-gold transition-colors"
            >
              More on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

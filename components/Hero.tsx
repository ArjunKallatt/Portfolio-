"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Magnetic from "./Magnetic";

const NAME_LINE_1 = "ARJUN";
const NAME_LINE_2 = "KALLATT";

function KineticWord({ text, delayBase }: { text: string; delayBase: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotate: 6 }}
          animate={{ y: "0%", rotate: 0 }}
          transition={{
            delay: delayBase + i * 0.035,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex flex-col justify-between px-6 md:px-12 pt-28 pb-10 overflow-hidden"
    >
      {/* background index marks */}
      <div className="pointer-events-none absolute top-24 right-6 md:right-12 flex flex-col items-end gap-1 font-mono text-[10px] tracking-[0.2em] text-paper/30">
        <span>NOIDA, IN</span>
        <span>{new Date().getFullYear()}</span>
        <span>SEC · SWE · ML</span>
      </div>

      <motion.div style={{ y, opacity, scale }} className="flex-1 flex flex-col justify-center">
        <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-gold mb-6 md:mb-8">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            SOFTWARE ENGINEER — SECURITY RESEARCHER — NOIDA, INDIA
          </motion.span>
        </p>

        <h1 className="font-display font-medium leading-[0.88] tracking-tightest text-[16vw] md:text-[9.5vw] lg:text-[8.5rem]">
          <div className="block">
            <KineticWord text={NAME_LINE_1} delayBase={0.3} />
          </div>
          <div className="block text-outline">
            <KineticWord text={NAME_LINE_2} delayBase={0.55} />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 max-w-xl text-lg md:text-2xl font-display italic text-paper/80 leading-snug"
        >
          I build the tools that make enterprise software teams faster —
          and dig into the systems that break them.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex items-end justify-between"
      >
        <div className="flex gap-8 font-mono text-xs tracking-[0.15em] text-paper/50">
          <Magnetic strength={0.4}>
            <a href="mailto:arjunkallatt@gmail.com" className="hover:text-gold transition-colors" data-cursor-hover>
              EMAIL
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a
              href="https://github.com/ArjunKallatt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors"
              data-cursor-hover
            >
              GITHUB
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a
              href="https://linkedin.com/in/arjun-kallatt"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition-colors"
              data-cursor-hover
            >
              LINKEDIN
            </a>
          </Magnetic>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-paper/40">
          <span>SCROLL</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="block w-px h-8 bg-paper/40"
          />
        </div>
      </motion.div>
    </section>
  );
}

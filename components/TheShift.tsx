"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const shifts = [
  {
    text: "I used to think a portfolio should be a list of skills, roles, and things delivered.",
    delay: 0,
  },
  {
    text: "Time outdoors gave me a little distance from that idea.",
    delay: 0.15,
  },
  {
    text: "I still love the craft of software: untangling complexity, shaping systems, and making ideas work.",
    delay: 0.3,
  },
  {
    text: "These days, that curiosity also leads me into AI engineering and new ways to build.",
    delay: 0.45,
  },
  {
    text: "The work matters to me. So does the person doing it, and the people it might help.",
    delay: 0.6,
  },
];

export default function TheShift() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(26,74,26,0.06) 50%, transparent 100%)",
        }}
      />

      <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--color-border)] opacity-30" />
      <motion.div
        animate={{ scaleY: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute left-8 top-[10%] w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-40"
        style={{ transformOrigin: "top center" }}
      />
      <motion.div
        animate={{ scaleY: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-8 top-[35%] w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-30"
        style={{ transformOrigin: "top center" }}
      />
      <motion.div
        animate={{ scaleY: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
        className="absolute left-8 top-[60%] w-1.5 h-1.5 rounded-full bg-[#4ade80] opacity-25"
        style={{ transformOrigin: "top center" }}
      />
      <motion.div
        animate={{ scaleY: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-8 top-[85%] w-1 h-1 rounded-full bg-[#4ade80] opacity-20"
        style={{ transformOrigin: "top center" }}
      />

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-14"
        >
          The Shift
        </motion.p>

        <motion.div style={{ y }} className="space-y-12 md:space-y-16">
          {shifts.map((s, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: s.delay,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] leading-relaxed"
            >
              &ldquo;{s.text}&rdquo;
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const shifts = [
  {
    text: "At first, I planned to list all my skills and work experience here.",
    delay: 0,
  },
  {
    text: "But after a hiking trip, I started thinking differently.",
    delay: 0.15,
  },
  {
    text: "Yes, I genuinely enjoy coding.",
    delay: 0.3,
  },
  {
    text: "I find real satisfaction in building things that can actually help people.",
    delay: 0.45,
  },
  {
    text: "But at the same time, I realized that as a person, I want to present a more complete version of myself — not just someone defined by writing code.",
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
      {/* Uphill feel — subtle upward gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(26,74,26,0.06) 50%, transparent 100%)",
        }}
      />

      {/* Path dots for exploration feel */}
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

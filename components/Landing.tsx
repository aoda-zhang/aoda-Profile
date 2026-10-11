"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";

export default function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, rgba(180,83,9,0.07) 0%, rgba(255,255,255,0) 58%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-amber-50/40 to-transparent" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-black leading-tight tracking-tight text-[var(--color-accent)] sm:text-7xl md:text-8xl"
        >
          Aoda Zhang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="mt-5 text-2xl font-semibold leading-snug text-[var(--color-text)] sm:text-3xl md:text-4xl"
        >
          Full-stack Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
        >
          9+ years building enterprise fintech and e-commerce applications, specializing in React and TypeScript with hands-on Node.js backend experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
          className="mt-4 text-base text-[var(--color-text-muted)] md:text-lg"
        >
          Frontend architecture · Full-stack products · AI-powered engineering tools
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
          onClick={() =>
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-10 inline-flex cursor-pointer items-center gap-2.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[#92400e]"
        >
          View my experience
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <FaArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
}

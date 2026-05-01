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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Nature-inspired background layers */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0f1a0f] to-[#09090b]"
      />

      {/* Subtle tree/forest silhouette shapes */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 900 Q200 600 400 700 Q600 500 800 650 Q1000 450 1200 600 Q1350 500 1440 580 L1440 900 Z"
            fill="#2d6a2d"
          />
          <path
            d="M0 900 Q300 700 500 780 Q700 600 900 720 Q1100 580 1300 700 Q1380 620 1440 680 L1440 900 Z"
            fill="#1a4a1a"
          />
          {/* Tree silhouettes */}
          <circle cx="200" cy="620" r="80" fill="#1a4a1a" opacity="0.6" />
          <circle cx="450" cy="560" r="100" fill="#1a4a1a" opacity="0.5" />
          <circle cx="700" cy="600" r="70" fill="#1a4a1a" opacity="0.6" />
          <circle cx="1000" cy="580" r="90" fill="#1a4a1a" opacity="0.5" />
          <circle cx="1250" cy="620" r="75" fill="#1a4a1a" opacity="0.6" />
        </svg>
      </div>

      {/* Warm light ray */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-[var(--color-text-muted)] text-sm tracking-widest uppercase mb-8"
        >
          A journey through code and life
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-[var(--color-text)]"
        >
          Every day feels like
          <br />
          <span className="text-[var(--color-accent)]">a new beginning.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed"
        >
          Not a portfolio. A path you walk through.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          onClick={() =>
            document
              .getElementById("engineer")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[#d97706] transition-colors cursor-pointer group"
        >
          Start walking
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
          >
            <FaArrowDown className="w-3.5 h-3.5" />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-void)] to-transparent" />
    </section>
  );
}

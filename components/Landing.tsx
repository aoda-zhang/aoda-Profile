"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { hikeImages } from "@/data/mockImages";

export default function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ opacity: imageOpacity, scale: imageScale }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hikeImages[0].src}
          alt={hikeImages[0].alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-void)]/70" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,26,15,0.5) 0%, transparent 40%, rgba(245,158,11,0.04) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
        <svg
          viewBox="0 0 1440 900"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 900 Q200 600 400 700 Q600 500 800 650 Q1000 450 1200 600 Q1350 500 1440 580 L1440 900 Z"
            fill="#2d6a2d"
          />
        </svg>
      </div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] md:text-base"
        >
          Aoda Zhang
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-black leading-tight text-[var(--color-text)] sm:text-5xl md:text-6xl"
        >
          Frontend-Focused Full-Stack Engineer
          <span className="mt-2 block text-[var(--color-accent)]">&amp; AI Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-7 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl"
        >
          9+ years building thoughtful software with React, TypeScript, and modern backend technologies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
          className="mt-4 text-sm text-[var(--color-text-muted)] md:text-base"
        >
          A journey through code and life — always exploring what technology can make possible.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          onClick={() =>
            document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-10 inline-flex cursor-pointer items-center gap-2.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:text-[#d97706]"
        >
          Explore my experience
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <FaArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </motion.button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[var(--color-void)] to-transparent" />
    </section>
  );
}

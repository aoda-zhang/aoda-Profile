"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { babyImages } from "@/data/mockImages";

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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Full-bleed hero image — fades out on scroll */}
      <motion.div
        style={{ opacity: imageOpacity, scale: imageScale }}
        className="absolute inset-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={babyImages[0].src}
          alt="hero"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[var(--color-void)]/70" />
      </motion.div>

      {/* Nature-inspired gradient above the image */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,26,15,0.5) 0%, transparent 40%, rgba(245,158,11,0.04) 100%)",
        }}
      />

      {/* Subtle tree silhouette on top */}
      <div className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none">
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
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-[var(--color-text-muted)] text-xs tracking-[0.25em] uppercase mb-10"
        >
          A journey through code and life
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] text-[var(--color-text)]"
        >
          Every day feels like
          <br />
          <span className="text-[var(--color-accent)]">a new beginning.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
        >
          Not a portfolio. A path you walk through.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          onClick={() =>
            document.getElementById("engineer")?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-10 inline-flex items-center gap-2.5 text-sm font-semibold text-[var(--color-accent)] hover:text-[#d97706] transition-colors cursor-pointer"
        >
          Start walking
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <FaArrowDown className="w-3.5 h-3.5" />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10 bg-gradient-to-t from-[var(--color-void)] to-transparent" />
    </section>
  );
}
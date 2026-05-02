"use client";

import { motion } from "framer-motion";
import { babyImages } from "@/data/mockImages";

export default function TheFamily() {
  return (
    <section id="family" className="py-20 md:py-28 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-14"
        >
          The Family
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-black leading-tight text-[var(--color-text)] mb-8"
        >
          On June 7, 2025,
          <br />
          I became a father.
        </motion.h2>

        {/* Single quiet image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl aspect-square max-w-sm mx-auto mb-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={babyImages[0].src}
            alt={babyImages[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)]/20 to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed"
        >
          I now have a child — someone I cherish deeply, someone I don&apos;t
          want to see hurt even in the slightest. I&apos;m completely captivated
          by his smile.
        </motion.p>
      </div>
    </section>
  );
}

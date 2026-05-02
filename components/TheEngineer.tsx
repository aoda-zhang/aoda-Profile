"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function TheEngineer() {
  return (
    <section id="engineer" className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] mb-5">
            The Engineer
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight text-[var(--color-text)] mb-6">
            I write code.
            <br />
            And I care that it helps people.
          </h2>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-5 max-w-lg">
            9+ years building products with React, Node.js &amp; TypeScript.
            E-commerce, fintech, open source. But numbers don&apos;t define me.
          </p>

          <a
            href="https://github.com/aoda-zhang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            See my work on GitHub &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}

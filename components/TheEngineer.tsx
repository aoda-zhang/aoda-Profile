"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUpRightFromSquare } from "react-icons/fa6";

const capabilities = [
  {
    title: "Frontend engineering",
    detail: "React · TypeScript · Frontend architecture · Reusable component libraries · Design systems",
  },
  {
    title: "Full-stack development",
    detail: "Node.js · NestJS · API design · Service integration · Data-driven applications",
  },
  {
    title: "AI engineering",
    detail: "LLM integration · Agent harnesses and workflows · AI-assisted development tools · Engineering automation",
  },
];

export default function TheEngineer() {
  return (
    <section id="engineer" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            The Engineer
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight text-[var(--color-text)] md:text-5xl">
            I build software.
            <br />
            I care what it makes possible.
          </h2>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            I enjoy turning complex problems into clear, dependable products.
            Over the past 9+ years, I&apos;ve grown from frontend-focused
            development into full-stack engineering, while continuing to
            explore how AI can improve the way software is built.
          </p>

          <div className="mb-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              What I work with
            </h3>
          </div>

          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {capabilities.map((capability) => (
              <div key={capability.title} className="py-5">
                <h3 className="mb-1.5 text-sm font-semibold text-[var(--color-text)]">
                  {capability.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {capability.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-2xl border border-[var(--color-border)] p-5 md:p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Open-source project
            </p>
            <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)]">
              PawHaven
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              An open-source rescue-animal platform built to bring people and animals
              in need closer together. It showcases my work in product thinking
              and full-stack architecture.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="https://pawhaven.work/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                Visit live site
                <FaArrowUpRightFromSquare className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/aoda-zhang/PawHaven-FullStack-React-NodeJS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                View source code
                <FaGithub className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/aoda-zhang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aodazhang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
            I build software.
            <br />
            I care what it makes possible.
          </h2>

          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-lg">
            I&apos;m Aoda, a frontend-focused full-stack engineer with 9+ years
            of experience. My foundation is in React, TypeScript, and frontend
            architecture; I also build backend systems and apply AI engineering
            to complex software development challenges.
          </p>

          <div className="mb-4">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
              Areas of expertise
            </h3>
          </div>

          <div className="border-y border-[var(--color-border)] divide-y divide-[var(--color-border)]">
            {capabilities.map((capability) => (
              <div key={capability.title} className="py-5">
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1.5">
                  {capability.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {capability.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-2xl border border-[var(--color-border)] p-5 md:p-6">
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--color-accent)] mb-3">
              A work in progress
            </p>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              PawHaven
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              A rescue-animal platform I&apos;m building to help bring people
              and animals in need closer together. It&apos;s also where I put
              architecture, product thinking, and AI-assisted engineering into
              practice.
            </p>
            <a
              href="https://github.com/aoda-zhang/PawHaven-FullStack-React-NodeJS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              Explore the project
              <FaArrowUpRightFromSquare className="w-3 h-3" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/aoda-zhang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aodazhang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
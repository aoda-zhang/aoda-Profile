"use client";

import { motion, easeOut } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "PawHaven",
    description:
      "Open-source platform for stray animal rescue. Report, track, and share cases from sighting to adoption. Features AI breed identification, real-time tracking, and donation integration.",
    tech: ["React", "NestJS", "TypeScript", "Turbo", "pnpm"],
    github: "https://github.com/aoda-zhang/PawHaven-FullStack-React-NodeJS",
    demo: "https://pawhaven.work",
    accent: "#f59e0b",
  },
  {
    title: "Germany Resume",
    description:
      "Resume builder tailored for the German job market. Markdown editor, live preview, i18n (zh/en/de), drag-and-drop sections, and high-quality PDF export.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Zustand"],
    github: "https://github.com/aoda-zhang/germany-resume",
    demo: "https://aoda-zhang.github.io/germany-resume/",
    accent: "#0ea5e9",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4, ease: easeOut }}
            className="card p-6 flex flex-col"
          >
            {/* Accent dot */}
            <div
              className="w-2 h-2 rounded-full mb-5"
              style={{ backgroundColor: project.accent }}
            />

            <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-5">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 pt-4 border-t border-[var(--color-border)]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors flex items-center gap-1.5"
              >
                <FaGithub className="w-3.5 h-3.5" />
                Code
              </a>
              <span className="text-[var(--color-text-muted)] text-xs">·</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors flex items-center gap-1.5"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion, easeOut } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "PawHaven",
    description:
      "Open-source platform for stray animal rescue — report, track, and share cases from sighting to adoption. Full-stack monorepo with AI-powered breed identification and real-time case tracking.",
    tech: ["React", "NestJS", "TypeScript", "Turbo"],
    github: "https://github.com/aoda-zhang/PawHaven-FullStack-React-NodeJS",
    demo: "https://pawhaven.work",
    color: "#f59e0b",
  },
  {
    title: "Germany Resume",
    description:
      "Resume builder tailored for German job market. Markdown editor with live preview, i18n for Chinese/English/German, and high-quality PDF export following German resume conventions.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4"],
    github: "https://github.com/aoda-zhang/germany-resume",
    demo: "https://aoda-zhang.github.io/germany-resume/",
    color: "#0ea5e9",
  },
];

export default function Projects() {
  return (
    <section className="py-16">
      <p className="section-label">Projects</p>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4, ease: easeOut }}
            className="card p-5"
          >
            {/* Color bar */}
            <div
              className="h-0.5 w-10 rounded-full mb-4"
              style={{ backgroundColor: project.color }}
            />

            <h3 className="text-base font-semibold text-[var(--color-ink)] mb-1.5">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-ink-light)] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-xs py-1 px-2.5"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs py-1 px-2.5"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    id: "pawhaven",
    title: "PawHaven",
    description:
      "Open-source platform that helps volunteers, shelters, and adopters report, track, and share stray animal rescue cases",
    fullDescription:
      "Developed using Next.js 15 and Tailwind v4. Integrated AI APIs for automatic breed identification from uploaded photos. Built a complete donation flow with payment gateway integration. Features include adoption matching, lost & found listings, and a community forum. 500+ users in the first month post-launch.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "AI API", "Framer Motion"],
    github: "https://github.com/aoda-zhang/PawHaven-FullStack-React-NodeJS",
    demo: "https://pawhaven.work",
    icons: [SiNextdotjs, SiMongodb, SiTailwindcss],
    color: "#f59e0b",
    highlight: true,
  },
  {
    id: "germany-resume",
    title: "Germany Resume",
    description:
      "A resume builder tailored for job seekers in Germany, featuring German-standard templates, Markdown support, and one-click PDF export.",
    fullDescription:
      "Built with React + TypeScript + Zustand for state management. Features include Markdown editor with live preview, German-standard templates, i18n support for Chinese/English/German, and high-quality PDF export via browser print. Designed to meet the specific formatting requirements of German resumes: photo placement, personal details layout, and structured sections. Deployed on GitHub Pages.",
    tech: ["React", "TypeScript", "Zustand", "Tailwind CSS", "Markdown"],
    github: "https://github.com/aoda-zhang/germany-resume",
    demo: "https://aoda-zhang.github.io/germany-resume/",
    icons: [SiReact, SiNodedotjs, SiTailwindcss],
    color: "#0ea5e9",
    highlight: true,
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="project">
      <h2 className="section-title text-center">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, idx) => {
          const isOpen = expanded === project.id;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`card flex flex-col group ${
                project.highlight ? "border-[var(--color-primary-light)]" : ""
              }`}
            >
              {/* Project header */}
              <div className="p-5 flex-1 flex flex-col">
                {/* Color bar */}
                <div
                  className="h-1 w-12 rounded-full mb-4 transition-all group-hover:w-20"
                  style={{ backgroundColor: project.color }}
                />

                <h3 className="text-base font-semibold text-zinc-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech icons */}
                <div className="flex items-center gap-2 mt-4 mb-4">
                  {project.icons.map((Icon, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-400"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
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
                      className="btn btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <button
                      onClick={() => setExpanded(isOpen ? null : project.id)}
                      className="ml-auto text-xs text-zinc-400 hover:text-zinc-600 transition-colors flex items-center gap-1"
                    >
                      {isOpen ? "Less" : "More"}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <FaChevronDown className="w-3 h-3" />
                      </motion.span>
                    </button>
                  )}
                </div>
              </div>

              {/* Expanded description */}
              {isOpen && project.demo !== "#" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5 border-t border-zinc-100 pt-4"
                >
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

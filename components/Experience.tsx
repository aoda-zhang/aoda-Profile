"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    id: "sdfx",
    title: "Full-Stack Developer",
    company: "SDFX",
    period: "2022.06 — Present",
    description:
      "Delivered fintech SaaS platforms with real-time data visualization, reducing data processing time by 70% through algorithm optimization. Built e-commerce solutions generating $500K+ annual GMV.",
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "WebSocket"],
    color: "var(--color-primary)",
  },
  {
    id: "yile",
    title: "Full-Stack Developer",
    company: "Yile Tech",
    period: "2020.07 — 2022.05",
    description:
      "Led development of logistics and e-commerce systems with 100+ concurrent user support. Implemented payment integration and automated workflows, saving 20+ hours per week.",
    tech: ["React", "Node.js", "MySQL", "JavaScript", "Vue.js"],
    color: "var(--color-accent)",
  },
  {
    id: "pawhaven",
    title: "Founder & Developer",
    company: "PawHaven (Open Source)",
    period: "2024 — Present",
    description:
      "Open-source platform for animal rescue. Developed AI-powered breed recognition and built a community of animal lovers. 500+ users in the first month.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "AI/ML API", "Framer Motion"],
    color: "#f59e0b",
    highlight: true,
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>("sdfx");

  return (
    <section id="experience">
      <h2 className="section-title text-center">Experience</h2>

      <div className="space-y-4 max-w-2xl mx-auto">
        {experiences.map((exp, idx) => {
          const isOpen = expanded === exp.id;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`card overflow-hidden transition-colors ${
                exp.highlight ? "border-[var(--color-accent)] bg-gradient-to-br from-amber-50 to-white" : ""
              }`}
            >
              {/* Clickable header */}
              <button
                onClick={() => setExpanded(isOpen ? null : exp.id)}
                className="w-full text-left p-5 flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-zinc-900">{exp.title}</h3>
                    {exp.highlight && (
                      <span className="badge badge-accent text-xs">
                        <span className="badge-dot" />
                        Open Source
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-primary)] font-medium mt-0.5">{exp.company}</p>
                  <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                    <FaCalendarAlt className="w-3 h-3" />
                    {exp.period}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-300 mt-1 flex-shrink-0"
                >
                  <FaChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Expandable content */}
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-zinc-100 pt-4 space-y-3">
                  <p className="text-sm text-zinc-600 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

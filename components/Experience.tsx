"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    id: "manulife",
    title: "Full-stack Software Engineer",
    company: "Manulife (Leading global financial services company)",
    period: "08/2022 — Present",
    description:
      "Led reconstruction of fund trading reporting system, improving development efficiency by 40%. Completed design token integration across multiple frontend projects, reducing style bugs by 60%. Participated in frontend/backend architecture design and core development of fund trading microservices. Helped reconstuct DevOps pipeline using GitHub Actions.",
    tech: ["TypeScript", "React", "Express", "Nest.js", "MongoDB"],
    color: "var(--color-primary)",
  },
  {
    id: "newegg",
    title: "Senior Frontend Software Engineer",
    company: "Newegg (Global e-commerce platform for electronics)",
    period: "08/2021 — 07/2022",
    description:
      "Led frontend stack migration from AngularJS to React/TypeScript, increasing development speed by 30%. Built internal reusable UI component library used in 10+ projects. Delivered core modules for Newegg Global Seller Portal, impacting 20,000+ suppliers. Mentored 4 junior engineers and facilitated 2 promotions.",
    tech: ["JavaScript", "TypeScript", "React", "React Native", "Redux"],
    color: "var(--color-accent)",
  },
  {
    id: "hucai",
    title: "Frontend Software Engineer",
    company: "Hucai (Digital printing and customized publishing company)",
    period: "09/2017 — 06/2021",
    description:
      "Developed and maintained frontend pages for e-commerce platform using Vue and React. Integrated APIs and developed reusable components under senior developer mentorship.",
    tech: ["JavaScript", "Vue", "React", "Redux", "Webpack"],
    color: "#64748b",
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
              className={`card overflow-hidden transition-colors`}
            >
              {/* Clickable header */}
              <button
                onClick={() => setExpanded(isOpen ? null : exp.id)}
                className="w-full text-left p-5 flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-zinc-900">{exp.title}</h3>
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

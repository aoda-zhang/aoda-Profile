"use client";

import { motion, easeOut } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "E-Future Germany",
    period: "Jun 2022 — Present",
    description:
      "Leading frontend architecture for financial products. Built a design system adopted across 5+ projects, reducing UI bugs by 60%. Migrated from AngularJS to React/TypeScript, improving development velocity by 40%.",
    tech: ["TypeScript", "React", "NestJS", "MongoDB"],
  },
  {
    title: "Software Engineer",
    company: "JD.com",
    period: "Oct 2020 — May 2022",
    description:
      "Delivered core modules for the Global Seller Portal impacting 20,000+ suppliers. Built an internal UI component library used in 10+ projects. Mentored 4 junior engineers.",
    tech: ["TypeScript", "React", "React Native", "Redux"],
  },
  {
    title: "Software Engineer",
    company: "ThoughtWorks",
    period: "Jun 2019 — Sep 2020",
    description:
      "Consulted for enterprise clients on full-stack web applications. Practiced agile delivery and TDD across multiple engagements in financial services.",
    tech: ["JavaScript", "React", "Node.js", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Chengdu Meiya Pico",
    period: "Jul 2016 — May 2019",
    description:
      "Developed frontend pages for e-commerce and data visualization platforms. Integrated REST APIs and built reusable component libraries with Vue and React.",
    tech: ["JavaScript", "Vue", "React", "Webpack"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-12"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.06, duration: 0.4, ease: easeOut }}
            className="group"
          >
            {/* Role + Company */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium">
                  {exp.company}
                </p>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5 flex-shrink-0">
                <FaCalendarAlt className="w-2.5 h-2.5" />
                {exp.period}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
              {exp.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Separator */}
            {idx < experiences.length - 1 && (
              <div className="mt-12 border-t border-[var(--color-border)]" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

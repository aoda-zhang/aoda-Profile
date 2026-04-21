"use client";

import { motion, easeOut } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "E-Future Germany",
    period: "06/2022 — Present",
    description:
      "Leading frontend architecture for financial products. Built design system adopted across 5+ projects, reducing UI bugs by 60%. Spearheaded migration from AngularJS to React/TypeScript, improving development velocity by 40%.",
    tech: ["TypeScript", "React", "NestJS", "MongoDB"],
  },
  {
    title: "Software Engineer",
    company: "JD.com",
    period: "10/2020 — 05/2022",
    description:
      "Delivered core modules for the Global Seller Portal impacting 20,000+ suppliers. Built internal UI component library used in 10+ projects. Mentored 4 junior engineers.",
    tech: ["TypeScript", "React", "React Native", "Redux"],
  },
  {
    title: "Software Engineer",
    company: "ThoughtWorks",
    period: "06/2019 — 09/2020",
    description:
      "Consulted for enterprise clients on full-stack web applications. Practiced agile delivery and TDD across multiple engagements in financial services.",
    tech: ["JavaScript", "React", "Node.js", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Chengdu Meiya Pico",
    period: "07/2016 — 05/2019",
    description:
      "Developed and maintained frontend pages for e-commerce and data visualization platforms. Integrated REST APIs and built reusable component libraries.",
    tech: ["JavaScript", "Vue", "React", "Webpack"],
  },
];

export default function Experience() {
  return (
    <section className="py-16">
      <p className="section-label">Experience</p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[var(--color-rule)]" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.06, duration: 0.4, ease: easeOut }}
              className="relative pl-7"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 border-[var(--color-accent-bright)] bg-white" />

              <div>
                <h3 className="text-sm font-semibold text-[var(--color-ink)] leading-snug">
                  {exp.title}
                </h3>
                <p className="text-sm text-[var(--color-accent-bright)] font-medium mt-0.5">
                  {exp.company}
                </p>
                <p className="text-xs text-[var(--color-ink-muted)] mt-1 flex items-center gap-1.5">
                  <FaCalendarAlt className="w-2.5 h-2.5" />
                  {exp.period}
                </p>
                <p className="text-sm text-[var(--color-ink-light)] mt-2 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-[var(--color-rule)]" />
    </section>
  );
}

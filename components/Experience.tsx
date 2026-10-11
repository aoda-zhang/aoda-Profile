"use client";

import { motion, easeOut } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company: "Manulife",
    period: "2022 — Present",
    summary:
      "Build and evolve enterprise financial applications, combining frontend engineering with backend services and API integration.",
    highlights: [
      "Contributed to investment experiences serving 50,000+ customers, supporting a reported 65% investment conversion rate.",
      "Work across React, TypeScript, Node.js, and service integrations to deliver maintainable product features.",
    ],
    tech: ["React", "TypeScript", "Node.js", "NestJS", "API integration"],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Newegg",
    period: "2021 — 2022",
    summary:
      "Focused on frontend delivery, reusable UI foundations, and building maintainable interfaces for product teams.",
    highlights: [
      "Built and improved a shared library of 50+ reusable components, helping reduce feature delivery time by 35%.",
      "Worked with React and TypeScript to improve consistency and speed across frontend development.",
    ],
    tech: ["React", "TypeScript", "Component architecture", "Frontend performance"],
  },
  {
    title: "Frontend Engineer",
    company: "Hucai",
    period: "2017 — 2021",
    summary:
      "Built web application interfaces and reusable frontend functionality, developing a strong foundation in product-focused engineering.",
    highlights: [
      "Delivered e-commerce cart and inventory functionality for an application serving 2,000+ daily users.",
      "Contributed to an employee attendance platform used by 1,000+ employees, helping reduce manual HR workload by approximately 60%.",
    ],
    tech: ["JavaScript", "React", "Vue", "REST APIs", "Reusable components"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Career
          </p>
          <h2 className="mb-5 text-3xl font-black leading-tight text-[var(--color-text)] md:text-4xl">
            Professional experience
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            From frontend engineering to full-stack delivery, I&apos;ve spent
            9+ years building web products, improving engineering foundations,
            and solving practical problems for users and teams.
          </p>
        </motion.div>

        <div className="space-y-10 border-l border-[var(--color-border)] pl-5 md:space-y-12 md:pl-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: easeOut }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-void)] md:-left-[2.15rem]"
              />
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    {experience.title}
                  </h3>
                  <p className="mt-1 font-medium text-[var(--color-accent)]">
                    {experience.company}
                  </p>
                </div>
                <p className="flex shrink-0 items-center gap-2 text-xs text-[var(--color-text-muted)]">
                  <FaCalendarAlt aria-hidden="true" className="h-3 w-3" />
                  {experience.period}
                </p>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                {experience.summary}
              </p>

              <ul className="mb-5 space-y-2">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.tech.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, easeOut } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company: "Manulife",
    period: "2022 — Present",
    summary:
      "Build and evolve enterprise financial applications, combining frontend product work with backend services and API integration.",
    highlights: [
      "Contributed to investment experiences serving 50,000+ customers, supporting a reported 65% investment conversion rate.",
      "Delivered features across application boundaries, connecting user-facing workflows with backend capabilities.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Newegg",
    period: "2021 — 2022",
    summary:
      "Focused on improving frontend delivery and making shared UI foundations more effective for product teams.",
    highlights: [
      "Built and improved a shared library of 50+ reusable components, helping reduce feature delivery time by 35%.",
      "Improved consistency across interfaces by building reusable patterns instead of solving the same UI problems repeatedly.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Hucai",
    period: "2017 — 2021",
    summary:
      "Built practical web application features and reusable interfaces for day-to-day business workflows.",
    highlights: [
      "Delivered e-commerce cart and inventory functionality for an application serving 2,000+ daily users.",
      "Contributed to an employee attendance platform used by 1,000+ employees, helping reduce manual HR workload by approximately 60%.",
    ],
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
            Where I&apos;ve made an impact
          </h2>
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)] md:text-lg">
            A look at the products, platforms, and engineering improvements I&apos;ve
            contributed to throughout my career.
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

              <ul className="space-y-2">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

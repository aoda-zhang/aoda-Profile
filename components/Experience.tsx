"use client";

import { motion, easeOut } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company: "Manulife",
    period: "2022 — Present",
    summary:
      "Build enterprise investment applications across frontend architecture, shared UI foundations, and backend service integration.",
    highlights: [
      "Led design-token implementation across five microfrontend services, standardizing styling and reducing frontend styling issues by at least 30%.",
      "Refactored a legacy React PDF reporting module, reducing development time for new reports by 40%; designed an AI-supported component library and contributed to fund-trading modules used by 3,000+ fund managers and millions of investors.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Newegg",
    period: "2021 — 2022",
    summary:
      "Led an Angular-to-React microfrontend migration across three teams with zero production downtime, and built A+ content marketplace features that improved seller publishing efficiency by 40%.",
    highlights: [
      "Delivered 12+ React Native mobile features that enabled end-to-end store management for sellers.",
      "Built core e-commerce cart and inventory features for a platform serving 2,000+ daily users.",
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
      "Built a React-based attendance platform for 1,000+ employees, reducing manual HR workload by approximately 60%.",
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

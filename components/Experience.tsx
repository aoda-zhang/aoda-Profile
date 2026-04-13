"use client";

import { useState } from "react";
import classNames from "classnames";

const experiences = [
  {
    company: "Manulife",
    role: "Full-Stack Developer",
    period: "Aug 2022 – Present",
    link: "https://www.manulife.com",
    items: [
      "Led reconstruction of fund trading reporting system, improving development efficiency by 40%",
      "Completed design token integration across multiple frontend projects, reducing style bugs by 60%",
      "Participated in frontend/backend architecture design and core development of fund trading microservices",
      "Helped reconstruct DevOps pipeline using GitHub Actions",
    ],
    tech: ["TypeScript", "React", "Redux", "Tailwind", "NestJS", "MongoDB"],
  },
  {
    company: "Newegg",
    role: "Senior Frontend Developer",
    period: "Aug 2021 – July 2022",
    link: "https://www.newegg.com",
    items: [
      "Led frontend stack migration from AngularJS to React/TypeScript, increasing development speed by 30%",
      "Built internal reusable UI component library used in 10+ projects",
      "Delivered core modules for Newegg Global Seller Portal, impacting 20,000+ suppliers",
      "Mentored 4 junior engineers and facilitated 2 promotions",
    ],
    tech: ["JavaScript", "TypeScript", "React", "Redux", "SCSS", "Vite"],
  },
  {
    company: "Hucais",
    role: "Frontend Developer",
    period: "Sept 2017 – June 2021",
    link: "",
    items: [
      "Developed and maintained frontend pages for e-commerce platform using Vue and React",
      "Integrated APIs and developed reusable components under senior developer mentorship",
    ],
    tech: ["Vue", "React", "Redux", "SCSS", "Webpack"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience">
      <h2 className="section-title text-center">Experience</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs */}
        <div className="md:w-1/3 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActive(i)}
              className={classNames(
                "text-left px-4 py-3 rounded-lg border transition whitespace-nowrap md:whitespace-normal",
                active === i
                  ? "bg-white border-zinc-300 text-zinc-900"
                  : "bg-transparent border-transparent text-zinc-500 hover:text-zinc-700"
              )}
            >
              <div className="font-medium text-sm">{exp.company}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{exp.period}</div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:flex-1 card">
          <div className="flex items-center gap-2 mb-4">
            {experiences[active].link ? (
              <a
                href={experiences[active].link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-zinc-900 hover:underline"
              >
                {experiences[active].company}
              </a>
            ) : (
              <span className="font-bold text-zinc-900">{experiences[active].company}</span>
            )}
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500 text-sm">{experiences[active].role}</span>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600 leading-relaxed mb-4">
            {experiences[active].items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {experiences[active].tech.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

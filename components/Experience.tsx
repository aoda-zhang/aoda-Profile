import React, { useState } from "react";
import classNames from "classnames";
import menuMappings from "@/constants/menuMappings";
import Link from "next/link";

const experiences = [
  {
    company: "Manulife",
    role: "Full-stack Developer",
    period: "Aug 2022 – Present",
    link: "https://www.manulife.com",
    description: [
      "Full-stack developer at GWAM, working with global teams to deliver fund trading features in an agile environment.",
      "Led the design and implementation of the transaction reporting module.",
      "Contributed to the architecture and core development of key microservices (subscription, redemption, conversion, RSP).",
      "Guided junior front-end developers on component design and performance tuning.",
      "Improved CI/CD efficiency by participating in DevOps pipeline refactoring.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind",
      "Express.js",
      "NestJS",
      "MongoDB",
    ],
  },
  {
    company: "Newegg",
    role: "Senior FrontEnd Developer",
    period: "Aug 2021 – July 2022",
    link: "https://www.newegg.com",
    description: [
      "Led front-end tech stack migration and established team-wide standards.",
      "Built reusable component library and refactored legacy code for better performance.",
      "Developed key modules for Newegg seller web and mobile portal.",
      "Mentored junior developers and supported their technical growth.",
    ],
    tech: ["Javascript", "Typescript", "React", "React-Native", "Redux", "Scss", "Vite"],
  },
  {
    company: "Hucais",
    role: "FrontEnd Developer",
    period: "Sept 2017 – June 2021",
    link: "",
    description: [
      "Developed and maintained front-end pages for e-commerce platform and photo studio system using JavaScript, Vue, and React.",
      "integrating APIs and developing reusable components under senior developer mentorship.",
    ],
    tech: ["HTML5", "CSS3", "Typescript", "Vue", "React", "Redux", "Scss", "Webpack"],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <h3 id={menuMappings.experience.id} className="menu_title text-secondary text-center">
        {menuMappings.experience.title}
      </h3>
      <section className="flex flex-col md:flex-row gap-6 text-gray-200">
        <div className="md:w-1/3 flex flex-col gap-3">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActive(i)}
              className={classNames(
                "text-left p-4 border-l-4 rounded-md hover:bg-white/5 transition-all duration-200 cursor-pointer",
                active === i
                  ? "border-primary bg-white/5 text-primary"
                  : "border-transparent text-text-secondary"
              )}
            >
              <div className="font-semibold">
                {exp.role}
              </div>
              <div className="text-xs text-gray-500 mt-1">{exp.period}</div>
            </button>
          ))}
        </div>

        <div className="md:w-3/4 p-4 transition-border  rounded-xl bg-black/30 shadow-md">
          <div className="flex items-center gap-2">
            <Link className={classNames(["text-xl font-bold text-primary", `${experiences[active]?.link ? "cursor-pointer" : ""}`])} href={experiences[active]?.link} target="_blank">
              {experiences[active]?.company}
            </Link>
            {
              experiences[active]?.link && (
                <a
                  href={experiences[active].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-secondary mt-[-8]"
                >
                  ↗
                </a>
              )
            }

          </div>

          <ul className="list-disc mt-4 pl-5 space-y-2 text-sm leading-relaxed">
            {experiences[active].description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            {experiences[active].tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-primary/10 text-primary border-primary px-2 py-1 rounded-full text-xs font-mono border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section >
    </>
  );
};

export default Experience;

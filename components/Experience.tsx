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
      "As a member of GWAM, collaborated with PM, QA, and global development teams to deliver high-quality features through Agile sprints.",
      "Made significant contributions to system architecture and the development of key modules across multiple frontend and backend microservices.",
      "Led the requirement analysis, design, and implementation of the trading report module in the fund trading system.",
      "Participate in the refactoring of devops.",
    ],
    tech: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
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
      "As a member of MKPL, I led the selection and migration of the front-end technology stack.",
      "Led the development of the team’s component library to ensure reusability and consistency.",
      "Refactored legacy pages and improved overall code maintainability and performance.",
      "Push the team to formulate front-end technical specifications and best practices.",
      "Guide junior front-end developers to help them improve their skills and solve technical problems.",
      "Responsible for the design, development and maintenance of important modules of the seller web and mobile terminal."
    ],
    tech: ["React", "React-Native", "Redux", "Scss", "Vite"],
  },
  {
    company: "Hucais",
    role: "FrontEnd Developer",
    period: "Sept 2017 – June 2021",
    link: "",
    description: [
      "As a member of MKPL, I led the selection and migration of the front-end technology stack.",
      "Led the development of the team’s component library to ensure reusability and consistency.",
      "Refactored legacy pages and improved overall code maintainability and performance.",
      "Push the team to formulate front-end technical specifications and best practices.",
      "Guide junior front-end developers to help them improve their skills and solve technical problems.",
      "Responsible for the design, development and maintenance of important modules of the seller web and mobile terminal."
    ],
    tech: ["React", "React-Native", "Redux", "Scss", "Vite"],
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
                  className="text-xs text-blue-300 hover:underline"
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
                className="bg-neon-green/10 text-primary px-2 py-1 rounded-full text-xs font-mono border border-primary"
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

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
      "As a full-stack developer at Manulife GWAM, I worked with global teams to provide fund trading capabilities in an agile environment.",
      "Led the reconstruction of the fund trading reporting system, improving the original development efficiency by 40%",
      "Responsible for communicating with the design department, completing the design token integration work of multiple front-end projects, and reducing style bugs by 60%",
      "Participated in the front-end and back-end architecture design and core development of multiple important fund trading microservices (subscription, switch, redemption, RSP).",
      "Participated in the reconstruction of the DevOps pipeline and used github actions to improve CI/CD efficiency.",
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
      "Led the Front-end technology stack migration (from AngularJS to React/TypeScript), increasing development speed by 30% and introducing scalable coding standards across a team of 30+ people.",
      "Built an internal reusable UI component library that is used in more than 10 internal and external projects.",
      "Delivered core modules (order management, logistics management, promotion management) for Newegg Global Seller Portal, impacting more than 20,000 suppliers.",
      "Mentored 4 junior engineers; supported their career development through regular assessments and training, and facilitated 2 promotions.",
    ],
    tech: [
      "Javascript",
      "Typescript",
      "React",
      "React-Native",
      "Redux",
      "Scss",
      "Vite",
    ],
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
    tech: [
      "HTML5",
      "CSS3",
      "Typescript",
      "Vue",
      "React",
      "Redux",
      "Scss",
      "Webpack",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <h3
        id={menuMappings.experience.id}
        className="menu_title text-secondary text-center"
      >
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
              <div className="font-semibold">{exp.role}</div>
              <div className="text-xs text-gray-500 mt-1">{exp.period}</div>
            </button>
          ))}
        </div>

        <div className="md:w-3/4 p-4 transition-border  rounded-xl bg-black/30 shadow-md">
          <div className="flex items-center gap-2">
            <Link
              className={classNames([
                "text-xl font-bold text-primary",
                `${experiences[active]?.link ? "cursor-pointer" : ""}`,
              ])}
              href={experiences[active]?.link}
              target="_blank"
            >
              {experiences[active]?.company}
            </Link>
            {experiences[active]?.link && (
              <a
                href={experiences[active].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-secondary mt-[-8]"
              >
                ↗
              </a>
            )}
          </div>

          <ul className="list-disc mt-4 pl-5 space-y-2 text-sm leading-relaxed text-text-secondary">
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
      </section>
    </>
  );
};

export default Experience;

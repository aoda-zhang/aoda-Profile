import menuMappings from "@/constants/menuMappings";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Manulife",
    role: "Full‑stack Developer",
    period: "2022 – Present",
    desc: (
      <ul className="space-y-2 list-disc pl-5">
        <li>
          As a member of GWAM ,Collaborated with PM, QA, and global development
          teams to deliver high-quality features through Agile sprints.
        </li>
        <li>
          Led the requirement analysis, design, and implementation of the
          trading report module in the fund trading system.
        </li>
        <li>
          Participated in the design and development of backend microservices
          for the fund trading system, focusing on modularity and performance.
        </li>
        <li>
          Contributed to the team’s CI/CD pipeline setup and maintenance using
          GitHub Actions, supporting continuous integration and delivery
          workflows.
        </li>
      </ul>
    ),
    url: "https://www.manulifeim.com/",
    logo: "/assets/images/manulife.svg",
    techs: [
      "TypeScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "MongoDB",
    ],
  },
  {
    company: "Newegg",
    role: "Senior FrontEnd Developer",
    period: "2021 – 2022",
    desc: (
      <ul className="space-y-2 list-disc pl-5">
        <li>
          As a member of MKPL, I led the selection and migration of the
          front-end technology stack.
        </li>
        <li>
          Lead the design and development of the team&lsquo;s component library
          to ensure the reusability and consistency of the component library.
        </li>
        <li>
          Push the team to formulate front-end technical specifications and best
          practices.
        </li>
        <li>
          Guide junior front-end developers to help them improve their skills
          and solve technical problems.
        </li>
        <li>
          Responsible for the design, development and maintenance of important
          modules of the seller web and mobile terminal.
        </li>
      </ul>
    ),
    url: "https://partner.newegg.com/",
    logo: "/assets/images/newegg.png",
    techs: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Scss",
      "Vite",
    ],
  },
  {
    company: "Hucais",
    role: "FrontEnd Developer",
    period: "2017 – 2021",
    desc: "Built MERN apps & CI/CD.",
    url: "https://www.hucais.com",
    logo: "/assets/images/hucais.png",
    techs: ["JavaScript", "TypeScript", "React", "Vue.js", "Scss"],
  },
];

export function Experience() {
  return (
    <section id={menuMappings.experience.id} className="space-y-6 py-12">
      <h3 className="menu_title text-secondary text-center mb-20">
        {menuMappings.experience.title}
      </h3>
      <div className="relative border-l-2 border-secondary ml-4 pl-6 space-y-4">
        {experiences.map((e, i) => (
          <div key={i} className="space-y-1">
            <h4 className="text-xl neon-text flex items-center gap-2">
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <>
                  {e.role} @ {e.company}
                  {e.logo && (
                    <Image
                      src={e?.logo}
                      alt={e.company}
                      width={34}
                      height={34}
                      className="h-auto object-contain"
                    />
                  )}
                  <MoveUpRight />
                </>
              </a>
            </h4>
            <span className="text-sm text-gray-400">{e?.period}</span>
            <div className="text-text-secondary my-4">{e?.desc}</div>
            {e?.techs?.map((tech, index) => (
              <span
                key={index}
                className="inline-block text-gray-300 text-md mr-4 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

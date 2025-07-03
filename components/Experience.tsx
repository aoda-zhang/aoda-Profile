import menuMappings from "@/constants/menuMappings";
import { MoveUpRight } from "lucide-react";

const experiences = [
  {
    company: "Manulife",
    role: "Full‑stack Developer",
    period: "2022 – Present",
    desc: "Built MERN apps & CI/CD.",
    url: "https://www.manulifeim.com/",
    logo: "/assets/images/manulife.svg",
    techs: [
      "TypeScript",
      "React",
      "Redux",
      "Vite",
      "Node.js",
      "NestJS",
      "MongoDB",
    ],
  },
  {
    company: "Newegg",
    role: "Senior FrontEnd Developer",
    period: "2021 – 2022",
    desc: "Built MERN apps & CI/CD.",
    url: "https://partner.newegg.com/",
    logo: "/assets/images/newegg.png",
    techs: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Tailwind CSS",
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
    techs: ["JavaScript", "TypeScript", "React", "Vue.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-6 py-12">
      <h3 className="menu_title text-secondary text-center mb-20">
        {menuMappings.experience.title}
      </h3>
      <div className="relative border-l-2 border-secondary ml-4 pl-6 space-y-8">
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
                    <img
                      src={e.logo}
                      alt={e.company}
                      className="h-8 w-auto object-contain"
                    />
                  )}
                  <MoveUpRight />
                </>
              </a>
            </h4>
            <span className="text-sm text-gray-400">{e.period}</span>
            <p className="text-text-secondary">{e.desc}</p>
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

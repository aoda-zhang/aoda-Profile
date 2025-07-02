const experiences = [
  {
    company: "Manulife",
    role: "Full‑stack Developer",
    period: "2022 – Present",
    desc: "Built MERN apps & CI/CD.",
    techs: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
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
    desc: "Built MERN apps & CI/CD.",
    techs: ["JavaScript", "TypeScript", "React", "React Native", "Vite"],
  },
  {
    company: "Hucais",
    role: "FrontEnd Developer",
    period: "2017 – 2021",
    desc: "Built MERN apps & CI/CD.",
    techs: ["JavaScript", "React", "Vue.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-6 py-12">
      <h3 className="menu_title text-secondary text-center mb-20">
        / Experience
      </h3>
      <div className="relative border-l-2 border-secondary ml-4 pl-6 space-y-8">
        {experiences.map((e, i) => (
          <div key={i} className="space-y-1">
            <h4 className="text-xl neon-text">
              {e.role} @ {e.company}
            </h4>
            <span className="text-sm text-gray-400">{e.period}</span>
            <p className="text-gray-300">{e.desc}</p>
            {e?.techs?.map((tech, index) => (
              <span
                key={index}
                className="inline-block text-text-secondary text-md mr-4 mb-2"
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

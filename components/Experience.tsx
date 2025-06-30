const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Full‑stack Developer",
    period: "2023 – Present",
    desc: "Leading cloud‑native services.",
  },
  {
    company: "Globex Inc.",
    role: "Full‑stack Engineer",
    period: "2020 – 2023",
    desc: "Built MERN apps & CI/CD.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="space-y-6 py-12">
      <h3 className="text-2xl text-[#00FFC6] text-center">/ Experience</h3>
      <div className="relative border-l-2 border-[#00FFC6] ml-4 pl-6 space-y-8">
        {experiences.map((e, i) => (
          <div key={i} className="space-y-1">
            <span className="absolute -left-3 top-1.5 h-3 w-3 rounded-full bg-[#00FFC6]" />
            <h4 className="text-xl neon-text">
              {e.role} @ {e.company}
            </h4>
            <span className="text-sm text-gray-400">{e.period}</span>
            <p className="text-gray-300">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const skills = [
  {
    title: "Frontend",
    description: "Building responsive, user-friendly web interfaces with modern tools",
    items: ["JavaScript", "TypeScript", "React", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and microservices",
    items: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Mobile",
    description: "Cross-platform mobile apps with React Native",
    items: ["React Native", "Expo", "TypeScript", "NativeWind"],
  },
];

export default function Skill() {
  return (
    <section id="skill">
      <h2 className="section-title text-center">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div key={skill.title} className="card">
            <h3 className="font-semibold text-zinc-900 mb-2">{skill.title}</h3>
            <p className="text-sm text-zinc-500 mb-3">{skill.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span 
                  key={item} 
                  className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

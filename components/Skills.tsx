const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "MUI"],
  Backend: ["Node.js", "NestJS", "MongoDB", "PostgreSQL", "Docker"],
  Tools: ["GitHub Actions", "pnpm", "Jest", "ESLint"],
};

export function Skills() {
  return (
    <section id="skills" className="space-y-6 py-12">
      <h3 className="text-2xl text-[#00FFC6] text-center">/ Skills</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([group, list]) => (
          <div
            key={group}
            className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] hover:scale-[1.02] transition"
          >
            <h4 className="text-xl neon-text mb-3 text-center">{group}</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {list.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

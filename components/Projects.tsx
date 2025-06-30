const projects = [
  {
    title: "🔐 Terminal Login UI",
    desc: "Pure CSS/JS terminal‑style login screen.",
  },
  {
    title: "📦 Docker Dashboard",
    desc: "Live Docker monitor with neon graphs.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="space-y-6 py-12">
      <h3 className="text-2xl text-[#00FFC6] text-center">/ Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div
            key={p.title}
            className="bg-[#1A1A1A] p-6 rounded-lg border border-[#333] hover:scale-[1.02] transition"
          >
            <h4 className="text-xl neon-text mb-2">{p.title}</h4>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

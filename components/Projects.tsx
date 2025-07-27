import menuMappings from "@/constants/menuMappings";

const projects: Record<string, string>[] = [];

export function Projects() {
  return (
    <section id={menuMappings?.projects?.id} className="space-y-6 py-12">
      <h3 className="menu_title text-center">{menuMappings.projects?.title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects?.map((p) => (
          <div
            key={p?.title}
            className="p-6 rounded-lg border hover:scale-[1.02] transition"
          >
            <h4 className="text-xl neon-text mb-2">{p?.title}</h4>
            <p className="text-gray-400">{p?.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "PawHaven",
    description: "An open-source platform for rescuing stray animals. Connects rescuers, adopters, and volunteers to help animals find warm homes.",
    tech: ["TypeScript", "React", "Node.js", "MongoDB", "Kubernetes"],
    link: "https://pawhaven-love.vercel.app",
    github: "https://github.com/aoda-zhang/pawhaven",
  },
  {
    title: "Super Resume",
    description: "A modern resume builder with multiple templates, real-time preview, and PDF export. Supports multiple languages.",
    tech: ["TypeScript", "React", "Redux", "Tailwind CSS"],
    link: "",
    github: "https://github.com/aoda-zhang/super-resume",
  },
  {
    title: "OpenClaw",
    description: "AI-powered personal assistant framework with extensible skills system. Supports multiple messaging platforms.",
    tech: ["TypeScript", "Node.js", "Claude API", "MCP"],
    link: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="project" className="pb-12">
      <h2 className="section-title text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="card group">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-zinc-900">{project.title}</h3>
              <div className="flex gap-2 text-zinc-400">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-zinc-500 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

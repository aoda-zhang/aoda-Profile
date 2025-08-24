import menuMappings from "@/constants/menuMappings";
import PawHaven from "./PawHaven";

const projects: Record<string, string>[] = [];

export function Projects() {
  return (
    <section id={menuMappings?.projects?.id} className="space-y-6 py-12">
      <h3 className="menu_title text-center">{menuMappings.projects?.title}</h3>
      <PawHaven
        title="PawHaven"
        description="A platform to rescue and rehome stray animals. Connects rescuers, adopters, and volunteers."
        tech={[
          "TypeScript",
          "React",
          "Redux",
          "TailwindCSS",
          "Node.js",
          "MongoDB",
          "Github Action",
          "Azure K8s",
        ]}
        liveUrl="https://pawhaven-love.vercel.app"
        screenshots={[
          "/assets/images/pawhavenHome.png",
          "/assets/images/pawhavenHome.png",
          "/assets/images/pawhavenHome.png",
          "/assets/images/pawhavenHome.png",
        ]}
      />
    </section>
  );
}

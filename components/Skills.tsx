import { motion, Variants } from "framer-motion";

const expertiseData = [
  {
    key: "frontend",
    title: "Frontend Dev (React)",
    description:
      "Crafting pixel-perfect, accessible UIs with React and a modern tooling stack.",
    skills: ["Javascript", "Typescript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    key: "backend",
    title: "Backend Dev (Node.js)",
    description:
      "Designing scalable, maintainable APIs and microservices on Node.js.",
    skills: ["Node.js", "ExpressJS", "NestJS", "MongoDB", "Prisma"],
  },
  {
    key: "cross",
    title: "Cross-Platform Dev (React Native)",
    description:
      "Delivering native-quality mobile apps with a single React Native codebase.",
    skills: ["React Native", "Expo", "TypeScript", "NativeWind"],
  },
] as const;

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="text-center mt-40 px-4">
      <h2 className="menu_title mb-6">/ Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expertiseData.map((exp, i) => (
          <motion.div
            key={exp.key}
            className="bg-black/30 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-neon-green/60 transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            variants={cardVariants}
          >
            <h3 className="text-neon-green text-lg font-bold mb-2 glow-text">
              {exp.title}
            </h3>
            <p className="text-text-secondary text-sm mb-3">
              {exp.description}
            </p>

            <ul className="text-left list-disc list-inside text-gray-300 space-y-1">
              {exp.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion, easeOut } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNestjs,
  SiExpo,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: FaCode,
    description: "Building responsive, user-friendly web interfaces",
    skills: [
      { name: "React", level: 95, icon: GrReactjs },
      { name: "TypeScript", level: 90, icon: SiTypescript },
      { name: "Next.js", level: 85, icon: SiNextdotjs },
      { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    description: "Designing scalable APIs and microservices",
    skills: [
      { name: "Node.js", level: 88, icon: SiNodedotjs },
      { name: "NestJS", level: 80, icon: SiNestjs },
      { name: "MongoDB", level: 82, icon: SiMongodb },
      { name: "PostgreSQL", level: 75, icon: SiPostgresql },
    ],
  },
  {
    title: "Mobile",
    icon: FaMobileAlt,
    description: "Cross-platform mobile apps with React Native",
    skills: [
      { name: "React Native", level: 85, icon: GrReactjs },
      { name: "Expo", level: 80, icon: SiExpo },
      { name: "Redux", level: 88, icon: SiRedux },
      { name: "TypeScript", level: 90, icon: SiTypescript },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: easeOut },
  }),
};

export default function Skill() {
  return (
    <section id="skill">
      <h2 className="section-title text-center">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="card group"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-muted)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                <category.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900">{category.title}</h3>
                <p className="text-xs text-zinc-400">{category.description}</p>
              </div>
            </div>

            {/* Skills with progress */}
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <skill.icon className="w-3.5 h-3.5 text-zinc-400" />
                      <span className="text-sm text-zinc-600">{skill.name}</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ "--progress-target": `${skill.level}%` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

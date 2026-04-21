"use client";

import { motion, easeOut } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue", "Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Mobile & DevOps",
    skills: ["React Native", "Expo", "Docker", "Git", "AWS", "CI/CD"],
  },
];

export default function Skill() {
  return (
    <section id="skill" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-12"
      >
        Skills
      </motion.h2>

      <div className="space-y-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4, ease: easeOut }}
          >
            <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

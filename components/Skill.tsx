"use client";

import { motion, easeOut } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "NestJS", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    label: "Mobile & Tools",
    skills: ["React Native", "Expo", "Git", "Docker", "AWS"],
  },
];

export default function Skill() {
  return (
    <section className="py-16">
      <p className="section-label">Skills</p>

      <div className="space-y-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4, ease: easeOut }}
          >
            <h3 className="text-xs font-semibold text-[var(--color-ink-muted)] uppercase tracking-wider mb-2.5">
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

      {/* Divider */}
      <div className="mt-16 border-t border-[var(--color-rule)]" />
    </section>
  );
}

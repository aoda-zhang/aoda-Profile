"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aoda.zhang.work@gmail.com", icon: FaEnvelope },
];

export default function Ending() {
  return (
    <footer className="py-32 md:py-40 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-3xl md:text-4xl font-black text-[var(--color-text)] mb-4">
            Still exploring.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Every step forward is a path found.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label={s.name}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-xs text-[var(--color-text-muted)]"
        >
          © {new Date().getFullYear()} Aoda Zhang · Berlin
        </motion.p>
      </div>
    </footer>
  );
}

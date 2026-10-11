"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aoda.zhang.work@gmail.com", icon: FaEnvelope },
];

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-3xl mx-auto">
        {/* Avatar with decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex-shrink-0"
        >
          {/* Decorative ring */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 blur-md" />
          <div className="relative w-40 h-40">
            <Image
              src="/assets/images/avatar.jpeg"
              alt="Aoda Zhang"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-center md:text-left"
        >
          <p className="text-zinc-600 leading-relaxed">
            I&apos;m a full-stack software engineer with 9+ years of experience building enterprise fintech and e-commerce applications. My core strengths are React, TypeScript, frontend architecture, and reusable component systems, complemented by hands-on Node.js backend development, API design, and service integration.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            Outside work, I build PawHaven, an open-source animal rescue platform that combines product thinking, full-stack architecture, and AI-powered engineering workflows. I care about creating maintainable software that solves practical problems. I spend time on{" "}
            <a
              href="https://pawhaven.work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              PawHaven
            </a>, an open-source platform for rescuing stray animals.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 pt-2 justify-center md:justify-start">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-muted)] transition-all"
                aria-label={s.name}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

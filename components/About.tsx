"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const highlights = [
  { icon: "💼", label: "8+ years full-stack experience" },
  { icon: "🏠", label: "Based in China" },
  { icon: "🐾", label: "Animal rescue advocate" },
  { icon: "🌐", label: "Open source enthusiast" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aodazhang666@email.com", icon: FaEnvelope },
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
            I discovered software development through web development, and ever since,
            I&apos;ve been passionate about all things JavaScript—from frontend to backend,
            mobile to desktop. With 8+ years of experience, I&apos;ve shipped products
            used by thousands of users across financial services and e-commerce.
          </p>
          <p className="text-zinc-600 leading-relaxed">
            I believe technology exists to serve humanity. Besides taking care of my newborn child,
            I dedicate most of my time to{" "}
            <a
              href="https://pawhaven-love.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              PawHaven
            </a>, an open-source platform for rescuing stray animals.
          </p>

          {/* Highlight pills */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
            {highlights.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 bg-zinc-50 border border-zinc-100 rounded-full px-3 py-1.5"
              >
                <span>{h.icon}</span>
                {h.label}
              </span>
            ))}
          </div>

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

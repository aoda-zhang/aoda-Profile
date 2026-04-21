"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";

const contacts = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aoda.zhang.work@gmail.com", icon: FaEnvelope },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.5, ease: easeOut },
  }),
};

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Avatar + Name row */}
      <div className="flex items-center gap-5 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-[var(--color-rule)] flex-shrink-0"
        >
          <img
            src="/assets/images/avatar.jpeg"
            alt="Aoda Zhang"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
            className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-ink)]"
          >
            Aoda Zhang
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-sm md:text-base text-[var(--color-ink-light)] mt-0.5"
          >
            Full-Stack Developer · Berlin, Germany
          </motion.p>
        </div>
      </div>

      {/* Bio */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.15}
        className="text-base md:text-lg text-[var(--color-ink-light)] leading-relaxed max-w-xl mb-4"
      >
        I build web and mobile applications with React, Node.js, and TypeScript.
        9+ years shipping products across fintech and e-commerce.
        Founder of{" "}
        <a
          href="https://pawhaven.work"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent-bright)] hover:underline font-medium"
        >
          PawHaven
        </a>
        {" "}— an open-source platform for rescuing stray animals.
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="text-sm text-[var(--color-ink-muted)] mb-8"
      >
        Open to opportunities
      </motion.p>

      {/* CTAs + Socials */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.25}
        className="flex items-center gap-3 flex-wrap"
      >
        <a href="mailto:aoda.zhang.work@gmail.com" className="btn btn-primary">
          <FaEnvelope className="w-3.5 h-3.5" />
          Get in Touch
        </a>
        <a
          href="/aoda-zhang.pdf"
          download
          className="btn btn-ghost"
        >
          Download CV
        </a>

        {/* Separator */}
        <span className="hidden md:inline-block w-px h-5 bg-[var(--color-rule)] mx-1" />

        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target={c.name === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-dim)] transition-all"
            aria-label={c.name}
          >
            <c.icon className="w-4 h-4" />
          </a>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="mt-20 border-t border-[var(--color-rule)]" />
    </section>
  );
}

"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";

const contacts = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aodazhang",
    icon: FaLinkedin,
  },
  { name: "Email", href: "mailto:aoda.zhang.work@email.com", icon: FaEnvelope },
];

const stats = [
  { label: "Years Experience", value: "9+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "Team Members Mentored", value: "10+" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-16 md:py-24">
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow badge */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="badge badge-accent">
            <span className="badge-dot" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="text-zinc-900">Hi, I&apos;m </span>
          <span className="gradient-text-animated">Aoda Zhang</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl"
        >
          Full-Stack Developer building products that{" "}
          <span className="text-[var(--color-primary)] font-medium">
            make a difference
          </span>
          . Founder of{" "}
          <a
            href="https://pawhaven.work"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] font-semibold hover:underline"
          >
            PawHaven
          </a>
          .
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-500 max-w-xl leading-relaxed text-base md:text-lg"
        >
          I craft web and mobile applications with React, Node.js, and
          TypeScript. Passionate about JavaScript ecosystem, open source, and
          using technology to help others.
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-8 md:gap-12 pt-2"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="stat-number">{stat.value}</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Contact row with CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <a
            href="mailto:aoda.zhang.work@email.com"
            className="btn btn-primary"
          >
            <FaEnvelope className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="https://github.com/aoda-zhang"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub className="w-4 h-4" />
            View GitHub
          </a>
          <a
            href="/aoda-zhang.pdf"
            download="Aoda-Zhang-Full-Stack-Developer.pdf"
            className="btn btn-outline"
          >
            <FaDownload className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 pt-2"
        >
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target={contact.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-muted)] transition-all"
              aria-label={contact.name}
            >
              <contact.icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-300"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

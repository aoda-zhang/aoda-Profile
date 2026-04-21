"use client";

import { motion, easeOut } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const contacts = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aoda.zhang.work@gmail.com", icon: FaEnvelope },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.6, ease: easeOut },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background glows */}
      <div className="glow w-[500px] h-[500px] bg-amber-500 -top-40 -right-40 absolute" />
      <div className="glow w-[400px] h-[400px] bg-blue-600 bottom-20 -left-32 absolute" style={{ opacity: 0.06 }} />

      <div className="max-w-3xl mx-auto px-6 w-full relative z-10 pb-24">
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-[var(--color-accent)] text-sm font-semibold tracking-widest uppercase mb-6"
        >
          Full-Stack Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-[var(--color-text)]"
        >
          Aoda
          <br />
          <span className="text-[var(--color-text-muted)]">Zhang.</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.18}
          className="mt-8 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg"
        >
          9+ years building products with React, Node.js & TypeScript.
          Currently based in Berlin. Founder of{" "}
          <a
            href="https://pawhaven.work"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline font-medium"
          >
            PawHaven
          </a>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.26}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="mailto:aoda.zhang.work@gmail.com" className="btn btn-primary">
            <FaEnvelope className="w-4 h-4" />
            Say Hello
          </a>
          <a href="/aoda-zhang.pdf" download className="btn btn-ghost">
            Resume
          </a>
          <a
            href="https://github.com/aoda-zhang"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.34}
          className="mt-12 flex items-center gap-4"
        >
          {contacts.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target={c.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label={c.name}
            >
              <c.icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[var(--color-text-muted)]"
        >
          <FaArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "Linkedin", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aodazhang666@email.com", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-100 py-10 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-500">
              Built with{" "}
              <span className="inline-flex items-center gap-1 text-rose-400">
                <FaHeart className="w-3 h-3 fill-current" />
              </span>{" "}
              by{" "}
              <span className="text-zinc-700 font-medium">Aoda Zhang</span>
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              © {new Date().getFullYear()} · Open to opportunities
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-muted)] transition-all"
                aria-label={s.name}
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="text-center md:text-right hidden md:block">
            <p className="text-xs text-zinc-400">
              Based in China · Always learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

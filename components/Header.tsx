"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-void)]/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base font-bold tracking-tight text-[var(--color-text)]"
          >
            aoda<span className="text-[var(--color-accent)]">.</span>
          </button>

          <div className="flex items-center gap-5">
            <a
              href="/aoda-zhang.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Download CV
            </a>
            <a
              href="https://github.com/aoda-zhang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aodazhang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
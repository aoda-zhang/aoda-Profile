"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skill" },
  { label: "Projects", id: "projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-void)]/80 backdrop-blur-lg border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base font-bold tracking-tight text-[var(--color-text)]"
          >
            aoda<span className="text-[var(--color-accent)]">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[var(--color-text-muted)]"
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-void)] border-b border-[var(--color-border)]"
          >
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

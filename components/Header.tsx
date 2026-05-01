"use client";

import { useState, useEffect } from "react";

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
        </div>
      </div>
    </header>
  );
}

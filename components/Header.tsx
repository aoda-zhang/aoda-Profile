"use client";

import { useState } from "react";
import menuMappings from "@/constants/menuMappings";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-50/90 backdrop-blur border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-zinc-900 font-bold text-lg">Aoda</a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-500">
          <a href={menuMappings.about.anchor} className="hover:text-zinc-900 transition">About</a>
          <a href={menuMappings.skill.anchor} className="hover:text-zinc-900 transition">Skills</a>
          <a href={menuMappings.experience.anchor} className="hover:text-zinc-900 transition">Experience</a>
          <a href={menuMappings.projects.anchor} className="hover:text-zinc-900 transition">Projects</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-600"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-2 text-sm text-zinc-500 bg-zinc-50 border-b border-zinc-200">
          <a href={menuMappings.about.anchor} onClick={() => setOpen(false)} className="py-2 hover:text-zinc-900">About</a>
          <a href={menuMappings.skill.anchor} onClick={() => setOpen(false)} className="py-2 hover:text-zinc-900">Skills</a>
          <a href={menuMappings.experience.anchor} onClick={() => setOpen(false)} className="py-2 hover:text-zinc-900">Experience</a>
          <a href={menuMappings.projects.anchor} onClick={() => setOpen(false)} className="py-2 hover:text-zinc-900">Projects</a>
        </nav>
      )}
    </header>
  );
}

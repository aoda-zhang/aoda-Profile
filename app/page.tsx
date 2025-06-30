"use client";

import Particles from "@tsparticles/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#E0E0E0] font-mono relative overflow-hidden">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <Hero/>
        <Skills />
        <Experience />
        <Projects />

        {/* Contact */}
        <section id="contact" className="text-center space-y-4">
          <h3 className="text-2xl text-[#00FFC6]">/ Contact</h3>
          <p>
            Email me at{" "}
            <a
              href="mailto:you@example.com"
              className="text-[#39FF14] underline"
            >
              you@example.com
            </a>
          </p>
          <a
            href="mailto:you@example.com"
            className="inline-block px-6 py-3 border border-[#00FF00] neon-text glow-border rounded-lg transition hover:scale-105"
          >
            Send Message
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

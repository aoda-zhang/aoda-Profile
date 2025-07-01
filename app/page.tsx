"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-background text-[#E0E0E0] font-mono relative overflow-hidden">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        <Hero />
        <About/>
        <Skills />
        <Experience />
        {/* <Projects /> */}
      </main>
      <Footer />
    </div>
  );
}

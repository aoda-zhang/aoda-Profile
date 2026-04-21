import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <Header />
      <main className="max-w-2xl mx-auto px-6">
        <Hero />
        <Experience />
        <Skill />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-void)]">
      <Header />
      <Hero />
      <main className="max-w-3xl mx-auto px-6">
        <Experience />
        <Skill />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

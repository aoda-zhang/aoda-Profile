import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

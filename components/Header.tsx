import { useEffect, useState } from "react";
import menuMappings from "@/constants/menuMappings";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-10 py-8 flex items-center bg-black/80 backdrop-blur transition-all duration-300 ${
        scrolled ? "justify-center" : "justify-between"
      }`}
    >
      <h1
        className={`neon-text text-2xl transition-all duration-500 ease-in-out transform ${
          scrolled
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        &gt; Aoda
      </h1>
      <nav
        className={`space-x-6 text-secondary transition-all duration-500 ease-in-out transform ${
          scrolled ? "scale-105" : "scale-100"
        }`}
      >
        <a href={menuMappings.about.anchor} className="hover:underline">
          {menuMappings.about.label}
        </a>
        <a href={menuMappings.skill.anchor} className="hover:underline">
          {menuMappings.skill.label}
        </a>
        <a href={menuMappings.experience.anchor} className="hover:underline">
          {menuMappings.experience.label}
        </a>
        <a href={menuMappings.projects.anchor} className="hover:underline">
          {menuMappings.projects.label}
        </a>
        {
          <a href="#projects" className="px-6 hover:glow-border">
            Resume
          </a>
        }
      </nav>
    </header>
  );
};

export default Header;

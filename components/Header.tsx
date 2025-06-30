const Header = () => {
  return (
    <header className="w-full px-6 py-4 border-b border-[#333] flex justify-between items-center">
      <h1 className="neon-text text-2xl">&gt; Aoda.dev</h1>
      <nav className="space-x-4 text-[#00FFC6]">
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#experience" className="hover:underline">
          Experience
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header

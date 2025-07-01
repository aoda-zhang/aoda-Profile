const Header = () => {
  return (
    <header className="w-full px-10 py-8 flex justify-between items-center">
      <h1 className="neon-text text-2xl">&gt; Aoda</h1>
      <nav className="space-x-8 text-secondary">
        <a href="#about" className="hover:underline">
          01. About
        </a>
        <a href="#skills" className="hover:underline">
          02. Skills
        </a>
        <a href="#experience" className="hover:underline">
          03. Experience
        </a>
        {/* <a href="#projects" className="hover:underline">
          04. Projects
        </a> */}
        {/* <a href="#projects" className="px-6 hover:glow-border">
          Resume
        </a> */}
      </nav>
    </header>
  );
};

export default Header;

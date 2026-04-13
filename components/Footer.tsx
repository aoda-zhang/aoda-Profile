import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aodazhang666@email.com", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Aoda Zhang
        </p>
        <div className="flex items-center gap-4 text-zinc-400">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-600 transition"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

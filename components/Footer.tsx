import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aoda.zhang.work@gmail.com", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Aoda Zhang · Berlin
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target={s.name === "Email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label={s.name}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

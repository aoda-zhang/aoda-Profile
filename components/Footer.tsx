import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { name: "GitHub", href: "https://github.com/aoda-zhang", icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aodazhang", icon: FaLinkedin },
  { name: "Email", href: "mailto:aoda.zhang.work@gmail.com", icon: FaEnvelope },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule)] py-10 mt-8">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-ink-muted)]">
            © {new Date().getFullYear()} Aoda Zhang
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-dim)] transition-all"
                aria-label={s.name}
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

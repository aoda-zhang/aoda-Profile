"use client";

import extractEmail from "@/utils/getEmailFromEmailHref";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaDev,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aoda-zhang",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aodazhang",
    icon: <FaLinkedin />,
  },
  {
    name: "Medium",
    href: "https://medium.com/@aodazhang",
    icon: <FaMedium />,
  },
  {
    name: "Dev.to",
    href: "https://dev.to/aoda-zhang",
    icon: <FaDev />,
  },
  {
    name: "Email",
    href: "mailto:aodazhang666@email.com",
    icon: <FaEnvelope />,
  },
];

export default function SocialFloat() {
  return (
    <div className="fixed left-10 bottom-30 z-50 flex flex-col gap-6 text-text-secondary text-[20px]">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-transform hover:scale-125"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
      <div
        className="vertical-text cursor-copy mr-6"
        onClick={(e) =>
          navigator.clipboard.writeText(e.currentTarget.innerText)
        }
      >
        {extractEmail(socialLinks?.[socialLinks?.length - 1]?.href)}
      </div>
    </div>
  );
}

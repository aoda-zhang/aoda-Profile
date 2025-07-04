export const metadata = {
  title: "Aoda zhang Portfolio",
  description:
    "Full‑stack developer · Cybersecurity enthusiast · Open‑source contributor",
  keywords: [
    "Full‑stack",
    "Frontend developer",
    "Developer",
    "React",
    "Next.js",
    "Cyberpunk",
    "Portfolio",
  ],
  authors: [{ name: "Aoda", url: "https://aoda.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aoda.vercel.app",
    title: "Aoda – Hacker‑Style Portfolio",
    description: "Full‑stack developer & cyberpunk UI lover",
    images: [{ url: "/og-cover.png", width: 1200, height: 630 }],
  },
};

import SocialLinks from "@/components/SocialLinks";
import "../styles/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-background text-[#E0E0E0] font-mono">
      <body>
        {children}
        <SocialLinks />
      </body>
    </html>
  );
}

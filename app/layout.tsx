export const metadata = {
  title: "Aoda – Hacker‑Style Portfolio",
  description:
    "Full‑stack developer · Cybersecurity enthusiast · Open‑source contributor",
  keywords: [
    "Full‑stack",
    "Developer",
    "React",
    "Next.js",
    "Cyberpunk",
    "Portfolio",
  ],
  authors: [{ name: "Aoda", url: "https://aoda.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aoda.dev",
    title: "Aoda – Hacker‑Style Portfolio",
    description: "Full‑stack developer & cyberpunk UI lover",
    images: [{ url: "/og-cover.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aoda",
  },
};

import "../styles/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#0D0D0D] text-[#E0E0E0] font-mono">
      <body>{children}</body>
    </html>
  );
}

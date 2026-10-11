import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Aoda Zhang — Software Engineer | React, TypeScript & AI",
  description:
    "Aoda Zhang is a frontend-focused full-stack engineer with 9+ years of experience in React, TypeScript, frontend architecture, Node.js, and AI engineering.",
  keywords: [
    "Aoda Zhang",
    "Software Engineer",
    "Frontend Engineer",
    "Full-Stack Engineer",
    "React",
    "TypeScript",
    "Frontend Architecture",
    "Node.js",
    "AI Engineering",
  ],
  authors: [{ name: "Aoda Zhang", url: "https://aoda.vercel.app" }],
  openGraph: {
    title: "Aoda Zhang — Software Engineer",
    description:
      "Building thoughtful software across frontend architecture, full-stack systems, and AI engineering.",
    url: "https://aoda.vercel.app",
    siteName: "Aoda Zhang",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Aoda Zhang | Full-Stack Developer",
  description: "Full-stack developer with 8+ years of experience. Building web and mobile applications with React, Node.js, and TypeScript.",
  keywords: ["Aoda Zhang", "Full-stack Developer", "React", "TypeScript", "Node.js"],
  authors: [{ name: "Aoda Zhang", url: "https://aoda.vercel.app" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-zinc-50 text-zinc-900">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

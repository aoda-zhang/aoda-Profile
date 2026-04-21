import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Aoda Zhang — Full-Stack Developer",
  description:
    "Full-stack developer with 9+ years of experience building web and mobile applications with React, Node.js, and TypeScript.",
  keywords: [
    "Aoda Zhang",
    "Full-Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Aoda Zhang", url: "https://aoda.vercel.app" }],
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

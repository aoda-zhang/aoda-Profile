import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title text-center">About</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-3xl mx-auto">
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src="/assets/images/avatar.jpeg"
            alt="Aoda Avatar"
            fill
            className="rounded-full object-cover border border-zinc-200"
          />
        </div>
        
        <div className="text-zinc-600 leading-relaxed space-y-4 text-center md:text-left">
          <p>
            I discovered software development through web development, and ever since,
            I&apos;ve been passionate about all things JavaScript—from frontend to backend,
            mobile to desktop.
          </p>
          <p>
            I believe technology exists to serve humanity. Besides taking care of my newborn child,
            I dedicate most of my time to developing{" "}
            <a href="https://pawhaven-love.vercel.app" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline hover:no-underline">
              PawHaven
            </a>,
            an open-source platform for rescuing stray animals.
          </p>
          <p>
            My wife and I are both animal lovers. Through this platform, we hope to raise
            awareness of stray animal issues and help as many animals as possible find a warm home.
          </p>
        </div>
      </div>
    </section>
  );
}

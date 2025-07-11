import menuMappings from "@/constants/menuMappings";
import Image from "next/image";

const About = () => {
  return (
    <section
      id={menuMappings.about.id}
      className="mt-20 px-4 text-text-secondary"
    >
      <h2 className="text-secondary menu_title mb-20 text-center">
        {menuMappings.about.title}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <p>
            My journey in software development began in university in 2017, when
            I built my first website using basic HTML and CSS — an experience
            that sparked a deep passion for coding and digital creativity.
          </p>
          <p>
            Over the years, I’ve developed strong expertise across modern
            frontend, backend, and cross-platform technologies, including
            JavaScript, TypeScript, React, and Node.js. I’ve worked in both
            startups and large enterprises, gaining hands-on experience in agile
            development, scalable architecture, and system-level thinking.
            Today, I truly enjoy the end-to-end development process — from
            backend APIs to frontend interfaces — as it gives me a more holistic
            understanding of how great digital products are built and evolved.
          </p>
          <p>
            Currently, I work as a full-stack developer at a major international
            financial institution from Canada, collaborating with global teams
            to architect and build systems that support fund trading at scale.
          </p>
        </div>
        <div className="relative w-80 h-80 group cursor-pointer">
          <div className="animate-ring"></div>
          <Image
            src="/assets/images/avatar.jpeg"
            alt="Aoda Avatar"
            fill
            className="rounded-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

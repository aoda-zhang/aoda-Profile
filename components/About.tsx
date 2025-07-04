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
            My career began in college when I built my first website with basic
            HTML and CSS - an experience that sparked a lifelong passion for
            front-end technologies.
          </p>
          <p>
            Over the years, I have mastered modern front-end and cross-end
            development tools such as JavaScript, TypeScript, Redux, and Vite,
            and gradually expanded to back-end development. I have worked in
            startups and huge corporations, accumulating practical experience in
            agile iteration, scalable architecture, and system-level thinking,
            and excels in end-to-end development, from back-end APIs to
            intuitive user interfaces.
          </p>
          <p>
            Now, I work as a full-stack developer at a large international
            financial company from Canada, collaborating with global teams to
            contribute to the system architecture and development of fund
            transactions.
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

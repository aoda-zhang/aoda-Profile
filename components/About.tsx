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
            I am a senior front-end developer with over 8+ years of experience,
            focusing on building beautiful, responsive, user-friendly web
            applications.
          </p>
          <p>
            Having a background in working for large companies allows me to
            focus not only on functionality but also on scalability and
            maintainability when implementing UI. I am proficient in modern
            technologies such as strong HTML, CSS, React, TypeScript, NodeJS, etc.
          </p>
          <p>
            In my current role, I led the reconstruction of the fund transaction
            reporting system, improving the team&lsquo;s development efficiency by
            40%, and was responsible for communicating with the design
            department. I successfully integrated the front-end design token and
            reduced the number of front-end style bugs by 60%. I enjoy building
            systems from end to end and turning ideas into high-quality digital
            products.
          </p>
          <p>
            I am keen to explore new trends in the front end, and I am also
            happy to pass on my experience to more developers through blogs and
            sharing activities.
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

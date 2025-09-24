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
            I discovered software development through web development, and ever
            since, I’ve been passionate about all things web. I love JavaScript
            for its endless possibilities—frontend, backend, mobile, and desktop
            development.
          </p>
          <p>
            I believe technology exists to serve humanity and make the world a
            better place. Besides taking care of my newborn child, I dedicate
            most of my time to developing{" "}
            <a href="https://pawhaven-love.vercel.app">
              <strong>PawHaven</strong>
            </a>
            , an open-source platform for rescuing stray animals.
          </p>
          <p>
            My wife and I are both animal lovers. Through this platform, we hope
            to raise awareness of stray animal issues and help as many animals
            as possible find a warm home—they are just like our children.
          </p>
        </div>
        <div className="relative w-100 h-84 group">
          <div className="animate-ring"></div>
          <Image
            src="/assets/images/avatar.jpeg"
            alt="Aoda Avatar"
            fill
            className="rounded-full object-cover opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

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
            My coding journey started in 2017 at university with a simple HTML &
            CSS site — and I’ve been passionate about it ever since.
          </p>
          <p>
            Since then, I’ve worked across both startups and large enterprises,
            focusing on scalable architecture, API design, and user-friendly
            frontend interface. I enjoy building systems from end to end and
            turning ideas into high-quality digital products.
          </p>
          <p>
            Currently, I work at a huge international financial company from
            Canada, helping teams architect and deliver systems that support
            large-scale fund trading.
          </p>
          <p>Always learning. Always building.</p>
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

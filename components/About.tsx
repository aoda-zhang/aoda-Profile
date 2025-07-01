import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mt-20 px-4 text-text-secondary">
      <h2 className="text-secondary menu_title mb-20 text-center">
        / About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <p>
            My software development journey started as a web developer. Since
            2021, I have grown into a full-stack developer, focusing on the
            React, Node.js, and MongoDB technology stack.
          </p>
          <p>
            I really enjoy working on the entire application lifecycle from
            front-end to back-end, which has given me a deeper and more
            comprehensive understanding of software development...
          </p>
          <p>
            I have always been passionate about technical development work,
            which makes me feel that I am always at the forefront of this world.
          </p>
        </div>
        <div className="w-60 h-60 relative rounded-full shadow-lg border-4 border-primary neon-ring">
          <Image
            src="/assets/images/avatar.jpeg"
            alt="Aoda Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

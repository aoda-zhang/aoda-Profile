"use client";
import React, { FC, memo } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

import me from "@/public/images/me.webp";
import manulife from "@/public/images/manulife.svg";
import newegg from "@/public/images/newegg.svg";
import hucai from "@/public/images/hucai.png";
import SocialLink from "@/shared/components/SocialLink";

import styles from "./index.module.scss";

const ComponentOptions = [
  {
    icon: manulife,
    name: "Manulife",
    role: "Full-Stack Developer",
    workDate: "Aug 2022 - Present",
    componyHref: "https://www.manulife.com",
    description: (
      <div>
        As a member of the GWAM team, mainly responsible for developing and
        maintaining the fund trading platform in Southeast Asia. - Responsible
        for the front-end and back-end system design and code development of
        important modules.
        <br />
        - Responsible for monthly regression testing.
        <br />
        - Summarize and write detailed business documents and present them to
        the marking team.
        <br />
        - Support prod issue repair by emergency team.
        <br />
      </div>
    ),
    skills: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Nest.js",
      "MongoDB",
    ],
  },
  {
    icon: newegg,
    name: "Newegg",
    role: "Senior FrontEnd Developer",
    workDate: "Jun 2021 - Aug 2022",
    componyHref: "https://www.newegg.com/sellers",
    description: (
      <div>
        As a member of MKPL, mainly responsible for developing and maintaining
        Newegg’s merchant backend web site and mobile app (Newegg Seller) . -
        Based on qiankun, responsible for completing the micro-front-end
        architecture transformation of the old business.
        <br />- Lead the front-end engineering work of the react technology
        stack project team, including technology selection, directory structure
        formulation, development specifications, git submission specifications,
        UI interaction specifications, multi-language file specifications, etc.{" "}
        <br />
        - Promote the development of monthly technical meetings of the front-end
        team.
        <br />
        - Assist colleagues in other front-end technology stacks to carry out
        react-related work.
        <br />- Lead react native optimization of mobile terminal development
        and testing process.
      </div>
    ),
    skills: ["TypeScript", "React", "React Native", "SCSS", "Redux"],
  },
  {
    icon: hucai,
    name: "HuCais",
    role: "FrontEnd Developer",
    workDate: "Jul 2017 - Mar 2021",
    description: "",
    skills: ["JavaScript", "TypeScript", "React", "Vue", "Webpack", "SCSS"],
  },
];

const About: FC = () => {
  return (
    <div className={styles.about}>
      <div className={classNames([styles.profile, styles.line])}>
        <div className={styles.me}>
          <Image className={styles.img} src={me} alt={""} />
          <SocialLink />
        </div>

        <div className={styles.introduce}>
          <div className={styles.summary}>
            <p className={styles.title}>Hi there 👋 , I&#39;m Aoda.</p>
            <p>
              My software development journey started as a web developer. Since
              2021, I have grown into a full-stack developer, focusing on the
              React, Node.js, and MongoDB technology stack. I really enjoy
              working on the entire application lifecycle from front-end to
              back-end, which has given me a deeper and more comprehensive
              understanding of software development.
            </p>
            <p>
              Over the years, I&apos;ve had the opportunity to work in two large
              international corporations and worked in the architecture design
              and development of multiple far-reaching web and mobile projects.
            </p>
            <p>
              I have always been passionate about technical development work,
              which makes me feel that I am always at the forefront of this
              world.
            </p>
          </div>
          <div className={styles.keySkill}>
            <div className={styles.hightLight}>
              <span className={styles.number}>8+</span>
              <span>Years of experience</span>
            </div>
            <div className={styles.hightLight}>
              <span className={styles.number}>14+</span>
              <span>Technologies mastered</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames([styles.skills, styles.line])}>
        <p className={styles.boldText}>Skills</p>
        <div className={styles.skillItem}>
          <p className={styles.title}>Programming Languages</p>
          <p className={styles.text}>JavaScript, TypeScript, HTML5, CSS3</p>
        </div>
        <div className={styles.skillItem}>
          <p className={styles.title}>Libraries & Frameworks</p>
          <p className={styles.text}>
            FrontEnd: &nbsp;&nbsp;&nbsp;React, React Native, React-Query,
            React-Hook-Form, Vite, Zustand, Redux, Tailwind CSS, Next.js
            <br />
            BackEnd: &nbsp;&nbsp;&nbsp;Node.js, Express.js, Nest.js, MongoDB,
            MySQL
          </p>
        </div>
        <div className={styles.skillItem}>
          <p className={styles.title}>Tools</p>
          <p className={styles.text}>
            Git, GitHub, Netlify, Vercel, Docker, Azure, Webpack, Figma
          </p>
        </div>
      </div>

      <div className={classNames([styles.experience, styles.line])}>
        <p className={styles.boldText}>Experience</p>
        {ComponentOptions?.map(item => (
          <div className={styles.experienceItem} key={item?.name}>
            <div className={styles.left}>
              <Link
                href={item?.componyHref ?? ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.componyIcon}
                  src={item?.icon}
                  alt={""}
                />
              </Link>
            </div>
            <div className={styles.right}>
              <p
                className={styles.componyName}
              >{`${item?.role}  -  ${item?.name}`}</p>
              <p className={styles.role}>
                {item?.role}
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                {item?.workDate}
              </p>
              <div className={styles.role}>{item?.description}</div>
              <p>
                {item?.skills?.map(skill => (
                  <span key={skill} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.Hobby}>
        {/* Available for hire! */}
        {/* <p className={styles.boldText}>Hobby</p> */}
      </div>
    </div>
  );
};
export default memo(About);

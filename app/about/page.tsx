"use client";
import React, { FC, memo } from "react";
import Image from "next/image";
import classNames from "classnames";

import me from "@/public/images/me.webp";
import manulife from "@/public/images/manulife.svg";
import newegg from "@/public/images/newegg.svg";
import hucai from "@/public/images/hucai.png";
import reactEcoSystemDark from "@/public/images/reactEcosystemDark.png";
import reactEcoSystemLight from "@/public/images/reactEcosystemLight.png";
import SocialLink from "@/shared/components/SocialLink";
import globalStore from "@/store/globalStore";

import styles from "./index.module.scss";

const ComponentOptions = [
  {
    icon: manulife,
    name: "Manulife",
    role: "Full-Stack Developer",
    workDate: "Aug 2022 - Present",
    description: "",
  },
  {
    icon: newegg,
    name: "Newegg",
    role: "Senior FrontEnd Developer",
    workDate: "Jun 2021 - Aug 2022",
    description: "",
  },
  {
    icon: hucai,
    name: "HuCais",
    role: "FrontEnd Developer",
    workDate: "Jul 2017 - Mar 2021",
    description: "",
  },
];

const About: FC = () => {
  const isDarkMode = globalStore(state => state.isDarkMode);
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
        <Image
          className={styles.chart}
          src={isDarkMode ? reactEcoSystemDark : reactEcoSystemLight}
          alt={""}
        />
      </div>

      <div className={classNames([styles.experience, styles.line])}>
        <p className={styles.boldText}>Experience</p>
        {ComponentOptions?.map(item => (
          <div className={styles.experienceItem} key={item?.name}>
            <div className={styles.left}>
              <Image className={styles.componyIcon} src={item?.icon} alt={""} />
            </div>
            <div className={styles.right}>
              <p className={styles.componyName}>{item?.name}</p>
              <p className={styles.role}>
                {item?.role}
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                {item?.workDate}
              </p>
              <p>{item?.description}</p>
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

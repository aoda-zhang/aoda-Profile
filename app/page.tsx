"use client";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

import avatar from "@/public/images/avatar.jpeg";
import pageKeys from "@/constants/pageKey";

import styles from "./page.module.scss";

function Home() {
  const router = useRouter();
  return (
    <div className={styles.homeContent}>
      <Image
        className={styles.left}
        src={avatar}
        alt={""}
        onClick={() => {
          router.push(`/${pageKeys.about}`);
        }}
      />

      <div className={styles.right}>
        <p>
          <span>HI THERE! 👋</span>
          <span style={{ marginLeft: "10px" }}>I&#39;M</span>
        </p>
        <p className={classNames([styles.title, styles.hightLight])}>
          Aoda Zhang
        </p>
        <p className={classNames([styles.subTitle, styles.hightLight])}>
          Full Stack Software Developer
        </p>
        <p className={styles.content}>
          With 8+ years of experience, specializing in the MERN stack (MongoDB,
          NestJS, React, Node.js), I love turning ideas into high-quality
          applications with modern technologies.
        </p>
        <div className={styles.buttons}>
          {/* <span className={styles.button}>See My Project</span> */}
          <Link className={styles.button} href={`/${pageKeys.about}`}>
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

"use client";
import React, { FC, memo } from "react";
import Link from "next/link";

import blogRouters from "@/docs/frontend/router";
import pageKeys from "@/constants/pageKey";

import BlogCard from "./components/BlogCard";
import styles from "./index.module.scss";
const Blog: FC = () => {
  return (
    <div className={styles.blog}>
      {blogRouters?.map(item => (
        <Link
          href={`/${pageKeys.be}/${item?.postPath}`}
          className={styles.card}
          key={item?.postPath}
        >
          <BlogCard {...item} />
        </Link>
      ))}
    </div>
  );
};
export default memo(Blog);

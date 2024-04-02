import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { defaultImage } from "@/lib/constants";
import { formatDate } from "../../../util/formatDate";

function BlogCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
          src={post.img  || defaultImage}
            fill
            className={styles.img}
            alt=""
          />
        </div>
        <span className={styles.date}>{post.createdAt && formatDate(post.createdAt)}</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;

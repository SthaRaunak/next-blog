import Image from "next/image";
import styles from "./blogPostPage.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    { next: { revalidate: 3600 } }
  );
  return await res.json();
};

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20522238/pexels-photo-20522238/free-photo-of-wax-candles-and-branches-with-blossoms-in-vase-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/20522238/pexels-photo-20522238/free-photo-of-wax-candles-and-branches-with-blossoms-in-vase-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}

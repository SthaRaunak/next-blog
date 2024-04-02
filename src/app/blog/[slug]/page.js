import Image from "next/image";
import styles from "./blogPostPage.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/api";
import { defaultImage } from "@/lib/constants";
import { formatDate } from "../../../../util/formatDate";

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     { next: { revalidate: 3600 } }
//   );
//   return await res.json();
// };

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img || defaultImage}
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
       
          <Suspense fallback={<div>Loading</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{formatDate(post.createdAt)}</span>
          </div>
        </div>

        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

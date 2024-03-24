import styles from "@/app/blog/blog.module.css";
import BlogCard from "@/components/blogCard/BlogCard.jsx";
// import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest.js"), {ssr: false});

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return await res.json();
};

export default async function BlogPage() {
  // const a = Math.random();
  // console.log('Lets check where it works')
  const posts = await getData();
  return (
    <div className={styles.container}>
      {/* <HydrationTestNoSSR/> */}
      {/* <div suppressHydrationWarning>{a}</div> */}

      {posts.map((post) => (
        <div className={styles.blogCard} key={post.id}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}

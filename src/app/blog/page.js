import styles from "@/app/blog/blog.module.css";
import BlogCard from "@/components/blogCard/BlogCard.jsx";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.blogCard}>
        <BlogCard />
      </div>

      <div className={styles.blogCard}>
        <BlogCard />
      </div>

      <div className={styles.blogCard}>
        <BlogCard />
      </div>

      <div className={styles.blogCard}>
        <BlogCard />
      </div>

      <div className={styles.blogCard}>
        <BlogCard />
      </div>
    </div>
  );
}

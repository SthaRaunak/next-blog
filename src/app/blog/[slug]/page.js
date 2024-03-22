import Image from "next/image";
import styles from "./blogPostPage.module.css";

export default function BlogPostPage() {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/20522238/pexels-photo-20522238/free-photo-of-wax-candles-and-branches-with-blossoms-in-vase-on-table.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Raunak Shrestha</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iusto repudiandae harum, itaque ducimus eaque praesentium quaerat iste
          fugiat quia doloremque quas enim explicabo nulla? Provident laudantium
          debitis, explicabo ea error doloremque. Amet rerum earum accusamus
          molestiae quia dicta sit, illo, at totam, corporis aliquid dolores et
          laudantium praesentium optio?
        </div>
      </div>
    </div>
  );
}

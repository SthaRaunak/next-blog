import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Unlocking my creativity, one post at a time.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id fuga
          repellendus nihil soluta culpa at iste officia ut odit repellat porro
          animi obcaecati doloremque laudan modi?
        </p> 
        <div className={styles.buttons}>
          <button>Learn More</button>
          <button>Contact</button>
        </div>
        <div className={styles.brands}>
            <Image src="/brands.png" alt="Brands Logos" fill/>
        </div>
      </div>
    </div>
  );
}

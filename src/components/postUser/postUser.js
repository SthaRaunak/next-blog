import { getUser } from "@/lib/api";
import styles from "./postUser.module.css";
import Image from "next/image";
import { defaultImage } from "@/lib/constants";

// const getData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong while fetching data");
//   }
//   return res.json();
// };

export default async function PostUser({ userId }) {
  // const user = await getData(userId);
  const user = await getUser(userId);
  const { username, avatar } = user;
  return (
    <div className={styles.container}>
      <Image
        src={avatar || defaultImage}
        alt=""
        className={styles.avatar}
        width={50}
        height={50}
      />

      <div className={styles.textContainer}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{username || "Unknown"}</span>
      </div>
    </div>
  );
}

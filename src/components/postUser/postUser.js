import styles from "./postUser.module.css";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong while fetching data");
  }
  return res.json();
};

export default async function PostUser({ userId }) {
  const user = await getData(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
}

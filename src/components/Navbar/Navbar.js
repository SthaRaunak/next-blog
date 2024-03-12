import NavLinks from "./NavLinks";
import Link from "next/link";
import styles from "./navbar.module.css";
 

export default function Navbar() {
  return (
    <div className={`${styles.container}`}>
      <Link href="/" className={styles.logo}>
        Blog
      </Link>
      <NavLinks />
    </div>
  );
}

"use client";

import Link from "next/link";
import styles from "./navlinks.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const admin = true;
const loggedIn = true;

export default function NavLinks() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navLinks}>
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}
        {loggedIn ? (
          <>
            {admin && <NavLink link={{ name: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ name: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={handleOpen}>
        Menu
      </button>
      {open && (
        <div className={`${styles.mobileLinks} ${open && styles.open}`}>
          {links.map((link) => (
            <NavLink link={link} key={link.name} />
          ))}
        </div>
      )}
    </div>
  );
}

function NavLink({ link }) {
  const pathname = usePathname();
  return (
    <Link
      href={link.path}
      className={`${styles.link} ${pathname === link.path && styles.active}`}
    >
      {link.name}
    </Link>
  );
}

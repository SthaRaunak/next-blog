import NavLinks from "./NavLinks";
import styles from "./navbar.module.css"



export default function Navbar() {
    return(
        <div className={`${styles.container}`}>
            <div className={styles.logo}>Blog</div>

                <NavLinks/>
        </div>
    )
}
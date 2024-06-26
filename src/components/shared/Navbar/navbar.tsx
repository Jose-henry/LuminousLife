import Link from "next/link";
import styles from "./navbar.module.css"; // Import CSS module

const NavBar: React.FC = () => {
    return (
        <div className={styles.main_container}>
            <Link href="/home" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/team" className={styles.link}>Team</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
    );
}

export default NavBar;

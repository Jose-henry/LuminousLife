"use client";
import Link from "next/link";
import styles from "./button.module.css"; // Import CSS module

interface Props {
    btnText: string;
}

const StyledButton: React.FC<Props> = ({ btnText }) => {
    return (
        <div>
            <Link href="/donate" target="_blank" rel="noopener noreferrer" className={styles.a}>
                <button className={`${styles.btn} ${styles.btn1}`}>{btnText}</button>
                <button className={`${styles.btn} ${styles.btn2}`}></button>
                <button className={`${styles.btn} ${styles.btn3}`}></button>
            </Link>
        </div>
    );
}

export default StyledButton;

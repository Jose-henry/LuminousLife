'use client';
import Image from "next/image";
import styles from "./topBar.module.css"; // Import CSS module
import NavBar from "@/components/shared/Navbar/navbar";
import Link from "next/link";

const Topbar: React.FC = () => {
    return (
        <div className={styles.topbarContainer}>
            <Link href="/">
            <div className={styles.logoContainer}>
                
                <Image
                    src="/assets/removed.svg"
                    width={170}
                    height={170}
                    quality={100}
                    alt="Logo icon"
                />
                
            </div>
            </Link>
            <NavBar/>
        </div>
    );
}

export default Topbar;

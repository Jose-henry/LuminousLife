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
                    src="/assets/logo.svg"
                    width={40}
                    height={40}
                    alt="Logo icon"
                />
                <h3 className={`${styles.logoText} hidden sm:block`}>
                    Luminous Life Foundation
                </h3>
                
            </div>
            </Link>
            <NavBar/>
        </div>
    );
}

export default Topbar;

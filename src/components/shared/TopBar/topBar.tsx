import Image from "next/image";
import styles from "./topBar.module.css"; // Import CSS module
import NavBar from "@/components/shared/Navbar/navbar";

const Topbar: React.FC = () => {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.logoContainer}>
                <Image
                    src="/assets/logo.svg"
                    width={40}
                    height={40}
                    alt="Logo icon"
                />
                <h3 className={styles.logoText}>
                    Luminous Life Foundation
                </h3>
            </div>
            <NavBar/>
        </div>
    );
}

export default Topbar;

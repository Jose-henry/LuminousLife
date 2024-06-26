
import Image from "next/image";
import styles from "./large.module.css"; // Import CSS module

const Large: React.FC = () => {
    return (
        <Image src="/assets/apply2.svg" width={1008} height={800} alt="House" className={styles.large}></Image>
    );
}

export default Large;

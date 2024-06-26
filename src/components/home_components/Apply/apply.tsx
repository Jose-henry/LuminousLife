import Link from "next/link";
import styles from "./apply.module.css"; // Import CSS module
import Image from "next/image";
import StyledButton from "@/components/Button/button";

const Apply: React.FC = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.wrapper}>
                <div className={styles.applyText}>
                    <div>
                        <h2 className={styles.become}>Become a Member</h2>
                        <p className={styles.form}>We’re excited to have you join our team at Luminous Life Foundation! To volunteer, click the button below and fill out the volunteer application form.</p>
                    </div>
                    <Link className={styles.applyBtn} href="/volunteer">
                        <StyledButton btnText="Volunteer Now"/>
                    </Link>
                </div>
                <Image src="/assets/apply-img.svg" alt="Black" width={310} height={320}></Image>
            </div>
            <Image src="/assets/apply2.svg" width={1100} height={900} alt="House" className={styles.extra}></Image>
        </div>
    );
}

export default Apply;

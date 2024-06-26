import Link from "next/link";
import styles from "./apply.module.css"; // Import CSS module
import Image from "next/image";

const Apply: React.FC = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.wrapper}>
                <div className={styles.applyText}>
                    <div>
                        <h2>Become a Member</h2>
                        <p>We’re excited to have you join our team! Click the button below to fill out the volunteer application form.</p>
                    </div>
                    <Link className={styles.applyBtn} href="">
                        Volunteer Now
                    </Link>
                </div>
                <Image src="/assets/apply-img.svg" alt="Black" width={310} height={320}></Image>
            </div>
        </div>
    );
}

export default Apply;

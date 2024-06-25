import Image from "next/image";
import styles from "./about.module.css"; // Import CSS module

const About: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main_container}>
                <div className={styles.div1}>
                    <div className={styles.div2}>
                        <h2 className={styles.text1}>Who we are</h2>
                        <p className={styles.text2}>At The Light and Hope Initiative, we focus on delivering solar energy solutions to rural communities.</p>
                        <p className={styles.text5}>Our goal is to provide sustainable, renewable energy that empowers people, improves their quality of life, and fosters environmental stewardship.</p>
                    </div>
                    <div className={styles.div3}>
                        <h2 className={styles.text3}>Get to Know Us</h2>
                        <p className={styles.text4}>Discover how we started and the journey that drives our mission to light up lives with solar energy.</p>
                        <div className={styles.overlay}></div>
                    </div>
                </div>
                <Image src="/assets/slant1.svg" alt="Slant image" width={430} height={240} className={styles.slant}></Image>
                </div>
        </div>
    );
}

export default About;

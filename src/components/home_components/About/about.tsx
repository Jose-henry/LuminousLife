"use client";
import Image from "next/image";
import styles from "./about.module.css"; // Import CSS module
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const About: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    return (
       <div
        className={styles.wrapper}>
            <div className={styles.main_container}>
                <div className={styles.div1}>
                    <div className={styles.div2}>
                        <h2 className={styles.text1}>Who we are</h2>
                        <p className={styles.text2}>At Luminous Life Foundation, we focus on delivering solar energy solutions to rural communities.</p>
                        <p className={styles.text5}>Our goal is to provide sustainable, renewable energy that empowers people, improves their quality of life, and fosters environmental stewardship.</p>
                    </div>
                    <div className={`${styles.div3}`}>
                        <div className={styles.arrow_div}>
                            <h2 className={styles.text3}>Get to Know Us</h2>
                            <Link href="/about" className={styles.arrow}>
                                <Image src="/assets/arrow1.svg" alt="Arrow icon" height={40} width={40} className={styles.arrowImg}></Image>
                            </Link>
                        </div>
                        <p className={styles.text4}>Discover how we started and the journey that drives our mission to light up lives with solar energy.</p>
                        <div className={styles.overlay}></div>
                    </div>
                </div>
                <Image src="/assets/solar.svg" alt="Solar Image" width={430} height={240} className={styles.extraImg}></Image>
            </div>
        </div>
    );
}

export default About;

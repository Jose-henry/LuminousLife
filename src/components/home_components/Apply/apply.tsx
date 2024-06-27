"use client";
import Link from "next/link";
import styles from "./apply.module.css"; // Import CSS module
import Image from "next/image";
import StyledButton from "@/components/Button/button";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const Apply: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
    return (
        <motion.div 
        ref={ref} 
        style={{ 
            scale: scaleProgress,
            opacity: opacityProgress,
        }} 
         className={styles.main_container}>
            <div className={styles.wrapper}>
                <div className={styles.applyText}>
                    <div>
                        <h2 className={styles.become}>Become a Member</h2>
                        <p className={styles.form}>We’re excited to have you join our team at Luminous Life Foundation! The more the merrier! To volunteer, click the button below and fill out the volunteer application form. Together, we can light up the dark places!</p>
                    </div>
                    <Link className={styles.applyBtn} href="/volunteer">
                        <StyledButton btnText="Volunteer Now"/>
                    </Link>
                </div>
                <Image src="/assets/apply-img.svg" alt="Black" width={310} height={320} className={styles.applyImg2}></Image>
            </div>
        </motion.div>
    );
}

export default Apply;

'use client';
import Image from "next/image";
import styles from "./mission.module.css"; // Import CSS module
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";


const Mission: React.FC = () => {
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
                <div className={styles.mission_div}>
                    <h2 className={styles.mission_text}>Our Mission</h2>
                    <p className={styles.mission_statement}>Empowering underserved communities in Nigeria through sustainable energy solutions and fostering overall well-being</p>
                </div>
                <div className={styles.value_div}>
                    <h2 className={styles.value_text}>Our Values</h2>
                    <div className={styles.values_wrapper}> 
                        <div className={styles.value_div1}>
                            <div className={styles.value1_div}>
                                <Image src="/assets/equity.svg" alt="equity" width={24} height={24}></Image>
                                <p className={`${styles.value1}`}>Equity</p>
                            </div>
                            <div className={styles.value2_div}>
                                <Image src="/assets/empowerment.svg" alt="empowerment" width={24} height={24}></Image>
                                <p className={styles.value2}>Empowerment</p>
                            </div>
                        </div>
                        <div className={styles.value_div2}>
                            <div className={styles.value3_div}>
                                <div className={styles.extra}>
                                    <Image src="/assets/transparency.svg" alt="Transparency" width={24} height={24}></Image>
                                    <p className={styles.value3}>Transparency and Accountability</p>
                                </div>
                            </div>
                            <div className={styles.value4_div}>
                                <Image src="/assets/sustainability.svg" alt="sustainability" width={24} height={24}></Image>
                                <p className={styles.value4}>Sustainbility</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Mission;

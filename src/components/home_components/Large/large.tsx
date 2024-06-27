"use client";
import Image from "next/image";
import styles from "./large.module.css"; // Import CSS module
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";


const Large: React.FC = () => {
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
        }} >
        <Image src="/assets/apply2.svg" width={1008} height={800} alt="House" className={styles.large}></Image>
        </motion.div>
    );
}

export default Large;

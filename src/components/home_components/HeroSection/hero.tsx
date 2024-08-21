"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        setAnimateHeader(true); // Trigger header slide-in
    }, []);

    return (
        <div className={`${styles.heroContainer}`}>
            <div className={styles.overlay}></div>
            <div className={styles.main}>
                <h1 className={`${animateHeader ? styles.slideIn : ""}`}>
                    Empowering Communities with Solar Energy.
                </h1>
                <Link href="/about" className={styles.link}>LEARN MORE ABOUT US</Link>
                <p className={`bg-[white] p-3 relative z-20`}>Harnessing the power of the sun to light up lives. At Luminous Life Foundation, we are dedicated to driving sustainable solar solutions, bringing reliable electricity to communities, and fostering a brighter, self-sufficient future.</p>
                <div className={`bg-[#ffe76a;] border-t-[4px] border-t-[white] h-[40px] flex items-center pl-[60px] relative ${styles.motto}`}>
                    <div className="w-[50px] h-[3px] bg-[#622D25] absolute left-0"></div>
                    <p className="text-[#402a23] font-bold"> <span className="font-bold">MOTTO: </span>Lighting up the dark places!</p>
                </div>
            </div>
            <div className={`${styles.bgImg}`}>
                <Image
                    src="/assets/bg2.jpg"
                    alt="Background"
                    fill
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>
        </div>
    );
};

export default Hero;

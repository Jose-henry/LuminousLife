"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const Hero: React.FC = () => {

    return (
        <div className={`${styles.heroContainer}`}>
            <div className={styles.overlay}></div>
            <div className={styles.mainDiv}>
                <h1 className="font-bold text-white text-[80px] relative z-20 text-center">Empowering Communities with Solar Energy!</h1>
                <p className={styles.text}>
                Harnessing the power of the sun to light up lives. At Luminous Life Foundation, we are dedicated to driving sustainable solar solutions, bringing reliable electricity to communities, and fostering a brighter, self-sufficient future.</p>
                <Link href="/about"><button className="bg-[#ffc93c] text-[16px] font-bold text-black rounded-[2px] block m-auto px-[50px] py-4 mt-5 relative z-20">LEARN MORE ABOUT US</button></Link>
            </div>
        </div>
    );
};

export default Hero;

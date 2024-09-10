"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

const Hero: React.FC = () => {

    return (
        <div className={`${styles.heroContainer}`}>
            <div className={styles.mainDiv}>
                <h1 className="font-bold text-brown-950 text-[80px] relative z-20 text-center">Empowering Communities with Solar Energy.</h1>
                <p className={styles.text}>
                Harnessing the power of the sun to light up lives. At Luminous Life Foundation, we are dedicated to driving sustainable solar solutions, bringing reliable electricity to communities, and fostering a brighter, self-sufficient future.</p>
                <Link href="/about"><button className="bg-[#402a23] text-[14px] font-bold text-white rounded-[2px] block m-auto px-[80px] py-3 mt-5">LEARN MORE ABOUT US</button></Link>
            </div>
        </div>
    );
};

export default Hero;

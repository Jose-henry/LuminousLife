"use client";
import Image from 'next/image';
import styles from './mission.module.css'
import Link from 'next/link';

export default function Mission() {

  return (
    <div className={`relative w-full ${styles.div1}`}>
        <div className={styles.wrapper}>
            <div className={styles.overlay}></div>
            <div>
                <h2>Our Mission Satement</h2>
                <p>Our mission is to provide reliable, clean, and affordable energy to unserved & underserved communities, fostering socio-economic development and enhancing quality of life.</p>
            </div>
            <div className={styles.vision}>
                <h2>Our Vision</h2>
                <p>Our vision is to build a Nigeria where everyone, regardless of socio-economic class, has access to clean, consistent, and reliable energy.</p>
            </div>
        </div>
    </div>
    );
}

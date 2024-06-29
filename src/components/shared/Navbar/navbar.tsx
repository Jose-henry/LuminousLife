"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import CSS module
import Image from "next/image";

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 450);
    };

    useEffect(() => {
        updateMedia(); // Check initial window size
        window.addEventListener("resize", updateMedia); // Add event listener

        return () => window.removeEventListener("resize", updateMedia); // Clean up event listener
    }, []);

    return (
        <div className={styles.main_container}>
            <div className={styles.theLinks}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/projects" className={styles.link}>Projects</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
            {isMobile && (
                <div>
                    <div className="flex items-center">
                        <Image
                            src="/assets/menu-icon.svg"
                            alt="menu icon"
                            width={20}
                            height={20}
                            className={styles.menu}
                            style={{ display: menuOpen ? 'none' : 'block' }}
                            onClick={toggleMenu}
                        />
                        <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/multiply.png"
                            alt="multiply"
                            className={styles.close}
                            style={{ display: menuOpen ? 'block' : 'none' }}
                            onClick={toggleMenu}
                        />
                    </div>
                    <div className={`${styles.small} ${menuOpen ? styles.show : ''}`}>
                        <div className={styles.design}>
                            <Link href="/" className={styles._link}>Home</Link>
                            <Link href="/">
                                <img width="13" height="13" src="https://img.icons8.com/fluency-systems-filled/48/622d25/circled-right.png" alt="circled-right"/>
                            </Link>
                        </div>
                        <div className={styles.design}>
                            <Link href="/about" className={styles._link}>About</Link>
                            <Link href="/about">
                                <img width="13" height="13" src="https://img.icons8.com/fluency-systems-filled/48/622d25/circled-right.png" alt="circled-right"/>
                            </Link>
                        </div>
                        <div className={styles.design}>
                            <Link href="/projects" className={styles._link}>Projects</Link>
                            <Link href="/projecs">
                                <img width="13" height="13" src="https://img.icons8.com/fluency-systems-filled/48/622d25/circled-right.png" alt="circled-right"/>
                            </Link>
                        </div>
                        <div className={styles.design}>
                            <Link href="/contact" className={styles._link}>Contact</Link>
                            <Link href="/contact">
                                <img width="13" height="13" src="https://img.icons8.com/fluency-systems-filled/48/622d25/circled-right.png" alt="circled-right"/>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;

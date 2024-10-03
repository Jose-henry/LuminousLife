"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./navbar.module.css"; // Import CSS module
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false); // Add state for pop-up visibility
    const menuRef = useRef<HTMLDivElement>(null); // Ref to track the menu
    const pathname = usePathname(); // Get current path

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 800);
    };

    useEffect(() => {
        updateMedia(); // Check initial window size
        window.addEventListener("resize", updateMedia); // Add event listener

        return () => window.removeEventListener("resize", updateMedia); // Clean up event listener
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false); // Close the menu if clicking outside
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
        };
    }, [menuOpen]);

    const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/about") {
            e.preventDefault(); // Prevent default link behavior
            const donateElement = document.getElementById("donate-section");
            if (donateElement) {
                donateElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleFlagClick = () => {
        setPopupVisible(true); // Show the pop-up
    };

    const handleCloseClick = () => {
        setPopupVisible(false); // Hide the pop-up
    };

    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu
    };

    // Function to check if a link is active
    const isActiveLink = (href: string) => pathname === href;

    return (
        <div className={styles.main_container}>
            {popupVisible && (
                <div className={`${styles.popUp} ${styles.slideIn}`}>
                    <div className="mb-2 flex items-center justify-between">
                        <p className={styles.p1}>Proudly Nigerian!</p>
                        <Image
                            src="/assets/white_close.svg"
                            width={20}
                            height={20}
                            alt="Close"
                            className="cursor-pointer"
                            onClick={handleCloseClick} // Add onClick to close the pop-up
                        />
                    </div>
                    <p className={styles.p2}>
                        We are a proud Nigerian-based NGO, dedicated to empowering rural communities with solar energy. We believe in the future of Nigeria and are committed to creating a brighter and more prosperous future for our beloved country.
                    </p>
                </div>
            )}
            <div className={styles.theLinks}>
                <Link href="/" className={`${styles.link} ${isActiveLink("/") ? styles.active : ""}`}>HOME</Link>
                <Link href="/about" className={`${styles.link} ${isActiveLink("/about") ? styles.active : ""}`}>ABOUT</Link>
                <Link href="/team" className={`${styles.link} ${isActiveLink("/team") ? styles.active : ""}`}>TEAMS</Link>
                <Link href="/projects" className={`${styles.link} ${isActiveLink("/projects") ? styles.active : ""}`}>PROJECTS</Link>
                <Link href="/contact" className={`${styles.link} ${isActiveLink("/contact") ? styles.active : ""}`}>CONTACT</Link>
                <Link href="/about#donate" className={styles.donate} onClick={handleDonateClick}>DONATE</Link>
                <div className="w-[30px] h-[30px] rounded-full relative overflow-hidden cursor-pointer border-[2px] border-[#2c786c]" onClick={handleFlagClick}>
                    <Image src="/assets/ng.svg" alt="Flag" quality={100} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                </div>
            </div>
            {isMobile && (
                <div ref={menuRef}>
                    <div className="flex items-center">
                        <Image
                            src="/assets/menu.svg"
                            alt="menu icon"
                            width={25}
                            height={25}
                            className={styles.menu}
                            style={{ display: menuOpen ? "none" : "block" }}
                            onClick={toggleMenu}
                        />
                        <Image
                            width="25"
                            height="25"
                            src="/assets/close.svg"
                            alt="multiply"
                            className={styles.close}
                            style={{ display: menuOpen ? "block" : "none" }}
                            onClick={toggleMenu}
                        />
                    </div>
                    <div className={`${styles.small} ${menuOpen ? styles.show : ""}`}>
                        <div className="w-[30px] h-[30px] rounded-full relative ml-auto overflow-hidden shadow-md active:shadow-none cursor-pointer border-[1.5px] border-[#393e46]" onClick={handleFlagClick}>
                            <Image src="/assets/ng.svg" alt="Flag" quality={100} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                        </div>
                        <Link href="/" className={`${styles.design} border-t-[1px] border-t-[#ececec]`} onClick={handleLinkClick}>
                            <Link href="/" className={`${styles._link} ${isActiveLink("/") ? styles.active : ""}`}>HOME</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13} />
                        </Link>
                        <Link href="/about" className={styles.design} onClick={handleLinkClick}>
                            <Link href="/about" className={`${styles._link} ${isActiveLink("/about") ? styles.active : ""}`}>ABOUT</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13} />
                        </Link>
                        <Link href="/team" className={styles.design} onClick={handleLinkClick}>
                            <Link href="/team" className={`${styles._link} ${isActiveLink("/team") ? styles.active : ""}`}>TEAMS</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13} />
                        </Link>
                        <Link href="/projects" className={styles.design} onClick={handleLinkClick}>
                            <Link href="/projects" className={`${styles._link} ${isActiveLink("/projects") ? styles.active : ""}`}>PROJECTS</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13} />
                        </Link>
                        <Link href="/contact" className={styles.design} onClick={handleLinkClick}>
                            <Link href="/contact" className={`${styles._link} ${isActiveLink("/contact") ? styles.active : ""}`}>CONTACT</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13} />
                        </Link>
                        <Link
                            href="/about#donate"
                            onClick={(e) => {
                                handleDonateClick(e);
                                handleLinkClick();
                            }}
                            className={styles.design}
                        >
                            <Link href="/about#donate" className={`${styles._link} ${isActiveLink("/about#donate") ? styles.active : ""}`}>DONATE</Link>
                            <Image src="/assets/move.svg" alt="Go icon" height={13} width={13} />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;

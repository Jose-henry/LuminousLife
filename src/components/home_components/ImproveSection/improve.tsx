"use client";
import styles from './improve.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Improve() {

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/contact") {
            e.preventDefault(); // Prevent default link behavior
            const donateElement = document.getElementById("contact-section");
            if (donateElement) {
                donateElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

  return (
    <div className={`relative w-full pt-[80px] pb-[80px] ${styles.main_container}`}>
        <div className={styles.wrapper}>
            <div className={styles.textDiv}>
                <h2>Help Us Improve!</h2>
                <p>We value your input! Your feedback is crucial in helping us enhance our efforts and make a greater impact. Please take a moment to share your thoughts, suggestions, or any areas where we can do better. Together, we can light up more lives!</p>
                <Link href="/contact#contact" className={styles.link} onClick={handleContactClick}>Give Your Input</Link>
            </div>
            <div className={styles.loveDiv}>
                <div className={styles.love}>
                    <Image src="/assets/love1.jpg" alt="Love" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
                </div>
                <div className={`${styles.love} ${styles.love2}`}>
                    <Image src="/assets/love2.jpg" alt="Love" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
                </div>
                <div className={styles.love}>
                    <Image src="/assets/love3.jpg" alt="Love" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
                </div>
            </div>
        </div>
    </div>
  );
}

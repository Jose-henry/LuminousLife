"use client"
import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';

export default function About() {

    const handleStoryClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/about") {
            e.preventDefault(); // Prevent default link behavior
            const storyElement = document.getElementById("our-story");
            if (storyElement) {
                storyElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

  return (
    <div className={styles.main_container}>
        <div className={styles.div1}>
            <h2>Who We Are</h2>
            <p>The Luminous Life Foundation is a non-profit organization founded in March 2024, established with the vision of harnessing Renewable Energy to ensure that every individual, regardless of their socio-economic status, has universal energy access.
            Founded by Favour Oguibe and his college course mates David OJ and Nelson Elijah, our mission goes beyond merely delivering power. We aim to foster an environment where renewable energy becomes a stepping stone to improving the quality of life for all residents of underserved & unserved communities.
            </p>
        </div>

        <div className={styles.styleDiv}>
            <div className={`${styles.imageDiv} ${styles.image1}`}>
                <Image src="/assets/real2.JPG" alt="Yellow" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className={styles.imageDiv}>
                <Image src="/assets/real3.JPG" alt="Yellow" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} />
            </div>
            <div className={styles.get}>
                <div className={styles._div}>
                    <h2>Get to Know Us</h2>
                    <p>Discover more about the Luminous Life Foundation, who we are, how we started and the vision that drives our mission</p>
                    <Link href="/about" className={styles.link}>About Us</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

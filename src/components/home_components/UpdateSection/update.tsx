"use client";
import Image from 'next/image';
import styles from './update.module.css';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Update() {
  return (
    <div className="relative w-full pb-[100px] bg-[#ffde74] border">
        <h2 className={styles.text}>
            <Typewriter
            options={{
            strings: ['Keeping up with Solar!!!'],
            autoStart: true,
            loop: true,
            }}
            />
        </h2>
      <div className={styles.wrapper}>
        <h2>Stay updated with posts from our team!</h2>
        <div className={styles.postDiv}>

          <div>
              <div className={styles.div}>
                <Image src="/assets/post1.jpg" alt="Post" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
              </div>
              <h3>INSTAGRAM POST</h3>
              <p>This post highlights some key info regarding electricity.</p>
              <Link href="https://www.instagram.com/p/C7zu9fjNVFY/?igsh=bm96M2x5c20xejJ6" className={styles.link}>View Post</Link>
          </div>

          <div>
            <div className={`${styles.div} ${styles.pop}`}>
                <Image src="/assets/post2.jpg" alt="Post" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
              </div>
              <h3>LINKEDIN POST</h3>
              <p>Did you know? There are currently 28 power generating plants connected to the national grid, of which 25 are gas-fired plants...</p>
              <Link href="https://www.linkedin.com/posts/favour-oguibe-0a4081195_did-you-know-there-are-currently-28-activity-7109549264250310656-5wAy?utm_source=share&utm_medium=member_ios" className={styles.link}>Read More</Link>
          </div>

          <div>
            <div className={styles.div}>
                <Image src="/assets/post3.jpg" alt="Post" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
              </div>
              <h3>YOUTUBE VIDEO</h3>
              <p>Our first youtube video!</p>
              <Link href="https://youtube.com/shorts/2vsJfwSK97o?si=zzsyxttOjnAJ6owH" className={styles.link}>Watch Video</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

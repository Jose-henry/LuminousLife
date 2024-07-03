import PageText2 from "@/components/PageText/pageText2";
import styles from './improve.module.css'
import Link from "next/link";
import Image from "next/image";

export default function Improve() {
  return (
    <div className="relative w-full pt-[80px] pb-[80px]">
        <div className={styles.wrapper}>
            <div className={styles.textDiv}>
                <h2>Help Us Improve!</h2>
                <p>We value your input! Your feedback is crucial in helping us enhance our efforts and make a greater impact. Please take a moment to share your thoughts, suggestions, or any areas where we can do better. Together, we can light up more lives!</p>
                <Link href="/contact" className={styles.link}>Give Your Input</Link>
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

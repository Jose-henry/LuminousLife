"use client";
import Image from 'next/image';
import styles from './contribute.module.css';
import Link from 'next/link';
export default function Contribute() {

    const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (window.location.pathname === "/about") {
            e.preventDefault(); // Prevent default link behavior
            const donateElement = document.getElementById("donate-section");
            if (donateElement) {
                donateElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    
  return (
    <div className={`relative w-full ${styles.main_container}`}>
        <div className={styles.wrapper}>
            <div className={styles.intro}>
                <h2>Together, we can light up the dark places</h2>
            </div>
            <div className={styles.picDiv}>
                <div className={styles.textDiv}>
                        <div>
                            <Image src="/assets/bulb.jpg" alt="Logo" height={50} width={50} className='mx-auto'></Image>
                            <h3>Change starts with me and you!</h3>
                            <p>With just a 2000 naira, you can make a life-changing difference:</p>
                        </div>
                        <ul className='list-inside w-[95%] m-auto text-[15px] leading-loose flex flex-col gap-2 text-[#402a23] text-center max-w-[480px]'>
                            <li>Transition a family from costly and unhealthy kerosene lamps to sustainable and reliable solar lanterns.</li>
                            <li>Ensure students can read and complete their homework every night without interruption.</li>
                            <li>Ensure young children can sleep without poisonous kerosene fumes affecting them</li>
                        </ul>
                        <div className={styles.linkDiv}>
                            <Link href="/about#donate" className={styles.link} onClick={handleDonateClick}>Donate</Link>
                            <Link href="https://forms.gle/xzP3CLSgd9cAS2EQ9" className={styles.link}>Volunteer</Link>
                        </div>
                        <p>A single donation is worth more than you can imagine!</p>
                </div>
                <div className={styles.ImgDiv}>
                    <Image src="/assets/real6.JPG" alt="Lamp" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
                </div>
            </div>
        </div>
    </div>
  );
}

import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';
import Yellow1 from '@/assets/yellow.jpg'
import Yellow2 from '@/assets/yellow2.jpg'
import Wheat from '@/assets/wheat.jpg'

export default function About() {
  return (
    <div className={styles.main_container}>
        <div className={styles.div1}>
            <h2>Who We Are</h2>
            <p>At Luminous Life Foundation, we focus on delivering solar energy solutions to rural communities</p>
            <p>Our goal is to provide sustainable, renewable energy that empowers people, improves their quality of life, and fosters environmental stewardship.</p>
        </div>

        <div className={styles.styleDiv}>
            <div className={styles.imageDiv}>
                <Image src={Yellow1} alt="Yellow" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}  placeholder='blur'/>
            </div>
            <div className={styles.imageDiv}>
                <Image src={Yellow2}alt="Yellow" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} placeholder='blur' />
            </div>
            <div className={styles.get}>
                <div className={styles._div}>
                    <h2>Get to Know Us</h2>
                    <p>Discover how we started and the journey that drives our mission to light up lives with solar energy.</p>
                    <Link href="/about" className={styles.link}>About Us</Link>
                </div>
                <div className={styles.div2}>
                    <Link href="/story" className={styles.story_div}>
                        <p className={styles.story}>Know Our Story</p>
                        <Image src="/assets/discover.svg" alt="Arrow" width={30} height={20}></Image>
                    </Link>
                    <Image src={Wheat} alt="Wheat field" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}} placeholder='blur' />
                </div>
            </div>
        </div>
    </div>
  );
}

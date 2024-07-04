
"use client";
import Link from 'next/link';
import styles from './project.module.css';
import Image from 'next/image';
import Blackout from '@/assets/blackout.jpg';
import Teach from '@/assets/teach.jpg';
import Pretty from '@/assets/pretty.jpg';

export default function Project() {
  return (
      <div className={styles.main_container}>
        <div className={styles.line}>

        </div>
        <div className={styles.text_div}>
            <h2>Our Projects</h2>
            <p className='text-center text-[#25161b] text-[17px]'>See the steps we are taking towards lighting up the dark places!</p>
            <Link href="/projects" className={styles.view}>See all projects</Link>
        </div>
        <div className={styles.card}>
            <div style={{
            position: 'relative',
            }}>
                <Image src={Blackout} alt="Test" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
            <div className={styles.first_project}>
                <div>
                    <h4>COMMUNITY</h4>
                    <h3>Gebrefu in the Dark: Two Decades Without Electricity</h3>
                    <p>Nestled in the heart of Badagry, the Gebrefu Community has endured an astonishing 24 years without access to electricity. 
                        This prolonged blackout has cast long shadows over the lives of its residents, affecting education, 
                        healthcare, and economic opportunities. Yet, amidst the darkness, there is a growing spark of hope.</p>
                    </div>
                <Link href="/Gberefu" className={styles.project}>Read more</Link>
            </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
            <Image src={Pretty} alt="Test" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
        </div>
        <div className={`${styles.card} ${styles.card4}`}>
        <div style={{
            position: 'relative',
            }}>
                <Image src={Teach} alt="Test" fill quality={100} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
            <div className={styles.second_project}>
                <div>
                    <h4>EDUCATION</h4>
                    <h3>Empowering Young Minds on Solar Energy</h3>
                    <p>This program is dedicated to educating young children and students about the transformative power of solar energy. Through engaging workshops, hands-on activities, and innovative projects, we aim to inspire the next generation to embrace solar energy solutions.</p>
                    </div>
                    <Link href="/Teach" className={styles.project}>Read more</Link>
                </div>
        </div>
      </div>
  );
}

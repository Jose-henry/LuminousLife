"use client"
import Image from 'next/image';
import styles from './outline.module.css';
import Link from 'next/link';
import Education from "@/assets/education.jpg";
import Gberefu from "@/assets/gberefu1.jpg"
import Teach from "@/assets/teach.jpg"
import Blackout from "@/assets/blackout.jpg"


export default function Outline() {
  return (
      <div className="w-full pt-[60px] bg-[#f6eedf] pb-[80px]">
        <div className={styles.main_container}>
            <div className={styles.text}>
                <h2>Project Outline</h2>
                <p>Discover how Luminous Life Foundation is illuminating communities with sustainable solar solutions. </p>
            </div>
            <div className={styles.the_projects}>
                <div className={styles.project}>
                    <div className={styles.div1}>
                        <div>
                        <h3 className={styles.projectText}>1: Gebrefu in the Dark: Two Decades Without Electricity</h3>
                        <p>Nestled in the heart of Badagry, the Gebrefu Community has endured an astonishing 24 years without access to electricity. Yet, amidst the darkness, there is a growing spark of hope.</p>
                        <h4><span className='font-bold'>Category</span>: Community</h4>
                        </div>
                        <Link href="/Gberefu" className={styles.btn}>Learn more</Link>
                    </div>
                    <div className={styles.div2}>
                        <Image src={Gberefu} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}}   placeholder='blur'></Image>
                    </div>
                    <div className={styles.div3}>
                        <Image src={Blackout} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} placeholder='blur'></Image>
                    </div>
                </div>

                <div className={styles.project}>
                    <div className={styles.div1}>
                        <div>
                        <h3 className={styles.projectText}>2: Empowering Young Minds on Solar Energy</h3>
                        <p>This program is dedicated to educating young children and students about the transformative power of solar energy.</p>
                        <h4><span className='font-bold'>Category</span>: Education</h4>
                        </div>
                        <Link href="/Teach" className={styles.btn}>Learn more</Link>
                    </div>
                    <div className={styles.div2}>
                        <Image src={Education} alt="Test" quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} placeholder='blur'></Image>
                    </div>
                    <div className={styles.div3}>
                        <Image src={Teach} alt="Test"  quality={100} fill style={{objectFit: 'cover', objectPosition: 'center'}} placeholder='blur'></Image>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

'use client';
import Image from "next/image";
import styles from "./gallery.module.css";

// Importing images
import education from "@/assets/education.jpg";
import agriculture from "@/assets/agriculture.jpg";
import water from "@/assets/water.jpg";
import fishing from "@/assets/fishing.jpg";
import roads from "@/assets/roads.jpg";
import market from "@/assets/market-life.jpg";
import education1 from "@/assets/education1.jpg";
import farming1 from "@/assets/farming1.jpg";
import water1 from "@/assets/water1.jpg";
import fishing1 from "@/assets/fishing1.jpg";
import roads1 from "@/assets/road1.jpg";
import market1 from "@/assets/market1.jpg";

export default function Gallery() {
  return (
    <div className={styles.main_container}>
      <h3>Lighting up the Dark Places!!!</h3>
      <div className={styles.slide}>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={education}
              alt="Education"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Education</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={agriculture}
              alt="Farming"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Farming</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={water}
              alt="Clean Water"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Clean Water</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={fishing}
              alt="Fishing"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Fishing</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={roads}
              alt="Good Roads"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Good Roads</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={market}
              alt="Improved Market Life"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Improved Market Life</p>
        </div>
        {/* Duplicate set of pics for seamless looping */}
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={education1}
              alt="Education"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Education</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={farming1}
              alt="Farming"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Farming</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={water1}
              alt="Clean Water"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Clean Water</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={fishing1}
              alt="Fishing"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Fishing</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={roads1}
              alt="Good Roads"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Good Roads</p>
        </div>
        <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
            <Image
              src={market1}
              alt="Improved Market Life"
              fill
              quality={100}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              placeholder="blur"
            />
          </div>
          <p>Improved Market Life</p>
        </div>
      </div>
    </div>
  );
}

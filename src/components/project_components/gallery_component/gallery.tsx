'use client'
import Image from "next/image";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
      <div className={styles.main_container}>
        <h3>Lighting up the Dark Places!!!</h3>
        <div className={styles.slide}>
          <div className={styles.pic}>
            <div style={{ position: 'relative' }}>
                <Image src="/assets/education.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Education</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/agriculture.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Farming</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/water.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Clean Water</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/fishing.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Fishing</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/roads.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Good Roads</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/market-life.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Improved Market Life</p>
          </div>
          {/* Duplicate set of pics for seamless looping */}
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/education1.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Education</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/farming1.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Farming</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/water1.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Clean Water</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/fishing1.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Fishing</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/road1.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Good Roads</p>
          </div>
          <div className={styles.pic}>
          <div style={{ position: 'relative' }}>
                <Image src="/assets/market1.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
              <p>Improved Market Life</p>
          </div>
        </div>
      </div>
  );
}

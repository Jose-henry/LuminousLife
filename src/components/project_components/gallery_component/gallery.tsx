'use client'
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
      <div className={styles.main_container}>
        <h3>Lighting up the Dark Places!!!</h3>
        <div className={styles.slide}>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/education.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Education</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/agriculture.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Farming</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/water.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Clean Water</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/fishing.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Fishing</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/roads.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Good Roads</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/market-life.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Improved Market Life</p>
          </div>
          {/* Duplicate set of pics for seamless looping */}
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/education1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Education</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/farming1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Farming</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/water1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Clean Water</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/fishing1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Fishing</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/road1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Good Roads</p>
          </div>
          <div className={styles.pic}>
          <div style={{ backgroundImage: 'url("assets/market1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
              <p>Improved Market Life</p>
          </div>
        </div>
      </div>
  );
}

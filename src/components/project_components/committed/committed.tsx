"use client";
import Image from 'next/image';
import styles from './committed.module.css'
import Typewriter from 'typewriter-effect';

export default function Future() {
    return (
      <div className="w-full mt-[80px] relative">
        <div className={styles.text}>
          <Typewriter
            options={{
              strings: ['The Future is Solar!'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className={styles.main_container}>
          <h2>Future Prospects</h2>
          <div>
            <Image
              src="/assets/sun-pic.svg"
              alt="Sun"
              width={140}
              height={150}
              className={styles.image}
            />
            <p>Our journey is fueled by the belief that solar energy holds the power to transform lives and create sustainable futures. ...</p>
          </div>
        </div>
      </div>
    );
  }
  
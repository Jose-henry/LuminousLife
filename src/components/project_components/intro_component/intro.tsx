'use client'    
import Link from "next/link";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <div className={styles.main_container}>
      <div>
        <h2>
          Projects Driving <span>Solar Solutions!</span>
        </h2>
        <div>
          <p className={styles.main_text}>
            At Luminous Life Foundation, we believe in the transformative power of solar energy. Our projects are dedicated to bringing sustainable,
            sun-powered solutions to communities in need, illuminating lives and fostering progress. Explore how we&apos;re harnessing the sun&apos;s potential to drive development
            and create brighter futures for everyone.
          </p>
          <div className={styles.container}>
            <div className={styles.color}>
              <p>The gallery below highlights locations we aim to impact with our solar solutions.</p>
            </div>
            <p className="font-bold text-[14px] mt-2">Visit Our Gallery <Link href="/gallery" className="text-blue-900 underline">here</Link></p>
            <div className={styles.line}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

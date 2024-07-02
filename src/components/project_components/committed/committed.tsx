"use client";
import Image from 'next/image';
import styles from './committed.module.css'
import Typewriter from 'typewriter-effect';

export default function Future() {
  return (
      <div className="w-full mt-[50px] relative bg-[#FBF6EF]">
        <p className={styles.text}>
                <Typewriter
        options={{
            strings: ['The Future is Solar!'],
            autoStart: true,
            loop: true,
        }}
        />
        </p>
        <div className={styles.main_container}>
            <h2>Future Prospects</h2>
            <div>
                <div className={`w-[130px] h-[160px] relative ${styles.image}`}>
                    <Image src="/assets/sun-pic.svg"
                        alt="Sun"
                        fill
                        style={{objectFit: 'cover', objectPosition: 'center'}}
                        quality={100}>
                    </Image>
                </div>
                <p>Our journey is fueled by the belief that solar energy holds the power to transform lives and create sustainable futures. As we look ahead, our commitment to harnessing this renewable resource remains unwavering.
                Our future is bright with the promise of innovative approaches that will not only enhance the efficiency of our projects but also ensure their long-term sustainability. We are committed to embracing cutting-edge solar technologies and integrating sustainable practices that will allow us to make an even greater difference in the lives of those we serve. 
                Consistency is at the heart of our approach. We will continue to prioritize sustainable solutions that are resilient and effective for the long term. Each new project will be a step towards a brighter, more sustainable world, where the power of the sun not only illuminates homes but also empowers lives. 
                The future projects we envision are diverse and impactful. Together, we can build a future where solar energy is a catalyst for positive change and a beacon of hope for communities around the globe.
                </p>
            </div>
        </div>
      </div>
  );
}

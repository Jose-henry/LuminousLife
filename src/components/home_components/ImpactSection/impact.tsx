"use client"
import { useEffect, useState, useRef } from 'react';
import styles from './impact.module.css';

export default function Impact() {
  const targetValues = {
    lamps: 100,
    communities: 2,
    lives: 300,
  };

  const [lamps, setLamps] = useState<number>(0);
  const [communities, setCommunities] = useState<number>(0);
  const [lives, setLives] = useState<number>(0);

  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define a function to update the value
    const animateValue = (
      start: number,
      end: number,
      duration: number,
      callback: (value: number) => void
    ) => {
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        callback(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    // Observer callback
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Animate each value
          animateValue(0, targetValues.lamps, 1000, setLamps);
          animateValue(0, targetValues.communities, 1000, setCommunities);
          animateValue(0, targetValues.lives, 1000, setLives);
          setHasAnimated(true); // Prevent animation from running again
        }
      });
    };

    const observerOptions = {
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={ref} className={`w-full ${styles.main_container}`}>
      <h2>OUR IMPACT TO DATE</h2>
      <div className={styles.impactDiv}>
        <div>
          <h3>{lamps}<sup>+</sup></h3>
          <p>SOLAR LAMPS DISTRIBUTED</p>
        </div>
        <div>
          <h3>{communities}</h3>
          <p>COMMUNITIES REACHED</p>
        </div>
        <div>
          <h3>{lives}<sup>+</sup></h3>
          <p>LIVES IMPACTED</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./hero.module.css"; // Import CSS module
import Topbar from "../TopBar/topBar";
import Link from "next/link";
import { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    // Image paths
    const images = [
        "/assets/intro (1).jpg",
        "/assets/intro (2).jpg",
        "/assets/intro (3).jpg",
        "/assets/intro (4).jpg",
        "/assets/intro (5).jpg",
        "/assets/intro (6).jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitioning(true);
            setTimeout(() => {
                setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
                setTransitioning(false);
            }, 1000); // Adjust transition duration as needed
        }, 6000); // Adjust interval timing as needed

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    const slideLeft = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                setTransitioning(false);
            }, 1000); // Adjust transition duration as needed
        }
    };

    const slideRight = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
                setTransitioning(false);
            }, 1000); // Adjust transition duration as needed
        }
    };

    return (
        <div className={styles.heroContainer}>
            <Topbar/>
            <div className={`relative w-full h-full overflow-hidden`}>
                <div className={`flex transition-transform duration-1000 ease-in-out transform ${transitioning ? 'translate-x-0' : '-translate-x-full'}`}
                    style={{
                        width: `${images.length * 100}%`,
                        transform: `translateX(-${(slideIndex * (100 / images.length))}%)`
                    }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full bg-cover bg-center flex justify-center items-center"
                            style={{
                                backgroundImage: `url("${image}")`
                            }}>
                            <div className={styles.div2}>
                                <h1 className={styles.h1}>Empowering Communities with Solar Energy!</h1>
                                <div className={styles.div3}>
                                    <p className={styles.p}>Bringing Sustainable Solutions to Light!</p>
                                    <Link href="/donate" className={styles.donateBtn}>Donate Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;

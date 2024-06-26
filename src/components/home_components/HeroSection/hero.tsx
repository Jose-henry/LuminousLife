"use client";
import styles from "./hero.module.css"; // Import CSS module
import { useState, useEffect } from 'react';
import StyledButton from "@/components/Button/button";
import Link from "next/link";

const Hero: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    // Image paths
    const images = [
        /**"/assets/intro-bg.jpg",**/
        "/assets/intro (6).jpg",
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
            <div className="relative w-full h-full">
                {/* Background Slider */}
                <div className={`absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out`}
                    style={{
                        transform: `translateX(-${slideIndex * 100}%)`
                    }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url("${image}")`
                            }}>
                        </div>
                    ))}
                </div>
                {/* Static Content */}
                <div className={`relative z-10 flex flex-col justify-center items-center w-full h-full`}>
                    <div className="absolute w-full h-full bg-[#6F2B1E73]"></div>
                    <div className={styles.div2}>
                        <h1 className={styles.h1}>Empowering Communities with Solar Energy</h1>
                        <div className={styles.div3}>
                            <p className={styles.p}>Bringing Sustainable Solutions to Light!</p>
                            <Link href="/donate" className={styles.link_tag}>
                                <StyledButton btnText="Donate Now" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

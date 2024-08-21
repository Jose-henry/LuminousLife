'use client';
import Image from "next/image";
import styles from "./gallery.module.css";
import React from "react";

const images = [
    { src: '/assets/education.jpg', caption: "Education" },
    { src: '/assets/agriculture.jpg', caption: "Farming" },
    { src: '/assets/water.jpg', caption: "Clean Water" },
    { src: '/assets/fishing.jpg', caption: "Fishing" },
    { src: '/assets/roads.jpg', caption: "Good Roads" },
    { src: '/assets/market-life.jpg', caption: "Improved Market Life" },
    { src: '/assets/education1.jpg', caption: "Education" },
    { src: '/assets/farming1.jpg', caption: "Farming" },
    { src: '/assets/water1.jpg', caption: "Clean Water" },
    { src: '/assets/fishing1.jpg', caption: "Fishing" },
    { src: '/assets/road1.jpg', caption: "Good Roads" },
    { src: '/assets/market1.jpg', caption: "Improved Market Life" },
];

const Gallery: React.FC = () => {
    return (
        <div className={styles.main_container}>
            <h3>Lighting up the Dark Places!!!</h3>
            <div className={styles.slide}>
                {images.map((image, index) => (
                    <div className={styles.pic} key={index}>
                        <div style={{ position: 'relative' }}>
                            <Image 
                                src={image.src} 
                                alt={image.caption} 
                                fill 
                                quality={100} 
                                style={{ objectFit: 'cover', objectPosition: 'center' }} 
                            />
                        </div>
                        <p>{image.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
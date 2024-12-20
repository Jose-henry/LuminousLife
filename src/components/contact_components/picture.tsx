"use client";
// Picture.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './picture.module.css'; // Make sure to import your CSS module

const Picture: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <div 
                className={`${styles['fade-in']} ${styles.mar} border-t-[4px] border-t-[#ffa]`}
                style={{ 
                    position: 'relative',
                    width: '100%',
                    height: '500px', 
                    borderBottom: '2px solid white',
                    marginTop: '73px',
                    opacity: isLoaded ? 1 : 0, // Ensure opacity is 0 until the fade-in effect starts
                }}
            >
                <Image src="/assets/real6.JPG" alt="Office" quality={100} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
        </div>
    );
}

export default Picture;

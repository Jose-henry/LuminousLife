"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Topbar from "../shared/Topbar";

export default function IntroDiv() {
    const [isClicked, setIsClicked] = useState(false);
    const [bgIndex, setBgIndex] = useState(0);
    const [fade, setFade] = useState(false);

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
            // Trigger fade out
            setFade(true);

            // Change the background image after fade out is complete
            setTimeout(() => {
                setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(false);
            }, 1000); // 1 second fade duration
        }, 6000); // 6 seconds total interval (5 seconds display + 1 second fade)

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
    };

    return (
        <div className="w-full h-auto">
            <Topbar />
            <div className="min-h-[715px] relative overflow-hidden flex items-center">
                {/* Background image with transition */}
                <div
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backgroundImage: `url("${images[bgIndex]}")`
                    }}
                ></div>
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[#6F2B1E73]"></div>
                {/* Content */}
                <div className="min-h-[589px] relative z-10 px-4 sm:px-6 md:px-10 lg:px-[60px] grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full flex items-center justify-center md:justify-start">
                        <div className="flex items-center justify-center md:justify-start text-center md:text-left">
                            <h1
                                className="text-[60px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#FBFFE7] font-black relative inline-block"
                                style={{ textShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)' }}
                            >
                                Empowering Communities with Solar Energy.
                            </h1>
                            <Image
                                src="/assets/sun.svg"
                                alt="sun icon"
                                height={120}
                                width={120}
                                className="ml-[1px] relative top-2 md:top-4 lg:top-6"
                            />
                        </div>
                    </div>
                    <div className="self-center md:self-end flex flex-col items-center justify-center gap-4">
                        <h3 className="text-[#FBFFE7] text-center font-cursive text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
                            Bringing Sustainable Solutions to Light!
                        </h3>
                        <Link href="/donate">
                            <button
                                onClick={handleClick}
                                style={{
                                    boxShadow: isClicked ? "none" : "5px 5px 0 0 #773529",
                                    transition: "box-shadow 0.2s ease"
                                }}
                                className="w-[200px] h-[56px] text-[14px] font-semibold bg-[#E5C9A2] rounded-[24px] border-[2px] border-[#622D25] hover:bg-[#ECCA9C]"
                            >
                                Donate now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

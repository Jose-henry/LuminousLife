"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SlantDiv1() {
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Adjust rotation based on window width
            if (window.innerWidth >= 800) {
                setRotate(false); // Rotate for larger screens
            } else {
                setRotate(true); // Keep straight for smaller screens
            }
        };

        // Initial check on component mount
        handleResize();

        // Listen to window resize events
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="absolute top-[1250px] left-[129.65px]">
            <Image
                src="/assets/slant1.svg"
                alt="Village"
                width={438}
                height={241}
                style={{
                    transform: rotate ? 'rotate(-15deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease' // Optional: Add transition for smooth rotation
                }}
            />
        </div>
    );
}

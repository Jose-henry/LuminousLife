"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MissionDiv() {
    const [topPosition, setTopPosition] = useState("1600px");
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth < 640) {
                    setTopPosition("1550px");
                } else {
                    setTopPosition("1600px");
                }

                // Check for small screen condition (1300px or less)
                setIsSmallScreen(window.innerWidth <= 1405);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                boxShadow: isSmallScreen ? "none" : "5px 5px 0 0 #773529",
                top: topPosition,
                borderRadius: isSmallScreen ? "0" : "48px", // Conditionally remove border radius
                borderLeft: !isSmallScreen ? "2px solid #622D25" : "none", // Apply border only on large screens
                borderRight: !isSmallScreen ? "2px solid #622D25" : "none", // Apply border only on large screens
            }}
            className="w-full max-w-[1400px] h-[466px] border-[2px] border-[#622D25] rounded-[48px] absolute grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#FBF6EF] left-[50%] transform -translate-x-1/2 p-10 gap-[5%]"
        >
            <div className="w-full h-full bg-[#773529] rounded-[48px] flex flex-col items-center justify-center gap-4 md:gap-6">
                <h2 className="text-[#FBFFE7] text-2xl md:text-3xl">Our Mission</h2>
                <h3 className="text-[#FBFFE7] text-lg md:text-[21px] max-w-[450px] text-center font-medium">
                    Empowering underserved communities in Nigeria through sustainable energy solutions and fostering overall well-being
                </h3>
            </div>
            <div className="w-full h-full flex flex-col">
                <h2 className="text-[#622D25] text-2xl md:text-3xl text-center">Our Values</h2>
                <div className="flex items-center justify-center mt-4 md:mt-6 h-full">
                    <div className="w-full h-[80%] grid grid-cols-1 md:grid-cols-2 justify-center gap-4 md:gap-6">
                        <div className="h-full rounded-[24px] flex justify-center items-center md:border-[2px] md:border-[#ffff] bg-transparent md:bg-[#FFFFFF]">
                            <div className="flex gap-2 items-center">
                                <Image src="/assets/equity.svg" width={24} height={24} alt="Equity logo" />
                                <h4 className="text-[#622D25] text-sm">Equity</h4>
                            </div>
                        </div>
                        <div className="h-full rounded-[24px] flex justify-center items-center md:border-[2px] md:border-[#ffff] bg-transparent md:bg-[#FFFFFF]">
                            <div className="flex gap-2 items-center">
                                <Image src="/assets/empowerment.svg" width={24} height={24} alt="Empowerment logo" />
                                <h4 className="text-[#622D25] text-sm">Empowerment</h4>
                            </div>
                        </div>
                        <div className="h-full rounded-[24px] flex justify-center items-center md:border-[2px] md:border-[#ffff] bg-transparent md:bg-[#FFFFFF]">
                            <div className="flex gap-2 items-center justify-center w-[90%]">
                                <Image src="/assets/transparency.svg" width={24} height={24} alt="Transparency logo" />
                                <h4 className="text-[#622D25] text-sm text-center">Transparency and Accountability</h4>
                            </div>
                        </div>
                        <div className="h-full rounded-[24px] flex justify-center items-center md:border-[2px] md:border-[#ffff] bg-transparent md:bg-[#FFFFFF]">
                            <div className="flex gap-2 items-center">
                                <Image src="/assets/sustainability.svg" width={24} height={24} alt="Sustainability logo" />
                                <h4 className="text-[#622D25] text-sm">Sustainability</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

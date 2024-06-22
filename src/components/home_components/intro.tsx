"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function IntroDiv() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
    };

    return (
        <div className="w-full h-[1435px]">
            <div className="h-[96px] bg-[#622D25] flex items-center gap-[12px] px-[20px] py-[10px]">
                <Image src="/assets/logo.svg" width={83} height={73} alt="Logo icon" />
                <h3 className="text-[C] .logotext text-[#FBFFE7]">Luminous Life Foundation</h3>
            </div>
            <div
                className="h-[793px] bg-cover bg-center flex items-center relative"
                style={{ backgroundImage: `url("/assets/intro-bg.png")` }}
            >
                <div className="bg-[#6F2B1E73] h-[793px] w-full absolute"></div>
                <div className="h-[589px] w-full px-[20px] flex z-10">
                    <div className="w-[878px] h-full">
                        <h1
                            className="text-[128px] text-[#FBFFE7] font-black relative"
                            style={{ textShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)', display: 'inline-flex', alignItems: 'center' }}
                        >
                            Empowering Communities with Solar Energy
                            <Image
                                src="/assets/sun.svg"
                                alt="sun icon"
                                height={120}
                                width={120}
                                style={{ display: 'inline-block', padding: 0, margin: 0 }}
                                className="absolute bottom-0 left-[430px]"
                            />
                        </h1>
                    </div>
                    <div className="self-end flex flex-col items-center justify-center gap-4">
                        <h3 className="text-[#FBFFE7] text-center" style={{ fontFamily: 'cursive' }}>
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

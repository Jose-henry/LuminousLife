"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function ApplyDiv() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
    };

    return (
        <div className="w-[915px] h-[424px] p-10 border-[2px] border-[#622D25] absolute top-[4504px] left-[50%] flex justify-center items-center transform -translate-x-1/2 bg-[#FBF6EF] rounded-[48px]" style={{ boxShadow: "5px 5px 0 0 #773529"}}>
            <div className="w-[867px] h-[324px] flex">
                <div className="w-[540px] h-full flex flex-col justify-between">
                    <div className=" flex flex-col justify-between">
                        <h2 className="text-[32px] text-[#773529]">Apply Now</h2>
                        <h3 className="w-[322px] h-[170px] text-[#622D25]">We’re excited to have you join our team! Click the button below to fill out the volunteer application form</h3>
                    </div>
                    <Link href="/apply">
                        <div
                            onClick={handleClick}
                            className="bg-[#E5C9A2] w-[200px] h-[56px] rounded-[24px] flex items-center justify-center gap-2 hover:bg-[#ECCA9C]"
                            style={{
                                boxShadow: isClicked ? "none" : "5px 5px 0 0 #773529",
                                transition: "box-shadow 0.2s ease"
                            }}
                        >
                            <p className="text-[24px] text-[#371511] font-bold">Apply Now</p>
                            <Image src="/assets/arrow.svg" alt="sun" height={24} width={24} />
                        </div>
                    </Link>
                </div>
                <Image src="/assets/apply-img.svg" alt="sun" height={324} width={317} layout="responsive" />
            </div>
        </div>
    );
}

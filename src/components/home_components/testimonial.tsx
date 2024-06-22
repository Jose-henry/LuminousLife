"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Testimonial from "./testimonialProp";

const testimonials = [
    {
        name: "Joseph Henry",
        role: "Community Leader",
        state: "Lagos",
        testimonial: "Thanks to the solar panels provided by Luminous Life Foundation, our community now has reliable electricity. Children can study at night, and our health clinic operates smoothly even after dark."
    },
    {
        name: "Amina Yusuf",
        role: "Teacher",
        state: "Kano",
        testimonial: "The solar energy solution has transformed our school. We no longer have to cancel evening classes due to power outages, and our students are more engaged and motivated."
    },
    {
        name: "Benedicta Okoro",
        role: "Health Worker",
        state: "Anambra",
        testimonial: "Solar power has been a blessing for our health center. We can now store vaccines properly and run essential equipment without worrying about electricity shortages."
    },
    {
        name: "Emeka Nwosu",
        role: "Small Business Owner",
        state: "Abuja",
        testimonial: "My shop’s productivity has increased significantly since the solar panels were installed. I can now keep my business open later and attract more customers in the evening."
    }
];

export default function TestimonialDiv() {
    const [current, setCurrent] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const handlePrev = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        }
    };

    const handleNext = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }
    };

    useEffect(() => {
        if (isSliding) {
            const timer = setTimeout(() => setIsSliding(false), 500); // Duration of the transition in milliseconds
            return () => clearTimeout(timer);
        }
    }, [isSliding]);

    return (
        <div
            style={{ boxShadow: "5px 5px 0 0 #773529" }}
            className="w-[1311px] h-[321px] border-[2px] border-[#622D25] absolute left-[50%] transform -translate-x-1/2 bg-[#FBF6EF] rounded-[48px] top-[4011px] flex flex-col justify-between items-center px-8 py-4"
        >
            <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out transform ${
                            index === current ? "translate-x-0 opacity-100" : index < current ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"
                        }`}
                    >
                        <Testimonial {...testimonial} />
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center w-full max-w-[1177px]">
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`border border-[#622D25] w-[12px] h-[12px] rounded-full cursor-pointer ${index === current ? 'bg-[#622D25]' : ''}`}
                            onClick={() => !isSliding && setCurrent(index)}
                        ></div>
                    ))}
                </div>
                <div className="flex gap-4 items-center">
                    <Image
                        src="/assets/testimonial-btn.svg"
                        alt="Previous"
                        width={88}
                        height={48}
                        className="cursor-pointer"
                        onClick={handlePrev}
                    />
                    <Image
                        src="/assets/testimonial-btn1.svg"
                        alt="Next"
                        width={88}
                        height={48}
                        className="cursor-pointer"
                        onClick={handleNext}
                    />
                </div>
            </div>
        </div>
    );
}

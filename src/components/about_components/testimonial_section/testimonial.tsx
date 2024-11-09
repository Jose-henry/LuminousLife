"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./testimonial.module.css"; // Import CSS module
import TestimonialProp from "@/components/home_components/Testimonial/testimonialProp";


const Testimonial: React.FC = () => {

    // State to manage the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of testimonial data
    const testimonials = [
        {
            name: "Tope Salako",
            position: "Community Leader",
            location: "Lagos",
            testimony: '"We truly appreciate the good work Luminous Life has started in our community. Thanks to the solar lamps they provided, our homes now have reliable lighting. Children can study at night, and we can sell for a few hours after dark. We look forward to even more solar solutions to help us in other aspects."'
        },
        {
            name: " Faula Kamalideen",
            position: "Teacher",
            location: "Lagos",
            testimony: '"The pump price of oil that has ballooned has made the solar lanterns even more useful and timely. The solar lanterns help us see well at night and also assist my children study because when they return from school, it is usually dark"'
        },
        {
            name: "Victoria Hungbo",
            position: "Farmer",
            location: "Lagos",
            testimony: '“We deeply appreciate this gesture as it helps us sell our farm produce after dark, letting us earn even more. We hope for a solar farm that can power a pumping system to help irrigate our farmlands”'
        },
        {
            name: "Eberongbe Muyiba",
            position: "Trader",
            location: "Lagos",
            testimony: '"The solar lamps have been very helpful for my family and me. My children now complete their assignments easily. The lamps work well, and we also use them to sell after dark."'
        },
        {
            name: "Ashade",
            position: "Mother",
            location: "Lagos",
            testimony: '"My children use it to read when they get back from school, but we hope for better solutions that can last over 4 hours"'
        },
        {
            name: "Idowu Mauyon",
            position: "Fisherman",
            location: "Lagos",
            testimony: '"The lamp is working well, I do not need to purchase kerosene like I used to before"'
        },
    ];
    

    // Function to handle navigation to the previous testimonial
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    // Function to handle navigation to the next testimonial
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.testimony}>
            <h2>Testimonial</h2>
            <div 
            className={styles.main_container}>
                <div className={styles.carousel_container}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${styles.carousel_item} ${index === currentIndex ? styles.active : styles.inactive}`}
                        >
                            <TestimonialProp 
                                name={testimonial.name} 
                                position={testimonial.position} 
                                location={testimonial.location} 
                                testimony={testimonial.testimony}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.navigation}>
                    <div className={styles.dots}>
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-[12px] h-[12px] rounded-full border-[2px] border-[#622D25] ${index === currentIndex ? styles.dot_active : ""}`}
                            ></div>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.btn} onClick={handlePrev}>
                            <Image src="/assets/left-arrow.svg" alt="Arrow" width={24} height={24} className={styles.leftBtn} />
                        </div>
                        <div className={styles.btn} onClick={handleNext}>
                            <Image src="/assets/right-arrow.svg" alt="Arrow" width={24} height={24} className={styles.rightBtn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

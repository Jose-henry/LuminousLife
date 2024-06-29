"use client";
import React, { useState } from 'react';
import styles from './ab.module.css';
import Image from 'next/image';

const AB: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { content: "At The Light and Hope Initiative, we are dedicated to providing solar energy solutions that illuminate the future of rural communities. Our mission transcends merely delivering power; we aim to foster an environment where sustainable and renewable energy becomes a cornerstone for empowering individuals and enhancing their quality of life." },
        { content: "In many rural areas, access to reliable and affordable energy remains a significant challenge. Conventional energy sources are often unavailable, unreliable, or environmentally damaging, leaving communities without the necessary power for basic needs and development. At The Light and Hope Initiative, we aim to bridge this gap by deploying advanced solar technologies tailored to the specific needs of each community we serve." },
        { content: "At The Light and Hope Initiative, we envision a transformative world where every rural community thrives through access to clean, reliable, and affordable solar energy. Our vision is a future where solar energy solutions bridge the energy divide, illuminating lives and unlocking the potential of every individual, home, and enterprise. In this future, every rural community, no matter how remote, enjoys the benefits of sustainable and renewable energy. Schools are well-lit and equipped to provide quality education, healthcare facilities operate with essential medical equipment, and households have access to modern amenities that enhance quality of life." },
        { content: "Ultimately, our vision is to be a beacon of light and hope, driving transformative change through solar energy. We strive to create a world where energy poverty is a relic of the past, where every community can harness the power of the sun to achieve their aspirations, foster development, and improve the overall quality of life. Our mission is to ensure that no one is left in the dark and that the benefits of solar energy are accessible to all, paving the way for a brighter, more sustainable, and equitable future for rural communities across the globe." }
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.about}>
                    <h2>About Luminous Life Foundation</h2>
                    <div className={styles.slideContainer}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                            >
                                <p>{slide.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.navigate}>
                        {currentSlide > 0 && (
                            <Image
                                src="/assets/back.svg"
                                alt="back icon"
                                width={50}
                                height={50}
                                className={styles.prev}
                                onClick={handlePrev}
                            />
                        )}
                        <Image
                            src="/assets/next.svg"
                            alt="next icon"
                            width={50}
                            height={50}
                            className={styles.next}
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.values}>
                <h2>Our Values</h2>
                <div className={styles.value_container}>
                    <div className={styles.div}>
                        <h3>Equity</h3>
                        <p>Access to reliable electricity is a fundamental right essential for healthcare, education, and economic empowerment, regardless of socio-economic status. 
                        </p>
                    </div>
                    <div className={styles.div}>
                        <h3>Empowerment</h3>
                        <p>We are committed to empowering communities by equipping them with the tools and resources needed to enhance their quality of life and take charge of their own development. 
                        </p>
                    </div>
                    <div className={styles.div}>
                        <h3>Sustainability</h3>
                        <p>Our commitment to sustainable energy solutions ensures lasting benefits for communities and the environment. 
                        By prioritizing renewable energy, we empower communities to thrive in a cleaner, more sustainable future.</p>
                    </div>
                    <div className={styles.div}>
                        <h3>Transparency</h3>
                        <p>Transparency and accountability are core principles that guide our actions and relationships. We uphold transparency by openly sharing information, making decisions based on integrity, and engaging stakeholders in honest dialogue.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.team_div}>
                <div>
                    <h2>Our Team (Managerial)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Favour.jpg")',
                                backgroundPosition: 'center bottom -120px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Founder</h3>
                                <p>Favour Oguibe</p>
                            </div>
                        </div>


                    </div>
                </div>


                <div>
                    <h2>Our Team (Secetarial)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic4}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Stephanie.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                    <h3>General Secetary</h3>
                                    <p>Stephanie</p>
                                </div>
                        </div>

                        <div className={styles.pic5}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Joba.jpg")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Financial Secetary</h3>
                                <p>Joba</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div>
                    <h2>Our Team (Technical)</h2>
                    <div className={styles.team}>


                        <div className={styles.pic6}>
                                    <div className={styles.details}>
                                    <div style={{
                                        width: '400px',
                                        height: '400px',
                                        marginBottom: '20px',
                                        backgroundImage: 'url("/assets/Joseph.jpg")',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        borderTopLeftRadius: '3px',
                                        borderTopRightRadius: '3px',
                                        backgroundRepeat: 'no-repeat',
                                    }}></div>
                                        <h3>Backend Developer</h3>
                                        <p>Joseph Henry</p>
                                    </div>
                        </div>

                        <div className={styles.pic7}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Fortune.jpg")',
                                    backgroundPosition: 'center bottom -170px',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                    <h3>Frontend Developer</h3>
                                    <p>Fortune Oguibe</p>
                                </div>
                        </div>


                        <div className={styles.pic8}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Priestly.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                    <h3>Lead Product Designer</h3>
                                    <p>Priestly</p>
                                </div>
                        </div>

                        <div className={styles.pic9}>
                                <div className={styles.details}>
                                <div style={{
                                    width: '400px',
                                    height: '400px',
                                    marginBottom: '20px',
                                    backgroundImage: 'url("/assets/Onyinye.jpg")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    borderTopLeftRadius: '3px',
                                    borderTopRightRadius: '3px',
                                    backgroundRepeat: 'no-repeat',
                                }}></div>
                                    <h3>Assistant Product Designer</h3>
                                    <p>Onyinye</p>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AB;

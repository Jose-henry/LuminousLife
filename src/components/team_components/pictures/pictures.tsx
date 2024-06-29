"use client";
import React, { useState } from 'react';
import styles from './pictures.module.css';
import Image from 'next/image';

const Picture: React.FC = () => {

    return (
        <div className={styles.container}>

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

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Nelson.jpg")',
                                backgroundPosition: 'center bottom -170px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Administrative Head</h3>
                                <p>Nelson Elijah</p>
                            </div>
                        </div>


                    </div>
                </div>


                <div>
                    <h2>Our Team (Operational)</h2>
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
                                    <h3>General Secretary</h3>
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
                                <h3>Financial Secretary</h3>
                                <p>Joba</p>
                            </div>
                        </div>

                        <div className={styles.pic11}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Ola.jpg")',
                                backgroundPosition: 'center bottom -120px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Social Media Manager</h3>
                                <p>Ola</p>
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

                <div>
                    <h2>Our Team (Trustees)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic1}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Gabriel.jpg")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Founder</h3>
                                <p>Gabriel Obiefule</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div>
                    <h2>Our Team (Founding Members)</h2>
                    <div className={styles.team}>

                        <div className={styles.pic10}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Djones.jpg")',
                                backgroundPosition: 'center bottom -145px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Electrical Engineer</h3>
                                <p>David</p>
                            </div>
                        </div>

                        <div className={styles.pic11}>
                            <div className={styles.details}>
                            <div style={{
                                width: '400px',
                                height: '400px',
                                marginBottom: '20px',
                                backgroundImage: 'url("/assets/Kibe.jpg")',
                                backgroundPosition: 'center bottom -140px',
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '3px',
                                borderTopRightRadius: '3px',
                                backgroundRepeat: 'no-repeat',
                            }}></div>
                                <h3>Computer Scientist</h3>
                                <p>Kibe Ume</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Picture;

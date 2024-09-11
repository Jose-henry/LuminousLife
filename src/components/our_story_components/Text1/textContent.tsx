'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './text1.module.css';
import Link from 'next/link';



export const revalidate = 1800;

export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 80}`;
  };


interface content{
    title?: string;
    content?: string;
    src?: string;
    alt?: string;
    description?: string;
    blurData?: string;
}
function TextContent({ title, content, src, alt, description, blurData }: content) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const [showOverlay, setShowOverlay] = useState(false); 

    const handleGoBack = () => {
        window.history.back(); // Navigate back using browser's history
    };
    
    const handleCloseClick = () => {
        setShowOverlay(false); 
        setSelectedImage(null); 
    };

    return (
        <div className={`bg-[#fafafa] pt-[60px] pb-[80px] relative ${styles.main}`}>
            <div className={styles.picOverlay} style={{ display: showOverlay ? 'block' : 'none' }}>
                <div className={styles.inside_container}>
                    <Image src="/assets/white_close.svg" width={25} height={25} alt="close" className='ml-auto cursor-pointer shadow-2xl' onClick={handleCloseClick} />
                    <div className={styles.overlayContent}>
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Image"
                                fill
                                quality={100}
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                className={styles.image}
                            />
                        )}
                    </div>
                </div>
            </div>
            <button onClick={handleGoBack} className={styles.navigate}>
                <Image src="/assets/back.png" alt="Go Back" width={40} height={40} className='shadow-md rounded-full active:shadow-none' />
                <p>Back</p>
            </button>

            <div className={styles.main_container}>
                <div className={styles.div1}>
                    <h1>{title}</h1>
                    <div className={`${styles.pic_container} shadow-2xl`}>
                        <Image src={src || ""} alt={alt || ""} fill style={{ objectFit: 'cover', objectPosition: 'center' }}
                        placeholder='blur'
                        blurDataURL={blurData}
                        loader={customLoader}
                        />
                    </div>

                    <div className={styles.text_div}>
                        <div>{content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextContent;
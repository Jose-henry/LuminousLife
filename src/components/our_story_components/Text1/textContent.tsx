'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './text1.module.css';

export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 80}`;
};

interface Content {
    title?: string;
    content?: string;
    src?: string;
    alt?: string;
    description?: string;
    blurData?: string;
}

function TextContent({ title, content, src, alt, description, blurData }: Content) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null); 
    const [showOverlay, setShowOverlay] = useState(false); 

    const handleGoBack = () => {
        window.history.back();
    };
    
    const handleCloseClick = () => {
        setShowOverlay(false); 
        setSelectedImage(null); 
    };

    // Parse content if it's a JSON string
    let parsedContent;
    if (typeof content === 'string') {
        try {
            parsedContent = JSON.parse(content);
        } catch (e) {
            parsedContent = content;
        }
    } else {
        parsedContent = content;
    }

    // Function to render content
    const renderContent = (content: any) => {
        if (typeof content === 'string') {
            return <p>{content}</p>;
        }
        if (content && content.root && content.root.children) {
            return content.root.children.map((child: any, index: number) => {
                if (child.type === 'paragraph') {
                    const textNode = child.children && child.children[0] ? child.children[0].text : '';
                    return <p key={index}>{textNode}</p>;
                }
                // Add more conditions here for other types of content
                return null;
            });
        }
        return null;
    };

    return (
        <div className={`bg-[#fafafa] pt-[60px] pb-[80px] relative ${styles.main}`}>
            <div className={styles.main_container}>
                <div className={styles.div1}>
                    <h1>{title}</h1>
                    <div className={`${styles.pic_container} shadow-2xl`}>
                        <Image 
                            src={src || ""} 
                            alt={alt || ""} 
                            fill 
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            placeholder='blur'
                            blurDataURL={blurData}
                            loader={customLoader}
                        />
                    </div>
                    <div className={styles.text_div}>
                        {renderContent(parsedContent)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextContent;

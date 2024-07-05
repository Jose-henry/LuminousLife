'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { customLoader } from '@/utils/imageCustom';

type CMSProps = {
  content: {
    title: string;
    content: string;
    images: Array<{ url: string, blurDataURL: string }>;
    [key: string]: any;
  }
};

const CMS = ({ content }: CMSProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Utility to check if an image URL is valid
  const isValidImage = (image: { url: string; blurDataURL: string }) => {
    // Example conditions:
    // 1. Starts with 'http' or 'https'
    // 2. May not end with a file extension (modify this as per your exact criteria)
    return (
      image.url &&
      (image.url.startsWith('http://') || image.url.startsWith('https://')) &&
      image.blurDataURL // Ensure blurDataURL exists
      // Add any additional conditions as needed
    );
  };

  // Filter valid images
  const validImages = content.images.filter(isValidImage);
  console.log("Valid images for rendering:", validImages);
  console.log("Content Images:", content.images);

  return (
    <div>
      <h1 suppressHydrationWarning={true}>{content.title}</h1>
      <p>{content.content}</p>

      {isClient && validImages.length > 0 ? (
        validImages.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            width={600}
            height={400}
            loader={customLoader}
            quality={100}
            blurDataURL={image.blurDataURL}
            placeholder="blur"
            suppressHydrationWarning={true} // Suppress warning for any minor differences
          />
        ))
      ) : (
        <p>No valid images available.</p> // Fallback content if no images are valid
      )}
    </div>
  );
};

export default CMS;

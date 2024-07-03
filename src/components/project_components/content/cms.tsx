// src/components/project_components/content/cms.tsx

'use client'; // Directive to specify that this component is client-side

import Image from 'next/image';
import { customLoader } from '@/utils/imageCustom';

type CMSProps = {
  content: {
    title: string;
    content: string;
    [key: string]: any;
  }
};

const CMS = ({ content }: CMSProps) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.content}</p>
      
      {Array.from({ length: 10 }, (_, i) => `image${i + 1}`).map((imgKey, index) => {
        const imageUrl = content[imgKey as keyof typeof content] as string;

        if (imageUrl && imageUrl.startsWith("http")) {
          return (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              width={600}
              height={400}
              loader={customLoader}
              quality={100}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default CMS;

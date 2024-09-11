'use server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { getPlaiceholder } from 'plaiceholder';
import { cache } from 'react';
import { revalidateTag } from 'next/cache';

export const preload = async () => {
  void fetchImage();
};





export const fetchImage = cache(async () => {
    try {
      const payload = await getPayload({ config: configPromise });
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const data = await payload.find({
        collection: 'media'
      });
  
      if (data.docs && data.docs.length > 0) {
        const imagesWithBlurData = await Promise.all(data.docs.map(async (doc: any) => {
          if (doc.url) {
            const src = `${apiUrl}${doc.url.startsWith('/') ? '' : '/'}${doc.url}`;
            try {
              const buffer = await fetch(src).then(async (res) =>
                Buffer.from(await res.arrayBuffer())
              );
              const { base64 } = await getPlaiceholder(buffer);
  
              return {
                ...doc,
                src,
                blurData: base64
              };
            } catch (err) {
              console.error(`Error generating blurData for ${src}:`, err);
              return {
                ...doc,
                src,
                blurData: ''
              };
            }
          } else {
            return {
              ...doc,
              src: null,
              blurData: ''
            };
          }
        }));
  
        return imagesWithBlurData;
      } else {
        throw new Error('No media found');
      }
    } catch (err: any) {
      console.error(`Error fetching images`, err.message);
      return [];
    }
  });
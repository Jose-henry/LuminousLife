'use client'
import Image from 'next/image'
import { Photo } from '@/lib/photos'

export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
    return `${src}?w=${width}&q=${quality || 90}`;
  };
export default function PhotoCard({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt={photo.alt || 'No description available'}
        src={photo.src || ''} // Provide a fallback image if src is undefined
        height={600}
        width={600}
        className='col-span-1 aspect-square w-full object-cover'
        loader={customLoader}
        blurDataURL={photo.blurData || ''}
        placeholder='blur'

      />

      <div className='bg-white p-2 px-4'>
        <p className='font-medium text-md'>{photo.description || 'No description available'}</p>
      </div>
    </>
  )
}

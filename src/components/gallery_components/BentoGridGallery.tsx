'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export const customLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 80}`;
};

interface ImageProps {
  id?: number | string
  src?: string
  alt?: string
  description?: string
  blurData?: string
}

interface BentoGridGalleryProps {
  images: ImageProps[]
}

const Modal: React.FC<{ image: ImageProps; onClose: () => void }> = ({ image, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" 
      onClick={onClose}
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <div 
        className="relative w-[850px] h-[550px] overflow-hidden rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src || ''}
          alt={image.alt || ''}
          layout="fill"
          objectFit="cover"
          loader={customLoader}
          placeholder='blur'
          blurDataURL={image.blurData || ''}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
};

const BentoGridGallery: React.FC<BentoGridGalleryProps> = ({ images }) => {
  const [layout, setLayout] = useState<('small' | 'large')[][]>([])
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null)

  useEffect(() => {
    const generateLayout = () => {
      const newLayout: ('small' | 'large')[][] = []
      let remainingImages = images.length

      while (remainingImages > 0) {
        const row: ('small' | 'large')[] = []
        let rowWidth = 0

        if (remainingImages >= 4) {
          const hasRectangle = Math.random() > 0.25

          if (hasRectangle) {
            const rectanglePosition = Math.floor(Math.random() * 3)
            for (let i = 0; i < 3; i++) {
              if (i === rectanglePosition) {
                row.push('large')
                rowWidth += 2
              } else {
                row.push('small')
                rowWidth += 1
              }
            }
          } else {
            for (let i = 0; i < 4; i++) {
              row.push('small')
              rowWidth += 1
            }
          }
        } else {
          // For last row, fill with remaining images as small size
          for (let i = 0; i < remainingImages; i++) {
            row.push('small')
            rowWidth += 1
          }
        }

        remainingImages -= rowWidth
        newLayout.push(row)
      }

      setLayout(newLayout)
    }

    generateLayout()
  }, [images])

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <>
      <div className="flex flex-col gap-4 mx-auto" style={{ maxWidth: '1300px', padding: '0 50px' }}>
        {layout.map((row, rowIndex) => (
          <div className={`flex ${row.length < 4 ? 'justify-start' : 'justify-between'} gap-4`} key={rowIndex}>
            {row.map((size, colIndex) => {
              const imageIndex = layout.slice(0, rowIndex).reduce((sum, r) => sum + r.length, 0) + colIndex
              const image = images[imageIndex]
              if (!image) return null

              return (
                <div
                  key={image.id}
                  className={`transition-transform duration-300 hover:scale-105 rounded-md relative ${
                    size === 'large' ? 'w-[600px] h-[300px]' : 'w-[300px] h-[300px]'
                  } bg-gray-200 group overflow-hidden cursor-pointer`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src || ''}
                    alt={image.alt || ''}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                    loader={customLoader}
                    placeholder='blur'
                    blurDataURL={image.blurData || ''}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">
                      {truncateDescription(image.description || '', 100)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </>
  )
}

export default BentoGridGallery

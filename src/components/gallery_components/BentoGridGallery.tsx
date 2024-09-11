'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageProps {
  id: number
  src: string
  alt: string
}

interface BentoGridGalleryProps {
  images: ImageProps[]
}

const BentoGridGallery: React.FC<BentoGridGalleryProps> = ({ images }) => {
  const [layout, setLayout] = useState<('small' | 'large')[][]>([])

  useEffect(() => {
    const generateLayout = () => {
      const newLayout: ('small' | 'large')[][] = []
      let remainingImages = [...images]

      while (remainingImages.length > 0) {
        const row: ('small' | 'large')[] = []
        let rowWidth = 0

        // Randomly decide if this row will have 4 squares or 2 squares and 1 rectangle
        const hasRectangle = Math.random() > 0.3

        if (hasRectangle) {
          // Randomly decide the position of the rectangle in the row
          const rectanglePosition = Math.floor(Math.random() * 3) // 0, 1, or 2
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
          // Add 4 squares
          for (let i = 0; i < 4 && remainingImages.length > 0; i++) {
            row.push('small')
            rowWidth += 1
          }
        }

        remainingImages.splice(0, rowWidth)
        newLayout.push(row)
      }

      setLayout(newLayout)
    }

    generateLayout()
  }, [images])

  return (
    <div className="flex flex-col gap-4 mx-auto" style={{ maxWidth: '1300px', padding: '0 50px' }}>
      {layout.map((row, rowIndex) => (
        <div className="flex justify-between gap-4" key={rowIndex}>
          {row.map((size, colIndex) => {
            const image = images[rowIndex * 4 + colIndex]
            if (!image) return null

            return (
              <div
                key={image.id}
                className={`transition-transform duration-300 hover:scale-105 rounded-md relative ${size === 'large' ? 'w-[600px] h-[300px]' : 'w-[300px] h-[300px]'} bg-gray-200`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default BentoGridGallery

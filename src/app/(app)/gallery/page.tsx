import BentoGridGallery from '@/components/gallery_components/BentoGridGallery'
import { fetchImage } from '@/lib/actions/image';
import photos from '@/lib/photos';


/* const images = [
  { id: 1, src: '/assets/child.jpg', alt: 'Image 1' },
  { id: 2, src: '/assets/child.jpg', alt: 'Image 2' },
  { id: 3, src: '/assets/child.jpg', alt: 'Image 3' },
  { id: 4, src: '/assets/child.jpg', alt: 'Image 4' },
  { id: 5, src: '/assets/child.jpg', alt: 'Image 5' },
  { id: 6, src: '/assets/child.jpg', alt: 'Image 6' },
  { id: 7, src: '/assets/child.jpg', alt: 'Image 7' },
  { id: 8, src: '/assets/child.jpg', alt: 'Image 8' },
  { id: 9, src: '/assets/child.jpg', alt: 'Image 9' },
  { id: 10, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 11, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 12, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 13, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 14, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 15, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 16, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 17, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 18, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 18, src: '/assets/child.jpg', alt: 'Image 10' },
  { id: 20, src: '/assets/child.jpg', alt: 'Image 10' },
]; */

export const revalidate = 400 // Revalidate every 5 minutes

export default async function GalleryPage() {
 const data = await fetchImage()
 console.log(data)

  return (
    <div className=' bg-white z-0'>
    <div className="min-h-screen mt-[82px] ">
      <BentoGridGallery images={data}/>
    </div>
    </div>
  )
}
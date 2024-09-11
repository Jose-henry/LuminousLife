import Link from 'next/link'
import photos, { Photo } from '@/lib/photos'
import PhotoCard from '@/components/gallery_components/PhotoCard'
import { fetchImage } from '@/lib/actions/image';






export async function generateStaticParams() {
  const data = await fetchImage()
  return data.map((photo: Photo) => ({
    id: photo.id
  }))
}




export default async function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {
  // Convert photo.id to string for comparison
  const data = await fetchImage()
  const photo: Photo | undefined = data.find((p: Photo) => p.id === id)!
 

  if (!photo) {
    return (
      <section className="py-24">
        <div className="container">
          <p>Photo not found</p>
          <Link href='/photos' className='font-semibold italic text-sky-600 underline'>
            Back to photos
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/gallery'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to photos
          </Link>
        </div>

        <div className='mt-10 w-1/3'>
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  )
}

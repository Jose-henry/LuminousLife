import Modal from '@/components/gallery_components/Modal'
import PhotoCard from '@/components/gallery_components/PhotoCard'
import { Photo } from '@/lib/photos'
import { fetchImage } from '@/lib/actions/image';




export async function generateStaticParams() {
  const data = await fetchImage()
  return data.map((photo: Photo) => ({
    id: photo.id
  }))
}





export default async function PhotoModal({
  params: { id }
}: {
  params: { id: string }
}) {

  const data = await fetchImage()
 const photo: Photo | undefined = data.find((p: Photo) => p.id === id)!

  return (
    <Modal>
    {photo && <PhotoCard photo={photo} />}
  </Modal>
  )
}
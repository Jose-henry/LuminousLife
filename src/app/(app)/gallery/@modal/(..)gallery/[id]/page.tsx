"use server"
import Modal from '@/components/gallery_components/Modal'
import PhotoCard from '@/components/gallery_components/PhotoCard'
import photos, { Photo } from '@/lib/photos'
import { fetchImage } from '@/lib/actions/image';
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
import { Metadata } from "next";
import GalleryPage from "@/components/gallery_component/gallery";

export const metadata: Metadata = {
  title: "Gallery",
};



export default function Gallery() {
  return <GalleryPage />;
}

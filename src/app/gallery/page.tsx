import { Metadata } from "next";
import ClientGallery from "@/components/gallery_components/ClientGallery";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Gallery() {
    return <ClientGallery />;
}

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Luminous Life Foundation Gallery",
    template: "%s | Luminous Life Foundation",
  },
  icons: {
    icon: "/assets/sent.svg",
  },
  
  description: "An NGO Website",
};

export default function GalleryLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
        {children}
        {modal}  
      </>

  );
}

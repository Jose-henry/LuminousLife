import type { Metadata } from "next";
import "./globals.css";
import {Nunito, Sansita } from 'next/font/google';
import Topbar from "@/components/shared/TopBar/topBar";
import FooterDiv from "@/components/shared/Footer/footer";

// Configure Nunito
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'], // Specify the weights you want
  style: ['normal', 'italic'], // Specify the styles you want
  variable: '--font-nunito',
});

const finlandacia = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-finlandacia',
});


export const metadata: Metadata = {
  title: {
    default: "Luminous Life Foundation",
    template: "%s | Luminous Life Foundation",
  },
  icons: {
    icon: "/favicon.png",
  },
  
  description: "An NGO Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full flex flex-col justify-between ${finlandacia.variable} ${nunito.variable}`}>
        <Topbar/>
        {children}
        <FooterDiv/>
      </body>
    </html>
  );
}

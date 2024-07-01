import type { Metadata } from "next";
import "./globals.css";
import {Nunito, Sansita } from 'next/font/google';
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
  title: "Article | Luminous Life Foundation",
  icons: {
    icon: "/assets/sent.svg",
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
      <body className={`h-full ${finlandacia.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}

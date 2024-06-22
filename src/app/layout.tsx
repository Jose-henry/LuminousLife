import type { Metadata } from "next";
import "./globals.css";
import { FloatingNavDemo } from "@/components/shared/Navbar";
import { Salsa, Nunito, Raleway } from 'next/font/google';

const salsa = Salsa({
  subsets: ['latin'],
  weight: '400', // Salsa only has '400' weight
  variable: '--font-salsa', // Define a CSS variable for the font
});

// Configure Nunito
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you want
  style: ['normal', 'italic'], // Specify the styles you want
  variable: '--font-nunito',
});

// Configure Raleway
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: "Luminous Life Foundation",
  description: "An NGO Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${salsa.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}

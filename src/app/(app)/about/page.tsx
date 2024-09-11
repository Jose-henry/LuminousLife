// src/app/about/page.tsx
import ClientAbout from "@/components/about_components/ClientAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return <ClientAbout />;
}

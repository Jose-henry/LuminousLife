import { Metadata } from "next";
import ClientContact from "@/components/contact_components/ClientContact";

export const metadata: Metadata = {
  title: "Contact",
};



export default function Contact() {
  return <ClientContact />;
}

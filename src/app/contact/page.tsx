import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Contact",
};



import Form from "@/components/contact_components/contact_form/conatct_form";
import Picture from "@/components/contact_components/picture";

export default function Contact() {
  return (
    <div>
      <Picture/>
      <Form/>
    </div>
  );
}

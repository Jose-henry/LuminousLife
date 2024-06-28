import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Contact",
};



import Form from "@/components/contact_components/contact_form/conatct_form";
import Picture from "@/components/contact_components/picture";
import Final from "@/components/contact_components/contact_about/contact_about";

export default function Contact() {
  return (
    <div>
      <Picture/>
      <Form/>
      <Final/>
    </div>
  );
}

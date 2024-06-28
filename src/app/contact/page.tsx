import { Metadata } from "next";
import Form from "@/components/contact_components/contact_form/conatct_form";
import Picture from "@/components/contact_components/picture";
import Final from "@/components/contact_components/contact_about/contact_about";

export const metadata: Metadata = {
  title: "Contact",
};



export default function Contact() {
  return (
    <div>
      <Picture/>
      <Form/>
      <Final/>
    </div>
  );
}

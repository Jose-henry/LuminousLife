import { Metadata } from "next";
import Form from "@/components/contact_components/contact_form/conatct_form";
import Picture from "@/components/contact_components/picture";
import Final from "@/components/contact_components/contact_about/contact_about";
import getBase64 from "@/utils/getBase64";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

export const metadata: Metadata = {
  title: "Contact",
};



export default async function Contact() {

  const buffer = await fs.readFile('./public/assets/office2.jpg') //npm i plaiceholder and npm i @plaiceholder/next, then update config

  const { base64 } = await getPlaiceholder(buffer)

  //OR

  //const blurredData = await getBase64('/assets/office2.jpg')

  return (
    <div>
      <Picture blurdata={base64}/>
      <Form/>
      <Final/>
    </div>
  );
}

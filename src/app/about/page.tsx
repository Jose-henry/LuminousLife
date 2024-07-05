// src/app/about/page.tsx


import Project from "@/components/about_components/Projects/project";
import AB from "@/components/about_components/about_mission/ab";
import Donate from "@/components/about_components/donate/donate";
import Story from "@/components/about_components/story/story";
import Testimonial from "@/components/about_components/testimonial_section/testimonial";
import { Metadata } from "next";
//import { getPlaiceholder } from "plaiceholder";




// Define the metadata for the About page
export const metadata: Metadata = {
  title: "About",
};

export default async function About() {
/* 

//dyanamic images placeholder
  const buffer = await fetch('https://images.unsplash.com/photo-1720042710169-d56037e5489e?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D').then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer);

  console.log('base64', base64);
 */
  
  

  return (
    <div className="w-full pt-[10px] mb-[100px]">
      <AB />
      <Story />
      {/* Pass only the necessary project IDs */}
      <Project communityProjectId={4} educationProjectId={5}/>
      <Testimonial />
      <Donate />
    </div>
  );
}

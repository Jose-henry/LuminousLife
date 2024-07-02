// src/app/about/page.tsx

import Project from "@/components/about_components/Projects/project";
import AB from "@/components/about_components/about_mission/ab";
import Donate from "@/components/about_components/donate/donate";
import Story from "@/components/about_components/story/story";
import Testimonial from "@/components/about_components/testimonial_section/testimonial";
import getContent from "@/lib/actions/cms.action";
import { Metadata } from "next";

// Define the metadata for the About page
export const metadata: Metadata = {
  title: "About",
};

export default async function About() {

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

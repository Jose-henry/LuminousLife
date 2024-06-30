import AB from "@/components/about_components/about_mission/ab";
import Donate from "@/components/about_components/donate/donate";
import Story from "@/components/about_components/story/story";
import Testimonial from "@/components/about_components/testimonial_section/testimonial";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "About",
};




export default function About() {
  return (
      <div className="w-full pt-[10px] mb-[100px]">
        <AB/>
        <Story/>
        <Testimonial/>
        <Donate/>
      </div>
  );
}

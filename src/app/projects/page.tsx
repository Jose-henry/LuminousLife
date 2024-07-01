import Future from "@/components/project_components/committed/committed";
import Gallery from "@/components/project_components/gallery_component/gallery";
import Intro from "@/components/project_components/intro_component/intro";
import Outline from "@/components/project_components/project_outline/outline";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Projects",
};




export default function Projects() {
  return (
      <div className="w-full mt-[58px]">
        <Intro/>
        <Gallery/>
        <Outline/>
        <Future/>
      </div>
  );
}

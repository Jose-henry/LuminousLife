import AB from "@/components/about_components/about_mission/ab";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "About",
};




export default function About() {
  return (
      <div className="w-full pt-[10px] mb-[100px]">
        <AB/>
      </div>
  );
}

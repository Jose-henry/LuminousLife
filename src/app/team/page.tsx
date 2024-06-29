import Picture from "@/components/team_components/pictures/pictures";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Team",
};




export default function Team() {
  return (
      <div className="w-full pt-[10px] mb-[100px]">
        <Picture/>
      </div>
  );
}

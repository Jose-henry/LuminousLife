import Picture from "@/components/team_components/pictures/pictures";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Team",
};




export default function Team() {
  return (
      <div className="w-full mb-[100px] mt-[50px]">
        <Picture/>
      </div>
  );
}

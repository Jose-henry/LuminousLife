import Picture from "@/components/team_components/pictures/pictures";
import Join from "@/components/team_components/team_text/team_text";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Team",
};




export default function Team() {
  return (
      <div className="w-full mb-[100px] mt-[50px]">
        <Picture/>
        <Join/>
      </div>
  );
}

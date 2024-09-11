import Picture from "@/components/team_components/pictures/pictures";
import Join from "@/components/team_components/team_text/team_text";
import { Metadata } from "next";
import styles from './team.module.css';


export const metadata: Metadata = {
  title: "Team",
};




export default function Team() {
  return (
      <div className={`w-full pb-7 mt-[73px] relative ${styles.container}`}>
        <div className="w-full h-[400px] bg-[#FBF6EF] absolute -z-10"></div>
        <Picture/>
        <Join/>
        <div className="w-full h-[400px] bg-[#FBF6EF] absolute -z-10 bottom-0"></div>
      </div>
  );
}

import Teach from "@/components/teach_components/teach";
import { Metadata } from "next";
import styles from '../article.module.css';



export const metadata: Metadata = {
    title: "Empowering young minds on Solar Energy",
};




export default function Education() {
  return (
    <div  className={`w-full mt-[73px] bg-white ${styles.main}`}>
      <Teach/>
  </div>
  );
}

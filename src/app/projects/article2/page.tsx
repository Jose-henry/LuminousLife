import GberefuVisit from "@/components/gberefu_components/gberefu";
import { Metadata } from "next";
import styles from '../article.module.css';


export const metadata: Metadata = {
    title: "Gberefu in the Dark",
};




export default function Gberefu() {
  return (
    <div  className={`w-full mt-[73px] bg-white ${styles.main}`}>
      <GberefuVisit/>
  </div>
  );
}

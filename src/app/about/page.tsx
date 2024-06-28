import { Metadata } from "next";




export const metadata: Metadata = {
  title: "About",
};




export default function About() {
  return (
      <div className="w-full h-full border-[2px] border-black pt-[100px]">
        <p className="text-black">About</p>
      </div>
  );
}

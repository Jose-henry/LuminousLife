import AboutDiv from "@/components/home_components/about";
import ApplyDiv from "@/components/home_components/apply-div";
import ImpactDiv from "@/components/home_components/impact";
import IntroDiv from "@/components/home_components/intro";
import MissionDiv from "@/components/home_components/mission";
import SlantDiv1 from "@/components/home_components/slant1";
import SlantDiv2 from "@/components/home_components/slant2";
import TestimonialDiv from "@/components/home_components/testimonial";
import FooterDiv from "@/components/shared/Footer";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="relative w-full">
      <IntroDiv/>
        <div>
        <AboutDiv/>
        <SlantDiv1/>
      </div>
      <MissionDiv/>
      <SlantDiv2/>
      <h2 className="text-[64px] text-[#622D25] opacity-[40%] absolute top-[2536px] left-[44px]">Join the Solar Revolution!!!</h2>
      <ImpactDiv/>
      <h2 className="opacity-[40%] text-[#622D25] absolute top-[3585px] left-[649px]">Power Up with Solar!</h2>
      <Image src="/assets/testimonial-bg.svg" alt="Picture" height={462} width={462} className="absolute top-[3739px] left-[260px]"></Image>
      <TestimonialDiv/>
      <ApplyDiv/>
      <Image src="/assets/apply2.svg" alt="Picture" height={1162} width={1024} className="absolute top-[4834px] left-[50%] transform -translate-x-1/2 -z-10"></Image>
      <FooterDiv/>
    </div>
  );
}

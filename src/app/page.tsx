import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/home_components/HeroSection/hero";
import About from "@/components/home_components/About/about";
import Mission from "@/components/home_components/Mission/mission";
import PageText from "@/components/home_components/Mission/pageText";
import Impact from "@/components/home_components/Impact/impact";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero/>
      <About/>
      <Mission/>
      <PageText/>
      <Impact/>
    </div>
  );
}

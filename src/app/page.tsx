import Hero from "@/components/home_components/HeroSection/hero";
import PageText2 from "@/components/PageText/pageText2";
import Testimonial from "@/components/home_components/Testimonial/testimonial";
import styles from './page.module.css';
import About from "@/components/home_components/AboutSection/about";
import Mission from "@/components/home_components/MissionStatement/mission";

export default function Home() {
  return (
    <div className="relative w-full bg-[#F8CA39]">
      <Hero/>
      <About/>
      <Mission/>
    </div>
  );
}

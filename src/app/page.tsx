import Hero from "@/components/home_components/HeroSection/hero";
import PageText2 from "@/components/PageText/pageText2";
import Testimonial from "@/components/home_components/Testimonial/testimonial";
import styles from './page.module.css';
import About from "@/components/home_components/AboutSection/about";

export default function Home() {
  return (
    <div className="relative w-full bg-[#f6eedf] pb-[80px]">
      <Hero/>
      <About/>
    </div>
  );
}

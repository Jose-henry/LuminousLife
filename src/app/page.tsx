import Hero from "@/components/home_components/HeroSection/hero";
import About from "@/components/home_components/About/about";
import Mission from "@/components/home_components/Mission/mission";
import PageText from "@/components/home_components/Mission/pageText";
import Impact from "@/components/home_components/Impact/impact";
import PageText2 from "@/components/PageText/pageText2";
import Testimonial from "@/components/home_components/Testimonial/testimonial";
import Apply from "@/components/home_components/Apply/apply";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero/>
      <About/>
      <Mission/>
      <PageText/>
      <Impact/>
      <PageText2/>
      <Testimonial/>
      <Apply/>
    </div>
  );
}

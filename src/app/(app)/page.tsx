import Hero from "@/components/home_components/HeroSection/hero";
import PageText2 from "@/components/PageText/pageText2";
import About from "@/components/home_components/AboutSection/about";
import Mission from "@/components/home_components/MissionStatement/mission";
import Impact from "@/components/home_components/ImpactSection/impact";
import Contribute from "@/components/home_components/ContributeSection/contribute";
import Improve from "@/components/home_components/ImproveSection/improve";
import Update from "@/components/home_components/UpdateSection/update";

export default function Home() {
  return (
    <div className="relative w-full bg-[#ffde74]">
      <Hero/>
      <About/>
      <Mission/>
      <Impact/>
      <Contribute/>
      <PageText2/>
      <Improve/>
      <Update/>
    </div>
  );
}

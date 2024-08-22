'use client';
import { useEffect } from 'react';
import Project from "@/components/about_components/Projects/project";
import AB from "@/components/about_components/about_mission/ab";
import Donate from "@/components/about_components/donate/donate";
import Story from "@/components/about_components/story/story";
import Testimonial from "@/components/about_components/testimonial_section/testimonial";

export default function ClientAbout() {

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#donate") {
        const donateElement = document.getElementById("donate-section");
        if (donateElement) {
          donateElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (hash === "#story") {
        const storyElement = document.getElementById("our-story");
        if (storyElement) {
          storyElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (hash === "#testimony") {
        const testimonialElement = document.getElementById("testimonial");
        if (testimonialElement) {
          testimonialElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Initial check when the component mounts
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);


  return (
    <div className={`w-full pt-[10px] mb-[40px]`}>
      <AB />
      <div id="our-story">
        <Story />
      </div>
      <div id="our-projects">
        <Project />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="donate-section">
        <Donate />
      </div>
    </div>
  );
}
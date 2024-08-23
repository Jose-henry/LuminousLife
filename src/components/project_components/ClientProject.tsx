'use client';

import { useEffect } from 'react';

import Gallery from "@/components/project_components/gallery_component/gallery";
import Intro from "@/components/project_components/intro_component/intro";
import Outline from "@/components/project_components/project_outline/outline";
import styles from './clientProject.module.css'


export default function ClientProject() {
  
    useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash === "#project") {
          const donateElement = document.getElementById("project-section");
          if (donateElement) {
            donateElement.scrollIntoView({ behavior: "smooth" });
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
        <div className={`w-full mt-[73px] ${styles.main}`}>
          <Intro/>
          <Gallery/>
          <div id="project-section">
             <Outline/>
          </div>
        </div>
    );
  }

"use client";

import { useEffect } from 'react';
import Form from "@/components/contact_components/contact_form/conatct_form";
import Picture from "@/components/contact_components/picture";
import Final from "@/components/contact_components/contact_about/contact_about";


export default function ClientContact() {

    useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash === "#contact") {
            const contactElement = document.getElementById("contact-form");
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: "smooth" });
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
    <div>
      <Picture/>
      <div id="contact-form">
        <Form/>
      </div>
      <Final/>
    </div>
  );
}

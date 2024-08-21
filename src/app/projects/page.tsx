
import ClientProject from "@/components/project_components/ClientProject";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Projects",
};


export default function Projects() {
  return <ClientProject />;
}


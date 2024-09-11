import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          //src={item.src}
          description={item.description}
          alt={item.title}
          
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
   
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
   
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
   
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
   
  },
  
 
];

'use client';
import { useRef } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styles from './gallery.module.css'

interface CardProps {
  image: string;
  caption: string;
}

const Card: React.FC<CardProps> = ({ image, caption }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden h-[300px] min-w-[300px] bg-[white] flex justify-center items-center">
        <Image src={image} alt={caption} fill style={{ objectFit: "cover" }} />
      </div>
      <p className="text-center text-sm font-semibold mt-2">{caption}</p>
    </div>
  );
};

const images = [
  { src: '/assets/education.jpg', caption: "Education" },
  { src: '/assets/agriculture.jpg', caption: "Farming" },
  { src: '/assets/water.jpg', caption: "Clean Water" },
  { src: '/assets/fishing.jpg', caption: "Fishing" },
  { src: '/assets/roads.jpg', caption: "Good Roads" },
  { src: '/assets/market-life.jpg', caption: "Improved Market Life" },
  { src: '/assets/education1.jpg', caption: "Education" },
  { src: '/assets/farming1.jpg', caption: "Farming" },
  { src: '/assets/water1.jpg', caption: "Clean Water" },
  { src: '/assets/fishing1.jpg', caption: "Fishing" },
  { src: '/assets/road1.jpg', caption: "Good Roads" },
  { src: '/assets/market1.jpg', caption: "Improved Market Life" },
];

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance as needed
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <main className="py-4 pb-2">
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={() => handleScroll("left")}
        >
          <AiOutlineLeft size={24} />
        </button>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10`}
          onClick={() => handleScroll("right")}
        >
          <AiOutlineRight size={24} />
        </button>
        <div
          className={`flex gap-4 overflow-x-scroll overflow-y-hidden ${styles.no_scrollbar}`}
          ref={scrollRef}
        >
          {images.map((item, idx) => (
            <Card image={item.src} caption={item.caption} key={idx} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;

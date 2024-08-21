'use client';
import { animate, useMotionValue, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useMeasure from "react-use-measure";

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

const FAST_DURATION = 15; 
const SLOW_DURATION = 25;


const Gallery: React.FC = () => {
  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 0.375 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration + 10,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <main className="py-4 pb-2">
      <div className="sticky top-[73px]">
        <motion.div
          className="flex gap-4"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION + 10);
          }}
        >
          {[...images, ...images].map((item, idx) => (
            <Card image={item.src} caption={item.caption} key={idx} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Gallery;
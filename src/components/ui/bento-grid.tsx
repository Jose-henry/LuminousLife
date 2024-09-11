import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-[82px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    className,
    description,
    src,
    alt,
  }: {
    className?: string;
    description?: string | React.ReactNode;
    src?: string;
    alt?: string;
  }) => {
    return (
      <div
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative ",
          className
        )}
      >
        {/* Make sure the parent div has a relative position */}
       
          <Image 
            src={src || "/assets/child.jpg"}
            alt={alt || "image"}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105 rounded-xl "
          />
        
        <div className="group-hover/bento:translate-x-2 transition duration-200 ">
          <div className="font-finlandacia sfont-normal text-white text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    );
  };
  
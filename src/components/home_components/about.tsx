import Image from "next/image";

export default function AboutDiv() {
    return (
        <div className="w-[90%] md:w-full h-[381px] absolute top-[860px] left-[50%] transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-12"> 
            <div className="w-full h-full flex flex-col justify-center">
                <h2 className="text-[#622D25] text-3xl md:text-4xl mb-4 md:mb-6">Who we are</h2>
                <p className="text-[#622D25] text-lg md:text-[21px] mb-4 md:mb-6">
                    At Luminous Life Foundation, we focus on delivering solar energy solutions to rural communities.
                </p>
                <p className="text-[#622D25] text-lg md:text-[21px]">
                    Our goal is to provide sustainable, renewable energy that empowers people, improves their quality of life, and fosters environmental stewardship.
                </p>
            </div>
            <div className="relative h-full rounded-3xl overflow-hidden flex">
                <Image
                    src="/assets/about-bg.png"
                    alt="About Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <div className="bg-[#6F2B1EB2] bg-opacity-75 absolute inset-0"></div>
                <div className="flex flex-col items-center justify-center text-center text-[#FBFFE7] p-6 md:p-10 z-10">
                    <h2 className="text-3xl md:text-4xl mb-4 md:mb-6 z-10">Get to Know Us</h2>
                    <p className="text-lg md:text-xl z-10">
                        Discover how we started and the journey that drives our mission to light up lives with solar energy.
                    </p>
                </div>
            </div>
        </div>
    );
}

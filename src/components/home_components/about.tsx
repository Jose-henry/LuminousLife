import Image from "next/image";

export default function AboutDiv() {
    return (
        <div className="w-[1400px] h-[381px] absolute top-[1090px] left-[50%] transform -translate-x-1/2 flex justify-between"> 
            <div className="w-[569px] h-full flex flex-col justify-between">
                <h2 className="text-[#622D25]">Who we are</h2>
                <h3 className="text-[#622D25]">
                    At Luminous Life Foundation, we focus on delivering solar energy solutions to rural communities.
                </h3>
                <h3 className="text-[#622D25]">
                    Our goal is to provide sustainable, renewable energy that empowers people, improves their quality of life, and foster environmental stewardship.
                </h3>
            </div>
            <div className="w-[680px] h-full relative flex justify-center items-center" style={{ backgroundImage: `url("/assets/about-bg.png")` }}>
                <div className="bg-[#6F2B1EB2] w-[680px] h-[381px] rounded-3xl absolute"></div>
                <div className="flex flex-col items-center z-10 gap-[43px] w-[670px]">
                    <h2 className="text-[#FBFFE7]">Get to Know Us</h2>
                    <h3 className="text-[#FBFFE7] text-center">
                        Discover how we started and the journey that drives our mission to light up lives with solar energy.
                    </h3>
                </div>
            </div>
        </div>
    );
}

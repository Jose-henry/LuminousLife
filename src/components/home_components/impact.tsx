import Image from "next/image";

export default function ImpactDiv() {
    return (
        <div className="w-[1396px] h-[818px] absolute top-[2690px] left-[50%] transform -translate-x-1/2 flex flex-col justify-between pb-2"> 
            <div className="w-full h-[204px] flex gap-[24px] flex-col">
                <h2 className="text-[#622D25]">Our Impact</h2>
                <h3 className="text-[#622D25]">
                    We are proud of the positive changes we bring to communities. Here are some of our key achievements in empowering lives through sustainable solar energy solutions.
                </h3>
            </div>
            <div style={{ boxShadow: "5px 5px 0 0 #773529" }} className="border-[2px] border-[#622D25] w-full h-[590px] rounded-[48px] bg-[#FBF6EF] flex justify-center items-center">
                <div className="w-[1289px] h-[454px] mx-auto flex justify-between">
                    {/* Card 1 */}
                    <div className="w-[397px] h-[454px] bg-[#773529] rounded-3xl p-10 flex flex-col justify-between">
                        <h2 style={{ lineHeight: '38.4px' }} className="text-[32px] text-[#FBFFE7] font-google_font">Solar Panels Installed</h2>
                        <h2 style={{ lineHeight: '76.8px' }} className="text-[64px] text-[#FBFFE7]">10,000+</h2>
                        <h3 style={{ lineHeight: '33.6px' }} className="text-[#FBFFE7]">More than 10,000 solar panels have been installed, bringing sustainable energy to homes, schools, and healthcare facilities.</h3>
                    </div>
                    {/* Card 2 */}
                    <div className="w-[397px] h-[454px] border-[2px] border-[#371511] rounded-3xl p-7 flex flex-col justify-between">
                        <h2 style={{ lineHeight: '38.4px' }} className="text-[32px] text-[#622D25] text-center">Communities Reached</h2>
                        <h2 style={{ lineHeight: '115.2px' }} className="text-[80px] text-[#622D25] text-center">50+</h2>
                        <h3 style={{ lineHeight: '33.6px' }} className="text-[#622D25] text-center">We have provided solar energy solutions to over 50 communities across Nigeria, improving access to electricity and quality of life.</h3>
                    </div>
                    {/* Card 3 */}
                    <div className="w-[397px] h-[454px] bg-[#773529] rounded-3xl p-10 flex flex-col justify-between">
                        <h2 style={{ lineHeight: '38.4px' }} className="text-[32px] text-[#FBFFE7] text-center">Reduction in Carbon Footprint</h2>
                        <h2 style={{ lineHeight: '48px' }} className="text-[40px] text-[#FBFFE7] text-center">20,000 Tons</h2>
                        <h3 style={{ lineHeight: '33.6px' }} className="text-[#FBFFE7] text-center">We have helped reduce carbon emissions by 20,000 tons annually through our solar energy initiatives.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

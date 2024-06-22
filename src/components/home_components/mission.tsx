import Image from "next/image";

export default function MissionDiv() {
    return (
        <div  style={{ boxShadow: "5px 5px 0 0 #773529" }} className="w-[1400px] h-[466px] border-[2px] border-[#622D25] rounded-[48px] absolute top-[1916.42px] flex justify-center items-center left-[50%] transform -translate-x-1/2 bg-[#FBF6EF] z-20">
            <div className="h-[370px] w-[1360px] flex justify-between">
                <div className="w-[565px] h-[370px] border-[2px] border-[#622D25] bg-[#773529] rounded-3xl flex flex-col items-center justify-center gap-[22px]">
                    <h2 className="text-[#FBFFE7]">Our Mission</h2>
                    <h3 className="text-[#FBFFE7] w-[450px] text-center">Empowering underserved communities in Nigeria through sustainable energy solutions and fostering overall well-being</h3>
                </div>
                <div className="w-[675px] h-[370px] flex flex-col justify-between">
                    <h2 className="text-[#622D25] text-center">Our Values</h2>
                    <div className="h-[219px] flex items-center justify-center">
                        <div className="w-[450px] h-full flex flex-wrap justify-center gap-[12px]">
                            <div className="w-[148px] h-[101px] border-[2px] border-[#000000] bg-[#FFFFFF] rounded-[24px] flex justify-center items-center">
                                <div className="flex gap-[12px] items-center">
                                    <Image src="/assets/equity.svg" width={24} height={24} alt="Equity logo"></Image>
                                    <h4 className="text-[#622D25]">Equity</h4>
                                </div>
                            </div>
                            <div className="w-[290px] h-[101px] border-[2px] border-[#000000] bg-[#FFFFFF] rounded-[24px] flex justify-center items-center">
                                <div className="flex gap-[12px] items-center">
                                    <Image src="/assets/empowerment.svg" width={24} height={24} alt="Empowerment logo"></Image>
                                    <h4 className="text-[#622D25]">Empowerment</h4>
                                </div>
                            </div>
                            <div className="w-[283px] h-[101px] border-[2px] border-[#000000] bg-[#FFFFFF] rounded-[24px] flex justify-center items-center ">
                                <div className="flex gap-[8px] items-center">
                                    <Image src="/assets/equity.svg" width={24} height={24} alt="Transparency logo"></Image>
                                    <h5 className="text-[#622D25]">Transparency and Accountability</h5>
                                </div>
                            </div>
                            <div className="w-[148px] h-[101px] border-[2px] border-[#000000] bg-[#FFFFFF] rounded-[24px] flex justify-center items-center">
                            <div className="flex gap-[3px] items-center">
                                    <Image src="/assets/sustainability.svg" width={24} height={24} alt="Sustainability logo"></Image>
                                    <h5 className="text-[#622D25]">Empowerment</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

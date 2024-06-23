import Image from "next/image";

export default function Topbar() {
    return (
        <div className="h-[60px] bg-[#622D25] flex items-center gap-[12px] px-[20px] py-[10px]">
            <div className="flex items-center gap-[12px]">
                <Image
                    src="/assets/logo.svg"
                    width={40}
                    height={40}
                    alt="Logo icon"
                    className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]"
                />
                <h3 className="text-[#FBFFE7] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[19px] font-semibold">
                    Luminous Life Foundation
                </h3>
            </div>
        </div>
    );
}


import Image from "next/image";
import Link from "next/link";

export default function FooterDiv() {
  return (
    <div className="w-[1385px] h-[595px] border-[2px] border-[#371511] rounded-[48px] bg-[#773529] absolute top-[5935px] left-[50%] transform -translate-x-1/2 flex flex-col justify-between">
      <div className="w-full h-[502px] flex">
        <Image src="/assets/footer-img.svg" alt="Sun Illustration" width={500} height={502} className="rounded-tl-[48px]"></Image>
        <div className="w-[885px] h-full">
            <div className="w-full h-[233px] relative">
                <div className="w-[100px] absolute top-[70px] left-[70px] flex flex-col gap-2" style={{ fontFamily: `var(--font-nunito), sans-serif` }}>
                    <Link href="/home" className="text-[14px] font-semibold text-[#F3E5D2] hover:underline">HOME</Link>
                    <Link href="/about" className="text-[14px] font-semibold text-[#F3E5D2] hover:underline">ABOUT</Link>
                    <Link href="/contact" className="text-[14px] font-semibold text-[#F3E5D2] hover:underline">CONTACT US</Link>
                </div>
            </div>
            <div className="w-full h-[269px] border-t-[2px] border-t-[#F3E5D2] grid grid-cols-3">
                <div className="border-r-[1px] border-r-[#F3E5D2] flex flex-col items-center justify-center gap-2">
                    <Link href="/contact">
                        <Image src="/assets/message.svg" alt="Star icon" width={139} height={104}></Image>
                    </Link>
                    <p className="text-[#F3E5D2] text-[14px]">SEND US A</p>
                    <h3 className="text-[#F3E5D2] text-[28px]">MESSAGE</h3>
                </div>
                <div className="border-r-[1px] border-r-[#F3E5D2] flex flex-col items-center justify-center gap-2">
                    <Link href="https://www.instagram.com/luminous_life_foundation?igsh=MzBpaWVrODV4Nmxs">
                        <Image src="/assets/instagram.svg" alt="Star icon" width={104} height={104}></Image>
                    </Link>
                    <p className="text-[#F3E5D2] text-[14px]">FOLLOW US ON</p>
                    <h3 className="text-[#F3E5D2] text-[28px]">INSTAGRAM</h3>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Link href="https://www.linkedin.com/company/luminous-life-foundation/">
                        <Image src="/assets/linkedin.svg" alt="Star icon" width={102} height={102}></Image>
                    </Link>
                    <p className="text-[#F3E5D2] text-[14px]">FOLLOW US ON</p>
                    <h3 className="text-[#F3E5D2] text-[28px]">LINKEDIN</h3>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full h-[40px] border-y-[2px] border-y-[#FBFFE7] flex overflow-hidden relative items-center">
        <div className="absolute flex gap-1 items-center animate-marquee whitespace-nowrap">
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          {/* Additional duplicates */}
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23}></Image>
          <p className="text-[14px]">Empowering Communities, Illuminating Futures</p>
          {/* Even more duplicates if needed */}
        </div>
      </div>
      <p className="text-[#FBFFE7] p-4 text-[14px]">&copy; Luminous Life Foundation. All Rights Reserved.</p>
    </div>
  );
}

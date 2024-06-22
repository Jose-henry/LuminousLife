import Image from "next/image";

interface Props {
    name: string;
    role: string;
    state: string;
    testimonial: string;
}

export default function Testimonial({ name, role, state, testimonial }: Props) {
    return (
        <div className="w-[1177px] h-[204px] py-0 px-0">
            <h2 className="text-[#622D25] text-[40px]">{name}</h2>
            <h3 className="text-[#622D25] text-[16px]">{role}, {state}</h3>
            <p className="text-[#773529] text-[28px] font-normal">&ldquo;{testimonial}&rdquo;</p>
        </div>
    );
}

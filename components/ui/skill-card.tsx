import React from "react";
import Image from "next/image";
import { roboto_cond } from "@/app/fonts";

interface SkillCardProps {
    logo: string;
    description: string;
    width: number;
    height: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ logo, description, width, height }) => {
    return (
        <>
            <div className="w-52 h-16 bg-grey-20 flex justify-around items-center rounded-sm">
                <Image src={logo} alt={description} width={width} height={height} />
                <p className={`${roboto_cond.className} text-white text-xl`}>{description}</p>
            </div>
        </>
    )
}

export default SkillCard
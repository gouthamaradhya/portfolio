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
            <div className="hover:scale-125 transform transition duration-200 will-change-transform">
                <div className="flex justify-center items-center">
                    <div className="w-24 h-20 flex justify-center items-center">
                        <Image src={logo} alt={description} width={width} height={height} draggable="false" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className={`${roboto_cond.className} text-white text-xl`}>{description}</p>
                </div>
            </div>
        </>
    )
}

export default SkillCard
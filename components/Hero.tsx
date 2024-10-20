import React from "react";
import { roboto_cond } from "@/app/fonts";
import { archivo_black } from "@/app/fonts";
import Image from "next/image";


const Hero = () => {
    return (
        <>
            <div className="pt-44 left-0 sm:h-screen sm:flex flex-row-reverse justify-between items-center snap-start">
                <div className="flex justify-center mb-10 sm:w-fit sm:mr-36">
                    <Image src="/images/profile_photo.svg" alt="Profile Photo" width={300} height={450} className="" />
                </div>
                <div className="sm:w-1/2 ml-7">
                    <p className={`text-teal text-2xl ${roboto_cond.className} w-fit`}>Hello! I am</p>
                    <h1 className={`text-5xl mt-5 ${archivo_black.className} text-white w-fit`}>Goutham Swamy D D</h1>
                    <p className="text-xl text-grey-10 mt-7 mr-7 w-fit">A self-taught developer with a deep interest in AI and Machine Learning.</p>
                    <p className="text-xl text-grey-10 mt-7 mr-7 w-fit">🚀 Currently specializing in Full Stack development with a focus on Frontend technologies like <span className="text-teal">ReactJs</span> and <span className="text-teal">Next.js</span>.</p>
                    <p className="text-xl text-grey-10 mt-7 mr-7 w-fit"> ⚡ Passionate about solving complex problems through innovative tech solutions and building dynamic <span className="text-teal">Web Applications</span>.</p>
                </div>
            </div>
        </>
    )
}

export default Hero;
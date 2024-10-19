import React from "react";
import { roboto_cond } from "@/app/fonts";
import { archivo_black } from "@/app/fonts";


const Hero = () => {
    return (
        <>
            <div className="pt-44 ml-7">
                <p className={`text-teal text-2xl ${roboto_cond.className}`}>Hello! I am</p>
                <h1 className={`text-5xl mt-5 ${archivo_black.className}`}>Goutham Swamy D D</h1>
                <p className="text-xl text-grey-10 mt-7 sm:w-1/2 mr-7">A self-taught developer with a deep interest in AI and Machine Learning.</p>
                <p className="text-xl text-grey-10 mt-7 sm:w-1/2 mr-7">🚀 Currently specializing in Full Stack development with a focus on Frontend technologies like <span className="text-teal">ReactJs</span> and <span className="text-teal">Next.js</span>.</p>
                <p className="text-xl text-grey-10 mt-7 sm:w-1/2 mr-7"> ⚡ Passionate about solving complex problems through innovative tech solutions and building dynamic <span className="text-teal">Web Applications</span>.</p>
            </div>
        </>
    )
}

export default Hero;
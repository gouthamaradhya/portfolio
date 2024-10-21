import React from "react";
import { roboto_cond } from "@/app/fonts";
import { archivo_black } from "@/app/fonts";
import Image from "next/image";
import { Button } from "./ui/button";


const Hero = () => {
    return (
        <>
            <div className="w-full sm:h-screen sm:snap-start ">
                <div className="h-full">
                    <div className="sm:flex flex-row-reverse justify-between items-center pt-36">
                        <div className="flex justify-center sm:w-fit sm:mr-28">
                            <Image src="/images/profile_photo.svg" alt="Profile Photo" width={300} height={450} draggable="false" />
                        </div>
                        <div className="sm:w-2/3 w-full ml-7 mt-10">
                            <p className={`text-teal text-2xl ${roboto_cond.className} w-fit`}>Hello! I am</p>
                            <h1 className={`text-5xl mt-5 ${archivo_black.className} text-white w-fit`}>Goutham Swamy D D</h1>
                            <p className={`${roboto_cond.className} text-2xl text-grey-10 mt-7 mr-7 w-fit`}>🚀 Currently specializing in Full Stack development with a focus on Frontend technologies like <span className="text-teal">ReactJs</span> and <span className="text-teal">Next.js</span>.</p>
                            <p className={`${roboto_cond.className} text-2xl text-grey-10 mt-7 mr-7 w-fit`}>A self-taught developer with a deep interest in AI and Machine Learning.</p>
                            <p className={`${roboto_cond.className} text-2xl text-grey-10 mt-7 mr-7 w-fit`}> ⚡ Passionate about solving complex problems through innovative tech solutions and building dynamic <span className="text-teal">Web Applications</span>.</p>
                        </div>
                    </div>
                    <div className="mt-10 ml-7">
                        <Button asChild className={`bg-teal text-xl text-black ${roboto_cond.className} flex justify-around hover:bg-white hover:text-grey-10`}>
                            <a download className="w-fit" href="/resume.pdf">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                                <p>Download Resume</p>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
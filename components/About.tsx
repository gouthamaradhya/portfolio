import React from "react";
import { archivo_black } from "@/app/fonts";
import { roboto_cond } from "@/app/fonts";


const About = () => {
    return (
        <>
            <div className="sm:h-screen sm:snap-start  w-full " id="about">
                <div className="flex pt-20 justify-center">
                    <h1 className={`text-4xl text-white ${archivo_black.className}`}>About Me</h1>
                </div>
                <div className="flex justify-center mt-3">
                    <div className="bg-green-5 w-36 h-1 rounded-md"></div>
                </div>
                <div className="mt-20">
                    <p className={`text-grey-10 text-2xl leading-relaxed sm:px-10 px-5 ${roboto_cond.className} text-justify`}>
                        Hey there! I’m Goutham Swamy D D, a <span className="text-teal">Full Stack Developer</span> with a passion for creating dynamic and responsive web applications. On the frontend, I bring ideas to life with <span className="text-teal">React</span>  and <span className="text-teal">JavaScript</span>, while on the backend, I ensure seamless functionality using <span className="text-teal">Node.js</span>, <span className="text-teal">Express</span>, and <span className="text-teal">PostgreSQL</span>.
                    </p>
                    <p className={`text-grey-10 text-2xl leading-relaxed sm:px-10 px-5 ${roboto_cond.className} mt-12 text-justify`}>
                        I love solving complex problems with simple, intuitive solutions, whether it’s enhancing user experience, optimizing backend performance, or exploring <span className="text-teal">AI and Machine Learning</span> to create intelligent systems. Building websites is both my profession and my hobby, and I’m always experimenting with new technologies and contributing to open-source projects in my free time.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
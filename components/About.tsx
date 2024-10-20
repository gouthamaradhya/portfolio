import React from "react";
import { archivo_black } from "@/app/fonts";


const About = () => {
    return (
        <>
            <div className="sm:h-screen snap-start">
                <div className="flex justify-center">
                    <h1 className={`text-4xl text-white ${archivo_black.className}`}>About Me</h1>
                </div>
                <div className="mt-20">
                    <p className="text-white text-xl px-10">
                        Hey there! I’m Goutham Swamy D D, a Full Stack Developer with a passion for creating dynamic and responsive web applications. On the frontend, I bring ideas to life with React and JavaScript, while on the backend, I ensure seamless functionality using Node.js, Express, and PostgreSQL.
                        I love solving complex problems with simple, intuitive solutions, whether it’s enhancing user experience, optimizing backend performance, or exploring AI and machine learning to create intelligent systems. Building websites is both my profession and my hobby, and I’m always experimenting with new technologies and contributing to open-source projects in my free time.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
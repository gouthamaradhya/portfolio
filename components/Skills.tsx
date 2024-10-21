import React from "react";
import { archivo_black } from "@/app/fonts";
import SkillCard from "./ui/skill-card";


const Skills = () => {
    return (
        <>
            <div className="sm:h-screen sm:snap-start w-full " id="about">
                <div className="flex pt-20 justify-center">
                    <h1 className={`text-4xl text-white ${archivo_black.className}`}>Skills</h1>
                </div>
                <div className="flex justify-center mt-3">
                    <div className="bg-green-5 w-36 h-1 rounded-md"></div>
                </div>
                <div className="sm:mx-7 mt-14 flex justify-evenly flex-wrap gap-14">
                    <SkillCard logo="/images/html.png" description="HTML" width={40} height={50} />
                    <SkillCard logo="/images/css.png" description="CSS" width={50} height={56} />
                    <SkillCard logo="/images/javascript.svg" description="JavaScript" width={40} height={50} />
                    <SkillCard logo="/images/react.svg" description="ReactJS" width={40} height={50} />
                    <SkillCard logo="/images/nextjs.png" description="NextJS" width={40} height={50} />
                    <SkillCard logo="/images/python.svg" description="Python" width={40} height={50} />
                    <SkillCard logo="/images/java.svg" description="Java" width={40} height={50} />
                    <SkillCard logo="/images/c.svg" description="C Language" width={40} height={50} />
                    <SkillCard logo="/images/nodejs.svg" description="NodeJS" width={55} height={50} />
                    <SkillCard logo="/images/r-lang.svg" description="R Language" width={40} height={50} />
                    <SkillCard logo="/images/postman-icon.svg" description="Postman" width={40} height={50} />
                    <SkillCard logo="/images/tailwindcss-icon.svg" description="TailwindCSS" width={40} height={50} />
                    <SkillCard logo="/images/postgresql.svg" description="PostgreSQL" width={40} height={50} />
                    <SkillCard logo="/images/expo-icon.svg" description="Expo" width={40} height={50} />
                    <SkillCard logo="/images/git-icon.svg" description="Git" width={40} height={50} />
                    <SkillCard logo="/images/mysql.svg" description="MySQL" width={50} height={50} />
                </div>
            </div>

        </>
    );
}

export default Skills
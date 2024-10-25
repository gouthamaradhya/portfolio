import React from "react";
import { archivo_black } from "@/app/fonts";
import SkillCard from "./ui/skill-card";


const Skills = () => {
    return (
        <>
            <div className="w-full" id="skills">
                <div className="flex pt-20 justify-center">
                    <h1 className={`text-4xl text-white ${archivo_black.className}`}>Skills</h1>
                </div>
                <div className="flex justify-center mt-3">
                    <div className="bg-green-5 w-28 h-1 rounded-md"></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="sm:mx-7 mt-14 pl-3 gap-5 sm:w-3/4 flex justify-center flex-wrap sm:gap-9 " draggable="false">
                        <SkillCard logo="/images/html.svg" description="HTML" width={75} height={75} />
                        <SkillCard logo="/images/css.png" description="CSS" width={85} height={75} />
                        <SkillCard logo="/images/javascript.svg" description="JavaScript" width={75} height={75} />
                        <SkillCard logo="/images/react.svg" description="ReactJS" width={75} height={75} />
                        <SkillCard logo="/images/nextjs.svg" description="NextJS" width={75} height={75} />
                        <SkillCard logo="/images/python.svg" description="Python" width={75} height={75} />
                        <SkillCard logo="/images/java.svg" description="Java" width={60} height={50} />
                        <SkillCard logo="/images/c.svg" description="C Language" width={75} height={75} />
                        <SkillCard logo="/images/nodejs.svg" description="NodeJS" width={75} height={75} />
                        <SkillCard logo="/images/r-lang.svg" description="R Language" width={75} height={75} />
                        <SkillCard logo="/images/postman-icon.svg" description="Postman" width={75} height={75} />
                        <SkillCard logo="/images/tailwindcss-icon.svg" description="TailwindCSS" width={75} height={75} />
                        <SkillCard logo="/images/postgresql.svg" description="PostgreSQL" width={75} height={75} />
                        <SkillCard logo="/images/expo-icon.png" description="Expo" width={75} height={75} />
                        <SkillCard logo="/images/git-icon.svg" description="Git" width={75} height={75} />
                        <SkillCard logo="/images/express.png" description="Express" width={75} height={75} />
                        <SkillCard logo="/images/redux.png" description="Redux" width={75} height={75} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Skills
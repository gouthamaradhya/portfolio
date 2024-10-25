import React from "react";
import Image from "next/image";
import { noto } from "@/app/fonts";
import { roboto_cond } from "@/app/fonts";
import { Button } from "@/components/ui/button"


interface ProjectProps {
    title: string;
    description: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    project_image: string;
    git_link: string;

}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image1, image2, image3, image4, image5, project_image, git_link }) => {
    const images = [image1, image2, image3, image4, image5].filter(Boolean);
    return (
        <>
            <div className="sm:w-3/4 w-11/12 h-fit pb-5 rounded-lg bg-grey-20 pt-10 sm:pl-10 pl-5 sm:hover:scale-105 sm:overflow-hidden transform transition duration-300 will-change-transform " >
                <div className="sm:flex sm:gap-5 w-full " >
                    <div className="w-11/12 ">
                        <h1 className={`text-white ${noto.className} text-3xl`}>
                            {title}
                        </h1>
                        <div className="flex w-full items-center mt-5">
                            <p className={`${roboto_cond.className} text-xl text-grey-10`}>Made with:</p>
                            <div className="flex justify-around gap-5 ml-5 items-center">
                                {images.map((image, index) => (
                                    <Image src={image!} alt={`image+${index + 1}`} height={40} width={30} />
                                ))}
                            </div>
                        </div>
                        <p className={`sm:mt-5 text-justify text-grey-10 ${roboto_cond.className}`}>
                            {description}
                        </p>
                    </div>
                    <div className="sm:flex sm:items-center hidden rounded-sm pr-3">
                        <Image src={project_image} alt='project_image' height={700} width={500} />
                    </div>
                </div >
                <div className="mt-5">
                    <a href={git_link} target="_blank" rel="noopener noreferrer" >
                        <Button className="bg-teal  hover:bg-white">
                            <Image src="/images/github-logo.png" width={20} height={20} alt="github icon" className="" />
                            <p className={`text-black ${roboto_cond}.className hover:text-grey-10`}>GitHub</p>
                        </Button>
                    </a>
                </div>

            </div >


        </>
    );

}

export default ProjectCard;
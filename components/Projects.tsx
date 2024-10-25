"use client";
import React from "react";
import { archivo_black } from "@/app/fonts";
import ProjectCard from "./ui/project-card";

const description1 = "In this project, I developed a customer segmentation system for e-commerce platforms to enhance personalized product recommendations. I used both K-means++ and Particle Swarm Optimization (PSO) to cluster customers based on attributes like age, purchase frequency, purchase categories, and rating accuracy. By comparing the performance of these algorithms, I found K-means++ to be more effective for my dataset. The segmented customer groups allow for tailored product suggestions, improving marketing strategies and customer engagement. This project showcases the application of advanced clustering techniques for precision targeting in e-commerce."
const description2 = "This full-stack Flight Reservation System is designed to manage flight bookings efficiently. The application uses React for the front end, providing a seamless user interface, while Node.js powers the backend, ensuring robust server-side functionality. Data is stored in a PostgreSQL database, offering reliable data management for flight details and bookings. A key feature of this system is the implementation of Dijkstra’s algorithm to find the shortest flight routes, optimizing travel paths for users. The RESTful API built with Express.js enables smooth interaction between the frontend and backend, ensuring an efficient and responsive booking experience."

const Project = () => {
    return (
        <>
            <div className="w-full overscroll-contain" id="projects">
                <div className="flex pt-20 justify-center">
                    <h1 className={`text-4xl text-white ${archivo_black.className}`}>Projects</h1>
                </div>
                <div className="flex justify-center mt-3">
                    <div className="bg-green-5 w-28 h-1 rounded-md"></div>
                </div>
                <div className="flex flex-wrap gap-10 pb-5 pt-16 h-fit justify-center overflow-hidden">
                    <ProjectCard title="Precision Targeting" description={description1} image1="/images/python.svg" image2="/images/react.svg" image3="/images/pandas.png" project_image="/images/project1.png" git_link="https://github.com/gouthamaradhya/precision-targeting.git" />
                    <ProjectCard title="Air Voyages" description={description2} image1="/images/react.svg" image2="/images/nodejs.svg" image3="/images/express.png" image4="/images/postgresql.svg" project_image="/images/project2.png" git_link="https://github.com/gouthamaradhya/Air_Voyages.git" />
                </div>
            </div>
        </>
    )
}

export default Project
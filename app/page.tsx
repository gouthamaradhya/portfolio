import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <div className="min-w-full">
        <Navbar />
        <div className="block overflow-y-scroll scroll-smooth w-full overflow-hidden bg-black  overscroll-none">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home
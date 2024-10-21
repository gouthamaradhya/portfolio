import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import About from "@/components/About";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <>
      <div className="min-w-full">
        <Navbar />
        <div className="block h-screen sm:snap-y sm:snap-mandatory overflow-y-scroll scroll-smooth w-full overflow-hidden bg-black">
          <Hero />
          <About />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default Home
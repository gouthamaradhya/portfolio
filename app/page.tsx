import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import About from "@/components/About";

const Home = () => {
  return (
    <>
      <div className="block snap-y snap-mandatory overflow-y-scroll w-screen overflow-x-hidden bg-black">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default Home
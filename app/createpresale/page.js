import Content from "./content/Content";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const page = () => {
  return (
    <div className="mb-10">
      <Navbar />
      <div className="container mx-auto px-10">
        <div className="flex justify-center items-center flex-col gap-10 py-10"> 
          <p className="font-semibold text-[#0075FF] text-xl lg:text-5xl ">
            CREATE YOUR PRESALE
          </p>
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;

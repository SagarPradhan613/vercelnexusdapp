import Content from "./content/Content";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Image from "next/image";
import FEATURED_RIGHT_RINGS from "@/assets/featured_right_rings.png";


const page = () => {
  return (
    <div className="mb-10 min-h-[90vh]"> 
      <Navbar />
      <div className="container mx-auto px-10">
        <div className="flex justify-center items-center flex-col gap-10 py-10 relative"> 
        <Image
        src={FEATURED_RIGHT_RINGS}
        alt="Featured Left Rings"
        className="featured_ellipse_left hidden lg:block absolute w-[800px] h-[800px]"
      />

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

'use client'

import HeroSection from './landing/landingcomp/HeroSection'
import SecondSection from './landing/landingcomp/SecondSection'
import ThirdSection from './landing/landingcomp/ThirdSection'
import ForthSection from './landing/landingcomp/ForthSection'
import FifthSection from './landing/landingcomp/FifthSection'
import SixthSection from './landing/landingcomp/SixthSection'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

export default function Home() {

  return (
    <>
      <div className="pb-16">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <ForthSection></ForthSection>
        <FifthSection></FifthSection>
        <SixthSection></SixthSection>
        <Footer></Footer>
      </div>

    </>
  )
}

'use client'

import { CompletedSales } from "./components/CompletedSales"
import { Featured } from "./components/Featured"
import { Landing } from "./components/Landing"
import { Upcoming } from "./components/Upcoming"
import { AnimatePresence } from 'framer-motion'

import ELLIPSE_TOP_LEFT from '@/assets/ellipse_top_left.png'
import Image from 'next/image'

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Image src={ELLIPSE_TOP_LEFT} alt="Ellipse Top Left" className='absolute -top-36 -left-36' />
      <Landing />
      <Featured />
      <Upcoming />
      <CompletedSales />
    </AnimatePresence>
  )
}

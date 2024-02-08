'use client'

import { CompletedSales } from "./components/CompletedSales" 
import { Featured } from "./components/Featured" 
import { Landing } from "./components/Landing" 
import { Upcoming } from "./components/Upcoming" 
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <Landing />
      <Featured />
      <Upcoming />
      <CompletedSales />
    </AnimatePresence>
  ) 
}

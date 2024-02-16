'use client'


// import { Featured } from "./components/Featured"
// import { Landing } from "./components/Landing"
// import { Upcoming } from "./components/Upcoming"
// import { AnimatePresence } from 'framer-motion'

import ELLIPSE_TOP_LEFT from '@/assets/ellipse_top_left.png'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Landing } from '../components/Landing'
import { Featured } from '../components/Featured'
import { Upcoming } from '../components/Upcoming'
import { CompletedSales } from '../components/CompletedSales'
import UpperFooter from '../components/UpperFooter'



const Launchpad = () => {
    return (
        <>
            <AnimatePresence>
                <Image src={ELLIPSE_TOP_LEFT} alt="Ellipse Top Left" className='absolute -top-36 -left-36' />
                <Landing />
                <Featured />
                <Upcoming />
                <CompletedSales />
                <UpperFooter />
            </AnimatePresence>
        </>
    )
}

export default Launchpad
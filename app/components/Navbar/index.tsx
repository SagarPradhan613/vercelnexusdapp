
'use client'

import { BLUE } from '@/app/constants'
import { Inter, Poppins, ReadexProBold } from '@/app/fonts'
import Image from 'next/image'

import NEXUS_LOGO from '@/assets/nexus_logo.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'
import USER_ICON from '@/assets/user_icon.png'
import NOTIFICATION_BELL_ICON from '@/assets/notification_bell_icon.png'
import HAMBURGER_ICON from '@/assets/hamburger_icon.png'
import { use, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const Navbar: React.FC = () => {

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const navbarToggle = () => {
        setIsNavbarOpen((prev) => !prev)
    }

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isNavbarOpen])
 

    return (
        <nav className="w-screen h-[68.6px] lg:h-[144.55px] flex items-center px-4 lg:px-28 justify-between">

            {isNavbarOpen && <NavbarMobile />}

            <div className="h-[32px] lg:h-[56.85px] flex text-white bg-[#0075FF] lg:bg-black rounded-[36px] items-center justify-between px-10 space-x-4">
                <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase ${ReadexProBold.className}`}>
                    <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                    <h1 className='text-base'>Nexus</h1>
                </div>

                <div style={{
                    backgroundColor: BLUE,
                }} className='px-4 hidden lg:block py-2 rounded-[36px]'>
                    <h1 className={`text-base font-medium ${Inter.className}`}>Launchpad</h1>
                </div>

                <div className='px-4 hidden lg:block py-2 rounded-[36px]'>
                    <h1 className={`text-base font-medium ${Inter.className}`}>Nexus</h1>
                </div>
            </div>

            <div className='flex items-center justify-center space-x-2'>
                <div className='bg-black hidden lg:flex lg:w-[50px] lg:h-[48px] w-[32px] h-[32px] rounded-full items-center justify-center'>
                    <Image src={USER_ICON} alt="User Icon" className='w-[15.28px] hidden lg:block h-[19.65px]' />
                </div>
                <div onClick={navbarToggle} style={{
                    zIndex: 1000,
                }} className='bg-black lg:w-[50px] cursor-pointer flex lg:hidden lg:h-[48px] w-[32px] h-[32px] rounded-full items-center justify-center'>
                    <Image src={HAMBURGER_ICON} alt="Hamburger Icon" className='w-[8.76px] h-[8.73px]' />
                </div>
                <div className='bg-black hidden lg:flex w-[50px] h-[48px] rounded-full items-center justify-center'>
                    <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' />
                </div>
                <div style={{
                    backgroundColor: BLUE,
                }} className='max-w-[215.1px] h-[56.85px]  w-full rounded-[36px] px-4 text-white p-2 hidden lg:flex items-center justify-between'>
                    <h1 className={`${Poppins.className} w-full whitespace-nowrap text-base font-bold`}>Connect Wallet</h1>
                    <div className='bg-white rounded-full w-[49.82px] h-[39.82px] flex items-center justify-center'>
                        <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

const NavbarMobile = () => {

    return (
        <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='fixed top-0 text-white flex lg:hidden left-0 w-screen h-screen bg-white z-50 flex-col items-center justify-start py-16'>
            <ul className='w-full space-y-8 px-16 py-8 flex flex-col h-full justify-between'>
                <div className='space-y-8'>
                    <li className='w-full'>
                        <div className='bg-black px-4 py-2 space-x-8 flex w-full rounded-full items-center justify-center'>
                            <Image src={USER_ICON} alt="User Icon" className='w-[15.28px] h-[19.65px]' />
                            <h1> Profile </h1>
                        </div>
                    </li>

                    <li className='w-full '>
                        <div className='bg-black px-4 py-2 space-x-8 flex w-full rounded-full items-center justify-center'>
                            <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' />
                            <h1> Notifications </h1>
                        </div>
                    </li>
                </div>


                <li className='w-full '>
                    <div className='bg-black px-4 py-2 space-x-8 flex w-full rounded-full items-center justify-center'>
                        <h1 className={`${Poppins.className} text-base font-bold`}>Connect Wallet</h1>
                        <div className='bg-white rounded-full w-[39.82px] h-[39.82px] flex items-center justify-center'>
                            <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                        </div>
                    </div>
                </li>


            </ul>
        </motion.div>
    )
}
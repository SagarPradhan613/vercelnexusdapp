
'use client'

import { BLUE } from '@/app/constants'
import { Inter, Poppins, ReadexProBold } from '@/app/fonts'
import Image from 'next/image'
import Modal, { Profile } from './Modal'
import NEXUS_LOGO from '@/assets/nexus_logo.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'
import USER_ICON from '@/assets/user_icon.png'
import NOTIFICATION_BELL_ICON from '@/assets/notification_bell_icon.png'
import HAMBURGER_ICON from '@/assets/hamburger_icon.png'
import { use, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import ProfileBg from '@/assets/profile-bg.svg'
import ProfileIcon from '@/assets/profile.svg'
import { FaPlus } from "react-icons/fa";

export const Navbar: React.FC = () => {
    const pathname = usePathname();

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [blueBg, setBlueBg] = useState(false);

    const navbarToggle = () => {
        setIsNavbarOpen((prev) => !prev);
    };



    const closeNavbar = () => {
        setIsNavbarOpen(false);
        ShowModal();
    };

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isNavbarOpen])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const ShowModal = () => {
        setIsModalOpen(true);

    }

    const HideModal = () => {
        setIsModalOpen(false);

    }

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const ShowProfile = () => {
        setIsProfileOpen(true);
        setBlueBg(true);
    }

    const HideProfile = () => {
        setIsProfileOpen(false);
        setBlueBg(false);
    }



    return (
        <>

            {isModalOpen && (
                <Modal>
                    {/* <button onClick={HideModal}>Close</button>
                    <h1>This is the modal content</h1> */}
                    <>
                        <div className='bg-[#000000] text-white sem px-10 py-8 rounded-[50px] w-full'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl lg:text-3xl'>Sign in</p>
                                <img src='/Images/modalarrow.png' onClick={HideModal} className='w-[40px] ani h-[40px]'></img>
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>Your Nexus experience is one click away</p>
                            </div>

                            <div className='mt-6 rounded-[40px] ani py-4 bg-[#111928] flex justify-center items-center'>
                                <img src='/Images/google.png'></img>
                            </div>
                            <div className='mt-4 gap-2 flex w-full'>
                                <div className='w-1/3 ani bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/twitter.png'></img>
                                </div>
                                <div className='w-1/3 ani bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/fb.png'></img>
                                </div>
                                <div className='w-1/3 ani bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/discord.png'></img>
                                </div>

                            </div>
                            <div className='mt-6 ani font-medium readex border-[#263043] border lg:text-lg text-[#0075FF] text-base rounded-[40px] py-4 flex justify-center items-center'>
                                View More Options
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>We do not store any personal information</p>
                            </div>

                            <div className='bg-[#FFFFFF40] w-full h-[1px] bg-white opacity-40 mt-10'>

                            </div>

                            <input type='text' placeholder='name@email.com' className='mt-6 px-8 rounded-[40px] py-4 bg-[#49505F] w-full  flex justify-center items-center'>

                            </input>

                            <div className='mt-6 ani px-8 rounded-[40px] py-4 bg-[#0075FF] w-full  flex justify-between items-center'>
                                <p>Continue</p>
                                <img src='/Images/continue.png'></img>
                            </div>
                        </div>
                    </>
                </Modal>
            )}

            {
                isProfileOpen && (
                    <Profile>
                        <div className='m-5'>
                            <div className='profile-header'>
                                <div className='profile-head-content'>
                                    <div className='flex gap-2 '>
                                        <button className='icon-button anireverse' onClick={HideProfile}><FaArrowLeft /></button>
                                        <button className='edit-button '><FaEdit /> <h1 className='text-black '>Edit </h1>  <span className='hidden md:block text-black'>profile</span></button>
                                    </div>
                                    <p className='text-xl lg:text-3xl'>Profile</p>
                                    <div className='profile-bg'>
                                        <Image src={ProfileBg} alt='bg' width={485} />
                                    </div>
                                    <div className='profile-wrap'>
                                        <div className='profile-image'>
                                            <Image src={ProfileIcon} width={0} alt='icon' />
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='input-container'>
                                <div className='input-wrapp'>
                                    <div className='flex gap-4 items-center justify-center w-full flex-col md:flex-row'>
                                        <input className='profile-input w-full' placeholder='First Name' />
                                        <input className='profile-input w-full' placeholder='Second Name' />
                                    </div>
                                    <div className='flex gap-4 items-center justify-center w-full flex-col md:flex-row'>
                                        <input className='profile-input w-full' placeholder='Email' />
                                        <input className='profile-input w-full' placeholder='Phone' />
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-full'>
                                        <div className='flex  gap-4 w-full'>
                                            <input className='profile-input lg:w-2/3 w-full' placeholder='DOB' />
                                            <input className='profile-input lg:w-2/3 w-full' placeholder='Gender' />
                                        </div>
                                        <input className='profile-input lg:w-1/3 w-full' placeholder='Country' />
                                    </div>

                                    <button className='done-button anireverse'>Done</button>
                                </div>
                            </div>
                        </div>
                    </Profile>
                )
            }



            <div className='flex relative z-50 items-center justify-center w-full'>
                <nav className="w-screen max-w-[2660px] h-[68.6px] lg:h-[144.55px] flex items-center px-4 lg:px-20 responsive-body-padding justify-between">

                    {isNavbarOpen && <NavbarMobile closeNavbar={closeNavbar} />}

                    <div className="h-[32px] lg:h-[56.85px] flex text-white bg-[#0075FF] lg:bg-black rounded-[36px] items-center justify-between lg:px-2 lg:pr-6 space-x-4">
                        <div style={{ zIndex: 1000, }} className={pathname === '/' ? `space-x-2 active flex bgchange py-2 lg:px-6 px-3 rounded-[36px] items-center justify-center tracking-widest uppercase readex ${ReadexProBold.className}` : `space-x-2 flex bgchange py-2 lg:px-6 px-3  rounded-[36px] items-center justify-center tracking-widest uppercase  readex ${ReadexProBold.className}`} >
                            <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                            <a href='/'><h1 className='text-base'>Nexus</h1></a>
                        </div>

                        <div className={pathname === '/launchpad' || pathname === '/launchpad/inside' ? `px-4 hidden bgchange lg:block py-2 rounded-[36px] active` : 'px-4 hidden bgchange lg:block py-2 rounded-[36px]'}>
                            <a href='/launchpad'><h1 className={`text-base font-medium ${Inter.className}`}>Launchpad</h1></a>
                        </div>

                        <div className={pathname === '/nexus' ? `px-4 hidden z-10 cursor-pointer bgchange lg:block py-2 rounded-[36px] active` : `px-4 hidden z-10 cursor-pointer bgchange lg:block py-2 rounded-[36px]`}>
                            <a href='/nexus'> <h1 className={`text-base font-medium ${Inter.className}`}>Nexus</h1></a>
                        </div>
                    </div>

                    <div className='flex items-center justify-center space-x-2' >
                        <div onClick={ShowProfile} className={`bg-${blueBg ? '[#0075FF]' : 'black'} anireverse hidden lg:flex lg:w-[60px] lg:h-[50px] w-[32px] h-[32px] rounded-[50%] items-center justify-center`}>
                            <Image src={USER_ICON} alt="User Icon" className='w-[19.28px] hidden lg:block ' />
                        </div>
                        <div onClick={navbarToggle} style={{
                            zIndex: 1000,
                        }} className='bg-black lg:w-[50px]  cursor-pointer flex lg:hidden lg:h-[48px] w-[32px] h-[32px] rounded-full items-center justify-center'>


                            {isNavbarOpen ? <img src='/Images/cancelbtn.png' className=''></img> : <Image src={HAMBURGER_ICON} alt="Hamburger Icon" className='w-[8.76px] h-[8.73px]' />}
                        </div>
                        <a href='/notification'>
                            <div className={pathname === '/notification' ? `bg-black hidden anireverse lg:flex w-[50px] h-[50px] rounded-[50%] items-center justify-center active` : `bg-black hidden anireverse lg:flex w-[50px] h-[50px] rounded-full items-center justify-center`}>
                                <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[23px] ' />
                            </div>
                        </a>

                        <div onClick={ShowModal} style={{
                            backgroundColor: BLUE,
                        }} className='max-w-[215.1px] h-[56.85px] z-10 anireverse cursor-pointer w-full rounded-[36px] px-4 text-white p-2 hidden lg:flex items-center justify-between'>
                            <h1 className={`${Poppins.className} w-full whitespace-nowrap text-base font-bold`}>Connect Wallet</h1>
                            <div className='bg-white rounded-full w-[49.82px] h-[39.82px] flex items-center justify-center'>
                                <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] hover:translate-x-[1.009] h-[14.56px]' />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

const NavbarMobile = ({ closeNavbar }: { closeNavbar: () => void }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    // const toggleModal = () => {
    //     setIsModalOpen((prev) => !prev);
    // };

    const ShowModal = () => {
        setIsModalOpen(true);
    }

    const HideModal = () => {
        setIsModalOpen(false);
    }


    // console.log(isModalOpen, "modal open now")
    return (
        <>
            {isModalOpen && (
                <Modal>
                    {/* <button onClick={HideModal}>Close</button>
                    <h1>This is the modal content</h1> */}
                    <>
                        <div className='bg-[#000000] text-white sem px-10 py-8 rounded-[50px] w-full'>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl lg:text-3xl'>Sign in</p>
                                <img src='/Images/modalarrow.png' onClick={HideModal} className='w-[40px] h-[40px]'></img>
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>Your Nexus wallet in one click</p>
                            </div>

                            <div className='mt-6 rounded-[40px] py-4 bg-[#111928] flex justify-center items-center'>
                                <img src='/Images/google.png'></img>
                            </div>
                            <div className='mt-4 gap-2 flex w-full'>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/twitter.png'></img>
                                </div>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/fb.png'></img>
                                </div>
                                <div className='w-1/3 bg-[#111928] py-2 rounded-[40px] flex justify-center items-center'>
                                    <img src='/Images/discord.png'></img>
                                </div>

                            </div>
                            <div className='mt-6 font-medium readex border-[#263043] border lg:text-lg text-[#0075FF] text-base rounded-[40px] py-4 flex justify-center items-center'>
                                View More Options
                            </div>
                            <div className='w-full mt-10 flex justify-center items-center'>
                                <p className='font-medium lg:text-base text-sm text-white opacity-55 readex'>We do not store any data related to social login</p>
                            </div>

                            <div className='bg-[#FFFFFF40] w-full h-[1px] bg-white opacity-40 mt-10'>

                            </div>

                            <input type='text' placeholder='name@email.com' className='mt-6 px-8 rounded-[40px] py-4 bg-[#49505F] w-full  flex justify-center items-center'>

                            </input>

                            <div className='mt-6 px-8 rounded-[40px] py-4 bg-[#0075FF] w-full  flex justify-between items-center'>
                                <p>Continue</p>
                                <img src='/Images/continue.png'></img>
                            </div>
                        </div>
                    </>
                </Modal>
            )}


            <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='fixed top-0 text-white flex lg:hidden left-0 w-screen h-screen bg-black z-[100] flex-col items-center justify-start p-2'>
                <div className='pt-16 border border-[#979797] rounded-[25px] h-full w-full border-opacity-50'>
                    <div className='w-full h-full '>
                        <ul className='w-full space-y-4 px-6 py-8 flex flex-col h-full justify-between'>
                            <div className='space-y-3'>
                                {/* <li className='w-full'>
                                <a href='/'>
                                    <div className='bg-black px-4 py-2 relative z-50 space-x-8 flex w-full rounded-full items-center justify-center'>
                                        <h1> Home </h1>
                                    </div>
                                </a>

                            </li> */}

                                <li className='w-full btnanimation border border-[#979797] border-opacity-50 rounded-[28px]'>
                                    <a href='/launchpad'>
                                        <div className='bg-[#0D0F13] flex justify-between px-4 py-3  w-full rounded-full items-center '>
                                            {/* <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                            <div className='flex items-center'>
                                                <div className='h-[30px] w-[30px] flex justify-center items-center insidebtn rounded-[50%] p-2'>
                                                    <img src='/Images/launchpadlogo.png' className=''></img>
                                                </div>

                                                <h1 className='ml-2'> Launchpad </h1>
                                            </div>

                                            <div>
                                                <div className='h-[30px] w-[30px] arrowbg flex justify-center items-center rounded-[50%] '>
                                                    <svg className='mainarrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>

                                        </div>
                                    </a>

                                </li>
                                <li className='w-full btnanimation border border-[#979797] border-opacity-50 rounded-[28px]'>
                                    <a href='/nexus'>
                                        <div className='bg-[#0D0F13]  flex justify-between px-4 py-3  w-full rounded-full items-center '>
                                            {/* <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                            <div className='flex items-center'>
                                                <div className='h-[30px] w-[30px] flex justify-center items-center insidebtn rounded-[50%] p-2'>
                                                    <img src='/Images/aboutlogo.png' className=''></img>
                                                </div>

                                                <h1 className='ml-2'> About Nexus </h1>
                                            </div>

                                            <div>
                                                <div className='h-[30px] w-[30px] arrowbg flex justify-center items-center rounded-[50%] '>
                                                    <svg className='mainarrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>

                                        </div>
                                    </a>

                                </li>
                                {/* <li className='w-full bg-[#0D0F13] border border-[#979797] border-opacity-50  rounded-[28px]'>

                                <div onClick={() => { closeNavbar(); ShowModal(); }} className='bg-[#0D0F13] px-4 py-3 space-x-8 flex w-full rounded-full items-center justify-center'>
                                  
                                    <h1> Profile </h1>
                                </div>

                            </li> */}
                                <li className='w-full btnanimation  border border-[#979797] border-opacity-50  rounded-[28px]'>
                                    <a href='/notification'>
                                        <div className='bg-[#0D0F13] flex justify-between px-4 py-3  w-full rounded-full items-center '>
                                            {/* <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                            <div className='flex items-center'>
                                                <div className='h-[30px] w-[30px] flex justify-center items-center insidebtn rounded-[50%] p-2'>
                                                    <img src='/Images/notificationlogo.png' className=''></img>
                                                </div>

                                                <h1 className='ml-2'> Notification </h1>
                                            </div>

                                            <div>
                                                <div className='h-[30px] w-[30px] arrowbg flex justify-center items-center rounded-[50%] '>
                                                    <svg className='mainarrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                                </div>
                                            </div>

                                        </div>
                                    </a>
                                </li>

                                <li className='w-full btnanimation border border-[#979797] border-opacity-50  rounded-[28px]'>

                                    <div className='bg-[#0D0F13] flex justify-between px-4 py-3  w-full rounded-full items-center '>
                                        {/* <Image src={NOTIFICATION_BELL_ICON} alt="Notification Bell Icon" className='w-[15.28px] h-[19.65px]' /> */}
                                        <div className='flex items-center'>
                                            <div className='h-[30px] w-[30px] flex justify-center items-center insidebtn rounded-[50%] p-2'>
                                                <img src='/Images/notificationlogo.png' className=''></img>
                                            </div>

                                            <h1 className='ml-2'> Connect Wallet </h1>
                                        </div>

                                        <div>
                                            <div className='h-[30px] w-[30px] arrowbg flex justify-center items-center rounded-[50%] '>
                                                <svg className='mainarrow' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                            </div>
                                        </div>
                                    </div>


                                </li>
                            </div>

                            <div className='flex justify-between'>
                                <li className='w-[40%] '>
                                    <div onClick={() => { closeNavbar(); ShowModal(); }} className='bg-[#0075FF] ani px-2 py-2 justify-between flex w-full rounded-full items-center '>
                                        <div>

                                        </div>
                                        <h1 className={`${Poppins.className} text-sm font-bold`}>Login</h1>
                                        <div className='bg-white rounded-full w-[28px] h-[28px] flex items-center justify-center'>
                                            <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                                        </div>
                                    </div>
                                </li>


                                <div>
                                    <div className='gap-2 flex w-full'>
                                        <div className='w-[35px] h-[35px] anilogo  flex justify-center items-center'>
                                            <img src='/Images/hdtelegramlogo.png'></img>
                                        </div>
                                        <div className='w-[35px] h-[35px] anilogo  flex justify-center items-center'>
                                            <img src='/Images/hdtwitterlogo.png'></img>
                                        </div>
                                        <div className='w-[35px] h-[35px] anilogo  flex justify-center items-center'>
                                            <img src='/Images/hddiscordlogo.png'></img>
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </ul>
                    </div>
                </div>



            </motion.div>
        </>

    )
}
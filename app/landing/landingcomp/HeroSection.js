'use client'

import Image from 'next/image'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'
import TELEGRAM_ICON from '@/assets/telegram_icon.png'
import TWITTER_ICON from '@/assets/twitter_icon.png'
import DISCROD_ICON from '@/assets/discord_icon.png'
import { BLUE } from '@/app/constants'
import { Inter, Poppins, ReadexProBold, Sen } from '@/app/fonts'
import PLUS_ICON from '@/assets/plus_icon.png'

const HeroSection = () => {
    return (
        <>
            <div className="MainContainer lg:mb-32 lg:flex block px-4 lg:px-28">
                <div className="LeftContainer flex flex-col mr-6 justify-between lg:pt-20  lg:w-1/2 w-full">
                    <div>
                        <div>
                            <p className="text-[#0075FF] font-bold sen text-6xl md:text-8xl">Ultimate,</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <p className="text-black font-black sen text-6xl md:text-8xl">Crypto</p>
                            <img className="ml-6" src="/Images/star.png"></img>
                        </div>
                        <div>
                            <p className="text-black font-black sen text-6xl md:text-8xl">Launchpad</p>
                        </div>
                    </div>

                    <div className="lg:flex hidden justify-between  items-center">
                        <div className='flex gap-4'>
                            <div className='px-4 py-2 ani w-[210px] relative z-50 rounded-[40px] text-white bg-[#0075FF] flex justify-between items-center'>
                                <div className='mx-6'>
                                    <p className='font-semibold text-base whitespace-nowrap'>Get Started</p>
                                </div>
                                <div className='rounded-[50%] h-[39px] flex w-[39px] justify-center items-center bg-white'>
                                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-1/2' />
                                </div>
                            </div>
                            <div className='px-4 py-2 w-[210px] ani relative z-50 rounded-[100px] text-black bg-white border border-black flex text-center justify-center items-center'>
                                <p className='font-semibold text-base whitespace-nowrap'>Know More</p>
                            </div>
                        </div>

                        <div className="h-[32px] lg:h-[56.85px] flex text-white bg-black rounded-[36px] items-center justify-between px-2 space-x-2">
                            <div className="flex items-center space-x-2">
                                <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="z-10 ani cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" />
                                <Image src={TWITTER_ICON} alt="Twitter Icon" className="z-10 ani cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" />
                                <Image src={DISCROD_ICON} alt="Discord Icon" className="z-10 ani cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RightContainer flex justify-center items-center relative lg:w-1/2 w-full">
                    <div className="absolute top-20 z-10 w-full h-full rounded-[30px] bg-[#D4E8FF]">

                    </div>
                    <div className="w-full relative z-50 h-full flex justify-center items-center">
                        <img src="/Images/heroright.png" alt="bg img" className="h-full w-full"></img>
                    </div>
                </div>
            </div>
            <div className='flex mt-28 px-4 lg:hidden items-center justify-center space-x-1'>

                <div style={{
                    backgroundColor: BLUE,
                }} className='w-full max-w-[350px] h-[50px] rounded-[36px] px-2 text-white flex items-center justify-between'>
                    <h1 className={`${Poppins.className}  mx-3 text-sm inline-block whitespace-nowrap font-semibold`}>Get Started</h1>
                    <div className='bg-white rounded-[50%] w-[28px] h-[28px] flex items-center justify-center'>
                        <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                    </div>
                </div>

                <div className='min-w-[50px] min-h-[50px] bg-white border-2 rounded-[36px] px-4 text-white flex items-center justify-center'>
                    <Image src={PLUS_ICON} alt="plus Icon" className='max-w-[14.16px] max-h-[14.56px]' />
                </div>

                <div className='w-full h-[50px] max-w-[350px] rounded-[36px]  text-white bg-black flex items-center justify-center'>
                    <div className="flex items-center space-x-2">
                        <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[42px] h-[42px]" />
                        <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[42px] h-[42px]" />
                        <Image src={DISCROD_ICON} alt="Discord Icon" className="w-[42px] h-[42px]" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection;
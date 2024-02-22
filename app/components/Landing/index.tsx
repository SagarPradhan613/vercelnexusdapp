
import Image from 'next/image'

import { Inter, Poppins, ReadexProBold, Sen } from '@/app/fonts'
import { BLUE } from '@/app/constants'

import LANDING_BANNER from '@/assets/landing_banner.png'
import LANDING_BANNER_MOBILE from '@/assets/landing_banner_mobile.png'
import NEXUS_LOGO from '@/assets/nexus_logo.png'
import STAR_ICON from '@/assets/star_icon.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'
import PLUS_ICON from '@/assets/plus_icon.png'
import TELEGRAM_ICON from '@/assets/telegram_icon.png'
import TWITTER_ICON from '@/assets/twitter_icon.png'
import DISCROD_ICON from '@/assets/discord_icon.png'

export const Landing: React.FC = () => {
    return (
        <div className='flex items-center relative z-20 w-full'>
            <section className='p-4  w-full '>

                <div className='flex flex-col lg:flex-row w-full  lg:px-20 justify-between'>

                    <div className='flex flex-col w-full items-start'>

                        <div className="h-[43.4px] ani relative z-50  hidden lg:flex text-white my-4 bg-[#0075FF] rounded-[36px] items-center justify-between px-10 space-x-4">
                            <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase ${ReadexProBold.className}`}>
                                <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                                <h1 className='text-base'>Nexus</h1>
                            </div>
                        </div>

                        {/* <p className={`lg:text-8xl md:text-[50px] sm:text-[50px] text-4xl overflow-hidden w-full font-black sen `}>
                            Crypto
                            <Image src={STAR_ICON} alt="Star Icon" className='inline star mx-8' />
                            <br />
                            Launchpad
                        </p> */}

                        <div className="flex items-center justify-start">
                            <p className="text-black font-black sen text-6xl md:text-8xl responsive-heading-size">Crypto</p>
                            <img className="ml-6" src="/Images/star.png"></img>
                        </div>
                        <div>
                            <p className="text-black font-black sen text-6xl md:text-8xl responsive-heading-size">Launchpad</p>
                        </div>

                        <div className='hidden overflow-visible lg:flex items-start space-x-4 my-16'>
                            {/* <div style={{
                                backgroundColor: BLUE,
                            }} className='w-full h-[50px] z-10 hover:scale-[1.009] cursor-pointer rounded-[36px] px-4 text-white flex items-center justify-center'>
                                <h1 className={`${Poppins.className} w-full text-base font-semibold`}>Get Started</h1>
                                <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                                </div>
                            </div>

                            <div className='w-[161.11px] z-10 hover:scale-[1.009] hover:bg-[#0075FF] text-black hover:text-white transition-all delay-75 cursor-pointer h-[50px] border-2 rounded-[36px] flex items-center justify-center'>
                                <h1 className={`${Inter.className} text-sm font-medium`}>
                                    Know More
                                </h1>
                            </div> */}


                            {/* <div className='flex gap-6'>
                                <div className='p-4 ani w-[210px] relative z-50 rounded-[40px] text-white bg-[#0075FF] flex justify-between items-center'>
                                    <div className='mx-6'>
                                        <p className='font-semibold text-base whitespace-nowrap'>Get Started</p>
                                    </div>
                                    <div className='rounded-[50%] h-[39px] flex w-[39px] justify-center items-center bg-white'>
                                        <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-1/2' />
                                    </div>
                                </div>
                                <div className='p-4 w-[210px] ani relative z-50 rounded-[40px] text-black bg-white border border-black flex text-center justify-center items-center'>
                                    <p className='font-semibold text-base whitespace-nowrap'>Know More</p>
                                </div>
                            </div> */}
                            <div className='flex gap-4'>
                                <a href='/launchpad/inside'>
                                    <div className='px-4 responsive-padding responsive-btn-size py-2 ani w-[200px] relative z-50 rounded-[40px] text-white bg-[#0075FF] flex justify-between items-center'>

                                        <div className='mx-3'>
                                            <p className='font-semibold text-base whitespace-nowrap'>Get Started</p>
                                        </div>

                                        <div className='rounded-[50%] h-[39px] flex w-[39px] justify-center items-center bg-white'>
                                            <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-1/2' />
                                        </div>
                                    </div>
                                </a>
                                <div className='px-4 responsive-btn-size py-2 w-[161px] ani relative z-50 rounded-[100px] text-black bg-white border border-black flex text-center justify-center items-center'>
                                    <p className='font-semibold text-base whitespace-nowrap'>Know More</p>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='flex flex-col w-full items-center my-8 lg:my-0 lg:items-end'>
                        <Image src={LANDING_BANNER} alt="Landing Banner" className=' w-full max-w-[817px] hidden lg:block' />
                        <Image src={LANDING_BANNER_MOBILE} alt="Landing Banner Mobile" className=' w-full lg:px-0 lg:hidden' />
                    </div>

                    <div className='flex lg:hidden items-center justify-center space-x-1'>
                        <a href='/launchpad/inside'>
                            <div style={{
                                backgroundColor: BLUE,
                            }} className='w-full max-w-[350px] h-[50px] rounded-[36px] px-2 text-white flex items-center justify-between'>
                                <h1 className={`${Poppins.className}  mx-3 text-sm inline-block whitespace-nowrap font-semibold`}>Get Started</h1>
                                <div className='bg-white relative z-30 rounded-[50%] ani w-[28px] h-[28px] flex items-center justify-center'>
                                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px] ' />
                                </div>
                            </div>
                        </a>
                        <div className='min-w-[50px] min-h-[50px] bg-white border-2 rounded-[36px] px-4 text-white flex items-center justify-center'>
                            <Image src={PLUS_ICON} alt="plus Icon" className='max-w-[14.16px] max-h-[14.56px]' />
                        </div>
                        <div className='w-full h-[50px] max-w-[350px] rounded-[36px]  text-white bg-black flex items-center justify-center'>
                            <div className="flex items-center space-x-2">
                                {/* <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[42px] h-[42px]" /> */}
                                <img src='/Images/hdtelegramlogo.png' alt="Telegram Icon" className="w-[42px] h-[42px] anilogo relative z-30" />
                                {/* <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[42px] h-[42px]" /> */}
                                <img src='/Images/hdtwitterlogo.png' alt="Twitter Icon" className="w-[42px] h-[42px] anilogo relative z-30" />
                                {/* <Image src={DISCROD_ICON} alt="Discord Icon" className="w-[42px] h-[42px]" /> */}
                                <img src='/Images/hddiscordlogo.png' alt="Discord Icon" className="w-[42px] h-[42px] anilogo relative z-30" />
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}
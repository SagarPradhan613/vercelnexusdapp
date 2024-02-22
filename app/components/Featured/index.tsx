import Image from "next/image"

import { BLUE } from "@/app/constants"
import { Poppins, ReadexProMedium, Sen } from "@/app/fonts"

import FEATURED_RIGHT_BANNER from "@/assets/featured_right_banner.png"
import FEATURED_ARTYFACT from "@/assets/featured_artyfact.png"
import ARROW_LEFT_ICON from "@/assets/arrow_left_icon.png"

import TELEGRAM_ICON from "@/assets/telegram_icon.png"
import TWITTER_ICON from "@/assets/twitter_icon.png"
import DISCROD_ICON from "@/assets/discord_icon.png"
import KYC_INFO_ICON from "@/assets/kyc_info_icon.png"

import FEATURED_LEFT_RINGS from "@/assets/featured_left_rings.png"
import FEATURED_RIGHT_RINGS from "@/assets/featured_right_rings.png"
import FEATURED_LEFT_RINGS_CENTER from "@/assets/featured_left_rings_center.png"

export const Featured = () => {
    return (
        <section className="w-full overflow-hidden relative">

            <Image src={FEATURED_LEFT_RINGS} alt="Featured Left Rings" className="featured_ellipse_left hidden lg:block absolute w-[800px] h-[800px]" />
            <Image src={FEATURED_LEFT_RINGS_CENTER} alt="Featured Left Rings Center" className="planet responsive-planet featured_left_rings hidden lg:block absolute left-24 z-50 w-[200px] h-[200px]" />
            <Image src={FEATURED_RIGHT_RINGS} alt="Featured Right Rings" className="featured_ellipse_right hidden lg:block absolute w-[800px] h-[800px]" />

            <h1 className={`text-center overflow-hidden hidden lg:block ${Sen.className} my-8 font-bold text-7xl`}>
                Featured
                <span style={{
                    color: BLUE,
                    marginLeft:"20px",
                }}>
                    Launch
                </span>
            </h1>


            <h1 className={`text-center block lg:hidden ${Sen.className}   my-8 font-bold text-4xl  g:text-7xl`}>
                Makes Us
                <span style={{
                    color: BLUE,
                    marginLeft:"10px",
                }}>
                    Better
                </span>
            </h1>

            <div className="flex items-center justify-center px-4 lg:px-0 w-full">

                <div className="bg-black h-full w-full responsive-feature lg:max-w-[1000px] z-10 rounded-[36px] p-2 flex flex-col lg:flex-row justify-between">

                    <div className="w-full h-full flex-col p-8 text-white">

                        <div className="flex items-start space-x-8 justify-start">
                            <div style={{
                                backgroundColor: BLUE
                            }} className="min-w-[69.95px] flex items-center justify-center rounded-[15px] min-h-[69.95px]">
                                <Image src={FEATURED_ARTYFACT} alt="Featured Artyfact" className="w-[50.95px] h-[50.95px]" />
                            </div>

                            <div className="space-y-2 w-full">
                                <h1 className={`text-2xl font-semibold ${ReadexProMedium.className}`}>Lorem Ipsum</h1>
                                <div className="flex items-center space-x-2">
                                    {/* <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[39.71px] h-[39.71px]" /> */}
                                    <img src='/Images/hdtelegramlogo.png' alt="Telegram Icon" className="w-[39.71px] h-[39.71px] anilogo relative z-30" />
                                    {/* <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[39.71px] h-[39.71px]" /> */}
                                    <img src='/Images/hdtwitterlogo.png' alt="Twitter Icon" className="w-[39.71px] h-[39.71px] anilogo relative z-30" />
                                    {/* <Image src={DISCROD_ICON} alt="Discord Icon" className="w-[39.71px] h-[39.71px]" /> */}
                                    <img src='/Images/hddiscordlogo.png' alt="Discord Icon" className="w-[39.71px] h-[39.71px] anilogo relative z-30" />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-3 py-2 mt-4 w-full items-center justify-center lg:justify-start">
                            <div className="rounded-[12px] px-4 py-2 big-glow bg-[#00316A]">
                                <h1 className={`text-xs ${ReadexProMedium.className}`}>BRC 20</h1>
                            </div>
                            <div className="rounded-[12px] px-4 big-glow py-2 bg-[#00316A]">
                                <h1 className={`text-xs ${ReadexProMedium.className}`}>Ordinals</h1>
                            </div>
                        </div>

                        <h1 className={`text-xl lg:text-3xl lg:text-start py-1 text-center font-semibold ${ReadexProMedium.className}`}>
                            Synthesizing BRX-20 <br className="hidden lg:block"/>
                            Trading
                        </h1>

                        <h1 className="text-lg lg:text-lg lg:text-start py-2 text-center ">
                            Total Raise <span className="text-[#83BCFE] text-xl">$600,000</span>
                        </h1>

                        <div className="py-2">
                            <div>
                                <div className="flex items-center justify-start space-x-4 border-2 rounded-[8px] py-4 px-4">
                                    <h1 className="text-xs">
                                        Registration Ends in
                                    </h1>
                                    <span className="text-[#84BCFF] text-lg">
                                        6D 1H 03 5S
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-center space-x-2 py-4">
                                <Image src={KYC_INFO_ICON} alt="KYC Info Icon" className="w-[12px] h-[12px]" />
                                <h1 className="text-xs">No KYC required</h1>
                            </div>

                            <div  style={{
                                backgroundColor: BLUE,
                            }} className='anireverse relative z-50  w-full h-[50px] cursor-pointer  rounded-[36px] px-2 text-white flex items-center justify-between'>
                                <h1 className={`${Poppins.className} w-full ml-8 text-sm font-semibold`}>
                                    Participate Now
                                </h1>
                                <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-1 lg:p-0">
                        <Image src={FEATURED_RIGHT_BANNER} alt="Featured Right Banner" className="w-full max-w-[1200px] responsive-featureRight-img rounded-[19px] h-full" />
                    </div>

                </div>

            </div>


        </section>
    )
}
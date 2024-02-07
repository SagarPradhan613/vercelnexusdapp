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


export const Featured = () => {
    return (
        <section className="py-16 w-full relative">

            <h1 className={`text-center ${Sen.className} my-8 font-bold text-7xl`}>
                Featured
                <span style={{
                    color: BLUE
                }}>
                    Launch
                </span>
            </h1>

            <div className="flex items-center justify-center w-full">

                <div className="bg-black max-w-[1280.49px] h-full w-[1000px] rounded-[36px] p-2 flex justify-between">

                    <div className="w-full flex-col p-8 h-full text-white">

                        <div className=" flex items-start space-x-8 justify-start">
                            <div style={{
                                backgroundColor: BLUE
                            }} className="w-[69.95px] flex items-center justify-center rounded-[15px] h-[69.95px]">
                                <Image src={FEATURED_ARTYFACT} alt="Featured Artyfact" className="w-[50.95px] h-[50.95px]" />
                            </div>

                            <div className="space-y-2">
                                <h1 className={`text-2xl font-semibold ${ReadexProMedium.className}`}>Lorem Ipsum</h1>
                                <div className="flex items-center space-x-2">
                                    <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[39.71px] h-[39.71px]" />
                                    <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[39.71px] h-[39.71px]" />
                                    <Image src={DISCROD_ICON} alt="Discord Icon" className="w-[39.71px] h-[39.71px]" />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2 py-2 mt-4">
                            <div className="rounded-[12px] px-4 py-2 bg-[#00316A]">
                                <h1 className={`text-xs ${ReadexProMedium.className}`}>BRC 20</h1>
                            </div>
                            <div className="rounded-[12px] px-4 py-2 bg-[#00316A]">
                                <h1 className={`text-xs ${ReadexProMedium.className}`}>Ordinals</h1>
                            </div>
                        </div>

                        <h1 className={`text-3xl font-semibold ${ReadexProMedium.className}`}>
                            Synthesizing BRX-20 <br />
                            Trading
                        </h1>

                        <h1 className="text-sm py-4">
                            Total Raise <span className="text-[#83BCFE] text-lg">$600,000</span>
                        </h1>

                        <div>
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
                            <div className="flex items-center justify-center space-x-4 py-2 mt-8">
                                <Image src={KYC_INFO_ICON} alt="KYC Info Icon" className="w-[12px] h-[12px]" />
                                <h1 className="text-xs">No KYC required</h1>
                            </div>

                            <div style={{
                                backgroundColor: BLUE,
                            }} className='w-full h-[50px] rounded-[36px] px-4 text-white flex items-center justify-between'>
                                <h1 className={`${Poppins.className} w-full text-base font-semibold`}>
                                    Participate Now
                                </h1>
                                <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image src={FEATURED_RIGHT_BANNER} alt="Featured Right Banner" className="min-w-[600px] h-[482.86px]" />
                    </div>

                </div>

            </div>


        </section>
    )
}
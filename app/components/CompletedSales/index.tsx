
'use client'

import { BLUE } from "@/app/constants"
import { Poppins, ReadexProBold, ReadexProMedium, Sen } from "@/app/fonts"

import Image from "next/image"

import RECT_IMAGE_UPCOMING_CARD from "@/assets/rect_image_upcoming_card.png"
import ARROW_LEFT_ICON from "@/assets/arrow_left_icon.png"

import TELEGRAM_ICON from "@/assets/telegram_icon.png"
import TWITTER_ICON from "@/assets/twitter_icon.png"
import DISCROD_ICON from "@/assets/discord_icon.png"
import { useRef } from "react"

export const CompletedSales = () => {

    const carouselContainer = useRef<HTMLDivElement>(null)

    const prev = () => {
        const container = carouselContainer.current
        if (container) {
            container.scrollTo({
                left: container.scrollLeft - 315,
                behavior: 'smooth'
            })
        }
    }

    const next = () => {
        const container = carouselContainer.current
        if (container) {
            container.scrollTo({
                left: container.scrollLeft + 315,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section className="py-16 w-full relative">
            <h1 style={{
                color: BLUE
            }} className={`text-center ${Sen.className} overflow-hidden my-8 font-bold text-4xl lg:text-7xl`}>
                <span className="text-black mx-4">
                    Completed
                </span>
                Sales
            </h1>

            <div className="flex relative items-center justify-center w-full">

                <div onClick={prev} style={{
                    backgroundColor: BLUE
                }} className='cursor-pointer ml-2 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center'>
                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='invert rotate-180 w-[14.16px] h-[14.56px]' />
                </div>

                <div ref={carouselContainer} className="w-full overflow-hidden h-full lg:w-[1000px] gap-4 z-10 rounded-[36px] flex p-2">
                    {Array(9).fill(0).map((_, i) => (
                        <SalesCard key={i} />
                    ))}
                </div>

                <div onClick={next} style={{
                    backgroundColor: BLUE
                }} className='cursor-pointer mr-2 rounded-full min-w-[40px] min-h-[40px] flex items-center justify-center'>
                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='invert w-[14.16px] h-[14.56px]' />
                </div>
            </div>
        </section>
    )
}

const SalesCard = () => {
    return (
        <div className=" text-white h-full p-3 min-w-[300px] lg:min-w-[317px] bg-[#191F25] rounded-[36px]">
            <div className="flex items-start m-4">
                <Image src={RECT_IMAGE_UPCOMING_CARD} alt="rect image upcoming card" className="w-[48.91px]" />
                <div className="flex items-start px-4 justify-start w-full space-x-2 flex-col">
                    <h1 className={`${ReadexProBold.className} text-lg`}>Lorem Ipsum</h1>
                    <div className="flex items-center justify-start">
                        <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[28px] h-[28px]" />
                        <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[28px] h-[28px]" />
                        <Image src={DISCROD_ICON} alt="Discord Icon" className="w-[28px] h-[28px]" />
                    </div>
                </div>
            </div>

            <div className="w-full px-4">
                <div className="w-full h-[2px] bg-[#2D333A]"></div>
            </div>

            <div className="flex space-x-2 py-2 mx-4 my-2">
                <div className="rounded-[12px] px-4 py-2 bg-[#00316A]">
                    <h1 className={`text-xs ${ReadexProMedium.className}`}>BRC 20</h1>
                </div>
                <div className="rounded-[12px] px-4 py-2 bg-[#00316A]">
                    <h1 className={`text-xs ${ReadexProMedium.className}`}>Ordinals</h1>
                </div>
            </div>

            <div className="flex items-center justify-between w-full px-4 flex-col space-y-2">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-start flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Total Raise</h3>
                        <h2 className="text-base">$600,000</h2>
                    </div>
                    <div className="flex items-end justify-end flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Ends In</h3>
                        <h2 className="text-base"> 6d 1h 03 5s</h2>
                    </div>
                </div>

                <div className="flex items-center justify-between w-full">
                    <div className="flex items-start flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Sale Type</h3>
                        <h2 className="text-base">TBA</h2>
                    </div>
                    <div className="flex items-end justify-end flex-col">
                        <h3 className="text-xs text-[##FFFFFF] opacity-50">Market Maker</h3>
                        <h2 className="text-base">TBA</h2>
                    </div>
                </div>
            </div>

            <div style={{
                backgroundColor: BLUE,
            }} className='w-full h-[50px] my-4 rounded-[36px] px-2 text-white flex items-center justify-between'>
                <h1 className={`${Poppins.className} w-full ml-8 text-sm font-semibold`}>
                    Participate Now
                </h1>
                <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                    <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                </div>
            </div>
        </div>
    )
}
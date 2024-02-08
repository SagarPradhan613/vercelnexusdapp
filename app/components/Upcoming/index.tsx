
import { BLUE } from "@/app/constants"
import { Poppins, ReadexProBold, ReadexProMedium, Sen } from "@/app/fonts"

import CarouselComponent from "../Carousel"

import Image from "next/image"

import UPCOMING_CARD_1_BANNER from "@/assets/upcoming_card_1_banner.png"
import UPCOMING_BACKGROUND from "@/assets/upcoming_background.png"
import UPCOMING_CARD_2_BANNER from "@/assets/upcoming_card_2_banner.png"
import UPCOMING_CARD_3_BANNER from "@/assets/upcoming_card_3_banner.png"

import RECT_IMAGE_UPCOMING_CARD from "@/assets/rect_image_upcoming_card.png"
import ARROW_LEFT_ICON from "@/assets/arrow_left_icon.png"

export const Upcoming = () => {

    return (
        <section className="py-16 w-full relative">
            <h1 style={{
                color: BLUE
            }} className={`text-center ${Sen.className} my-8 font-bold text-7xl`}>
                Live
                <span className="text-black mx-4">
                    and
                </span>
                Upcoming
            </h1>


            <div className="flex relative items-center justify-center w-full">

                <Image src={UPCOMING_BACKGROUND} alt="upcoming background" className="absolute bottom-0" />

                <div className="max-w-[1280.49px] h-full w-[1000px] gap-4 z-10 rounded-[36px] mx-auo flex p-2">

                    {Array(3).fill(0).map((_, i) => (
                        <UpcomingCards key={i} />
                    ))}

                    <CarouselComponent />
                </div>
            </div>
        </section>
    )
}

const UpcomingCards = () => {
    return (
        <div className="max-w-[414.67px] text-white h-full p-3 w-[380px] bg-[#191F25] rounded-[36px]">

            <Image src={UPCOMING_CARD_1_BANNER} alt="upcoming card 1 banner" className="w-[378.56px] h-[218.44px] rounded-[26px]" />

            <div className=" flex items-center space-x-2 m-4">
                <Image src={RECT_IMAGE_UPCOMING_CARD} alt="rect image upcoming card" className="w-[48.91px]" />
                <h1 className={`${ReadexProBold.className} text-lg`}>Lorem Ipsum</h1>
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

import Image from 'next/image'
import { ReadexProBold } from '@/app/fonts'

import { BLUE } from '@/app/constants'

import NEXUS_LOGO from '@/assets/nexus_logo.png'
import TELEGRAM_ICON from '@/assets/telegram_icon.png'
import TWITTER_ICON from '@/assets/twitter_icon.png'
import DISCROD_ICON from '@/assets/discord_icon.png'
import LAUNCH_BANNER from '@/assets/launch_banner.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'

export const Footer: React.FC = () => {
    return (
        <>
            {/* <div className="flex items-center relative justify-center w-full p-8 lg:px-28">
                <Image src={LAUNCH_BANNER} alt="Launch Banner" className="w-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <div className='bg-white z-10 ani cursor-pointer rounded-full w-[50px] h-[50px] flex items-center justify-center'>
                        <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[15px]' />
                    </div>
                </div>
            </div> */}

            <div style={{
                backgroundColor: BLUE
            }} className='mx-8 mt-10 lg:mt-28 lg:mx-16 mb-12 rounded-[50px] py-4 px-8 flex items-center justify-between'>

                <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase `}>
                    <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                    <h1 className={`text-base uppercase text-white ${ReadexProBold.className} font-medium`}>Nexus</h1>
                </div>

                <div className="h-[32px] lg:h-[56.85px] flex text-white bg-black rounded-[36px] items-center justify-between px-4 space-x-2">
                    <div className="flex items-center space-x-2">
                        {/* <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="z-10 anilogo cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" /> */}
                        <img src='/Images/hdtelegramlogo.png' alt="Telegram Icon" className="relative z-50 anilogo cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" />
                        {/* <Image src={TWITTER_ICON} alt="Twitter Icon" className="z-10 anilogo cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" /> */}
                        <img src='/Images/hdtwitterlogo.png' alt="Twitter Icon" className="relative z-50  anilogo cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" />
                        {/* <Image src={DISCROD_ICON} alt="Discord Icon" className="z-10 anilogo cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" /> */}
                        <img src='/Images/hddiscordlogo.png' alt="Discord Icon" className="relative z-50  anilogo cursor-pointer w-10 lg:w-[54.82px]  lg:h-[54.82px]" />
                    </div>
                </div>
            </div>
        </>
    )
}


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
        <section className='py-8'>
            
            <div className='flex flex-col lg:flex-row w-full px-4 lg:px-28 justify-center'>

                <div className='flex flex-col w-full items-start'>

                    <div className="h-[43.4px] hidden lg:flex text-white my-4 bg-[#0075FF] rounded-[36px] items-center justify-between px-10 space-x-4">
                        <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase ${ReadexProBold.className}`}>
                            <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                            <h1 className='text-base'>Nexus</h1>
                        </div>
                    </div>

                    <h1 className={`text-5xl overflow-hidden w-full lg:text-7xl font-semibold ${Sen.className} `}>
                        Crypto
                        <Image src={STAR_ICON} alt="Star Icon" className='inline mx-8' />
                        <br />
                        Launchpad
                    </h1>

                    <div className='hidden lg:flex items-start space-x-4 my-16'>
                        <div style={{
                            backgroundColor: BLUE,
                        }} className='w-full h-[50px] rounded-[36px] px-4 text-white flex items-center justify-center'>
                            <h1 className={`${Poppins.className} w-full text-base font-semibold`}>Get Started</h1>
                            <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                                <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                            </div>
                        </div>

                        <div className='w-[161.11px] h-[50px] border-2 rounded-[36px] text-white flex items-center justify-center'>
                            <h1 className={`${Inter.className} text-black text-sm font-medium`}>
                                Know More
                            </h1>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col w-full items-center my-8 lg:my-0 lg:items-end'>
                    <Image src={LANDING_BANNER} alt="Landing Banner" className=' w-full  hidden lg:block' />
                    <Image src={LANDING_BANNER_MOBILE} alt="Landing Banner Mobile" className=' w-full lg:px-0 lg:hidden' />
                </div>

                <div className='flex lg:hidden  items-center justify-center space-x-4 my-16'>

                    <div style={{
                        backgroundColor: BLUE,
                    }} className='w-full space-x-2 max-w-[350px] h-[50px] rounded-[36px] px-4 text-white flex items-center justify-center'>
                        <h1 className={`${Poppins.className} w-full text-sm inline-block whitespace-nowrap font-semibold`}>Get Started</h1>
                        <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                            <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                        </div>
                    </div>

                    <div className='min-w-[50px] min-h-[50px] bg-white border-2 rounded-[36px] px-4 text-white flex items-center justify-center'>
                        <Image src={PLUS_ICON} alt="plus Icon" className='max-w-[14.16px] max-h-[14.56px]' />
                    </div>

                    <div className='w-full h-[50px] max-w-[350px] rounded-[36px] px-4 text-white bg-black flex items-center justify-center'>
                        <div className="flex items-center space-x-2">
                            <Image src={TELEGRAM_ICON} alt="Telegram Icon" className="w-[42px] h-[42px]" />
                            <Image src={TWITTER_ICON} alt="Twitter Icon" className="w-[42px] h-[42px]" />
                            <Image src={DISCROD_ICON} alt="Discord Icon" className="w-[42px] h-[42px]" />
                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}
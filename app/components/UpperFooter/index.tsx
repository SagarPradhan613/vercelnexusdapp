import Image from 'next/image'

import NEXUS_LOGO from '@/assets/nexus_logo.png'
import TELEGRAM_ICON from '@/assets/telegram_icon.png'
import TWITTER_ICON from '@/assets/twitter_icon.png'
import DISCROD_ICON from '@/assets/discord_icon.png'
import LAUNCH_BANNER from '@/assets/launch_banner.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'

const UpperFooter = () => {
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

            <div className="flex  items-center relative justify-center w-full p-8 lg:px-20">
                <div className='absolute z-30 responsive-absolute-btn-pos left-[9vw] top-[64%]'>
                    <div className='px-4 responsive-padding responsive-btn-size py-1 ani w-[200px] responsive-absolute-btn-width relative z-50 rounded-[40px] text-[#0075FF] bg-white flex justify-between items-center'>
                        <div className='mx-3'>
                            <p className='font-semibold text-base whitespace-nowrap'>Get Started</p>
                        </div>
                        <div className='rounded-[50%] h-[39px] flex w-[39px] justify-center items-center bg-white'>
                            <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-1/2' />
                        </div>
                    </div>
                </div>
                <Image src={LAUNCH_BANNER} alt="Launch Banner" className="w-full" />
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 flex items-center justify-center">
                    <div className='bg-[white] z-10 ani cursor-pointer rounded-full w-[50px] h-[50px] flex items-center justify-center'>
                        <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[15px]' />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default UpperFooter
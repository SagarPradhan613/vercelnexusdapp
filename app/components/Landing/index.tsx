
import Image from 'next/image'

import { Inter, Poppins, ReadexProBold, Sen } from '@/app/fonts'
import { BLUE } from '@/app/constants'

import ELLIPSE_TOP_LEFT from '@/assets/ellipse_top_left.png'
import LANDING_BANNER from '@/assets/landing_banner.png'
import NEXUS_LOGO from '@/assets/nexus_logo.png'
import STAR_ICON from '@/assets/star_icon.png'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png'

export const Landing: React.FC = () => {
    return (
        <section className='relative py-16'>
            <Image src={ELLIPSE_TOP_LEFT} alt="Ellipse Top Left" className=' absolute -top-36 -left-36' />

            <div className='flex w-full px-28 justify-center'>

                <div className='flex flex-col w-full items-start'>

                    <div className="h-[43.4px] flex text-white my-4 bg-[#0075FF] rounded-[36px] items-center justify-between px-10 space-x-4">
                        <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase ${ReadexProBold.className}`}>
                            <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                            <h1 className='text-base'>Nexus</h1>
                        </div>
                    </div>

                    <h1 className={`text-7xl font-semibold ${Sen.className} `}>
                        Crypto
                        <Image src={STAR_ICON} alt="Star Icon" className='inline mx-8' />
                        <br />
                        Launchpad
                    </h1>

                    <div className='flex items-start space-x-4 my-16'>

                        <div style={{
                            backgroundColor: BLUE,
                        }} className='w-[184.92px] h-[50px] rounded-[36px] px-4 text-white flex items-center justify-center'>
                            <h1 className={`${Poppins.className} w-full text-base font-semibold`}>Get Started</h1>
                            <div className='bg-white rounded-full w-[53.82px] h-[39.82px] flex items-center justify-center'>
                                <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-[14.16px] h-[14.56px]' />
                            </div>
                        </div>

                        <div className='w-[161.11px] h-[50px] border-2 rounded-[36px] text-white flex items-center justify-center'>
                            <h1 className={`${Inter.className} text-black text-base font-medium`}>
                                Know More
                            </h1>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col w-full items-end'>
                    <Image src={LANDING_BANNER} alt="Landing Banner" className='w-full min-w-[617px] min-h-[410px]' />
                </div>

            </div>

        </section>
    )
}
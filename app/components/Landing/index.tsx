
import Image from 'next/image'

import ELLIPSE_TOP_LEFT from '@/assets/ellipse_top_left.png'
import LANDING_BANNER from '@/assets/landing_banner.png'
import NEXUS_LOGO from '@/assets/nexus_logo.png'
import { ReadexProBold, Sen } from '@/app/fonts'

export const Landing: React.FC = () => {
    return (
        <section className='relative'>
            <Image src={ELLIPSE_TOP_LEFT} alt="Ellipse Top Left" className=' absolute -top-36 -left-36' />

            <div className='flex w-full justify-center'>
                <div className='flex flex-col bg-red-700'>
                    
                    <div className="h-[32px] flex text-white bg-[#0075FF] lg:bg-black rounded-[36px] items-center justify-between px-10 space-x-4">
                        <div className={`space-x-2 flex items-center justify-center tracking-widest uppercase ${ReadexProBold.className}`}>
                            <Image src={NEXUS_LOGO} alt="Nexus Logo" className='w-[14.16px] h-[14.56px]' />
                            <h1 className='text-base'>Nexus</h1>
                        </div>
                    </div>
                    
                    <h1 className={`${Sen.className}`}>
                        Crypto
                        Launchpad
                    </h1>

                </div>

                <div>
                    <Image src={LANDING_BANNER} alt="Landing Banner" className='w-[817px] h-[510px]' />
                </div>
            </div>

        </section>
    )
}
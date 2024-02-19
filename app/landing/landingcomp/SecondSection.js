'use client'
import Image from 'next/image'
import ARROW_LEFT_ICON from '@/assets/arrow_left_icon.png';


const SecondSection = () => {
    return (
        <>
            <div className="lg:flex mt-10 lg:mt-0 w-full lg:gap-7 px-4 lg:px-20">
                <div className="lg:w-[45%] w-full rounded-[50px] h-[80px] md:h-[140px] px-5 py-3 pb-5 bg-black items-center text-white flex justify-between ">
                    <div>
                        <div className="flex items-center gap-6">
                            <img src="/Images/revolution.png" className="lg:w-1/4 w-1/6"></img>
                            <p className="font-semibold mt-4 md:text-2xl text-base readex responsive-font">Revolutionizing <br></br>Launchpad</p>
                        </div>
                    </div>
                    <div className='flex mt-4 items-center'>
                        <a href='/launchpad'  >
                            <div className='rounded-[50%] h-[39px] ani relative z-30 flex w-[39px] justify-center items-center bg-white'>
                                <Image src={ARROW_LEFT_ICON} alt="Arrow Left Icon" className='w-1/2' />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full mt-4 lg:mt-0 h-[80px] md:h-[140px] bg-[#0075FF] flex justify-around items-center py-3 lg:px-4 px-3 rounded-[50px]">
                    <div className='flex justify-center items-center gap-2'>
                        <img src='/Images/sec1.png' className='lg:w-[50px] w-[20px]'></img>
                        <div className='  lg:ml-3'>
                            <p className='font-medium lg:text-sm text-[8px] text-white'>AVG ROI</p>
                            <p className='font-semibold lg:text-4xl text-lg mt-1 lg:mt-2 text-white'>15X</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src='/Images/sec2.png' className='lg:w-[50px] w-[20px]'></img>
                        <div className='  lg:ml-3'>
                            <p className='font-medium lg:text-sm text-[8px] text-white'>Total Participants</p>
                            <p className='font-semibold lg:text-4xl text-lg mt-1 lg:mt-2 text-white'>200,000+</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src='/Images/sec3.png' className='lg:w-[50px] w-[20px]'></img>
                        <div className='  lg:ml-3'>
                            <p className='font-medium lg:text-sm text-[8px] text-white'>Total Assets Connected</p>
                            <p className='font-semibold lg:text-4xl mt-1 lg:mt-2 text-lg text-white'>1 Billion</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SecondSection;
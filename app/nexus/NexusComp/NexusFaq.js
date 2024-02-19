'use client'
import React,{useState} from 'react';
import './NexusFaq.css';


const NexusFaq = () => {
    const [accordionChecked, setAccordionChecked] = useState('');

    const handleAccordionChange = (accordionId) => {
        if (accordionChecked === accordionId) {
            setAccordionChecked('');
        } else {
            setAccordionChecked(accordionId);
        }
    };
    return (
        <>
            <div className="flex flex-col justify-center font-semibold text-3xl lg:text-7xl items-center w-full mt-10 lg:mt-0 lg:px-48 px-4">
                <p><span className="text-[#0075FF] readex ">Nexus</span> FAQ</p>

                <div class="relative lg:mt-16 mt-4 ac-container h-full rounded-[25px] bg-white py-3 transition-all duration-300 ease-in border border-[rgba(0,0,0,0.3)] my-3 sm:mx-40 lg:py-5">
                    <div className=''>
                    <input
                                id="ac-1"
                                name="accordion-1"
                                type="checkbox"
                                checked={accordionChecked === 'ac-1'}
                                onChange={() => handleAccordionChange('ac-1')}
                            />
                            <span className="absolute right-2 top-2 lg:right-3 lg:top-5">
                                <img
                                    src="/Images/faqarrow.png"
                                    className={`h-[30px] w-[30px] ${
                                        accordionChecked === 'ac-1' ? 'rotate-upside-down' : ''
                                    }`}
                                    alt="accordion arrow"
                                />
                            </span>
                        <label for="ac-1" className="text-base lg:text-2xl readex font-semibold text-[#090909] sm:ml-2 sm:mr-5 text-left w-[90%] px-[6%] lg:w-full lg:pl-[2%] lg:pr-[6%]">Project Criteria</label>
                        <section class="ac-small px-5">
                            <p className='text-base mt-5 mb-5 font-normal text-[#6C727F] sm:ml-2 readex sm:mr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s  ... <br /> <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard </p>
                        </section>
                    </div>
                </div>
                <div class="relative mt-4 ac-container h-full rounded-[25px] bg-white py-3 transition-all duration-300 ease-in border border-[rgba(0,0,0,0.3)] my-3 sm:mx-40  lg:py-5">
                    <div className=''>
                        <input id="ac-2" name="accordion-1" type="checkbox"   checked={accordionChecked === 'ac-2'}
                                onChange={() => handleAccordionChange('ac-2')}/>
                        <span className='absolute right-2 top-2 lg:right-3 lg:top-5'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg> */}
                            <img
                                    src="/Images/faqarrow.png"
                                    className={`h-[30px] w-[30px] ${
                                        accordionChecked === 'ac-2' ? 'rotate-upside-down' : ''
                                    }`}
                                    alt="accordion arrow"
                                />
                        </span>
                        <label for="ac-2" className="text-base lg:text-2xl readex font-semibold text-[#090909] sm:ml-2 sm:mr-5 text-left w-[90%] px-[6%] lg:w-full lg:pl-[2%] lg:pr-[6%]">Transparancy</label>
                        <section class="ac-small px-5">
                            <p className='text-base mt-5 mb-5 font-normal text-[#6C727F] sm:ml-2 readex sm:mr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s  ... <br /> <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard </p>
                        </section>
                    </div>
                </div>
                <div class="relative ac-container h-full rounded-[25px] bg-white py-3 transition-all duration-300 ease-in border border-[rgba(0,0,0,0.3)] my-3 sm:mx-40  lg:py-5">
                    <div className=''>
                        <input id="ac-3" name="accordion-1" type="checkbox"   checked={accordionChecked === 'ac-3'}
                                onChange={() => handleAccordionChange('ac-3')}/>
                        <span className='absolute right-2 top-2 lg:right-3 lg:top-5'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg> */}
                            <img
                                    src="/Images/faqarrow.png"
                                    className={`h-[30px] w-[30px] ${
                                        accordionChecked === 'ac-3' ? 'rotate-upside-down' : ''
                                    }`}
                                    alt="accordion arrow"
                                />
                        </span>
                        <label for="ac-3" className="text-base lg:text-2xl readex font-semibold text-[#090909] sm:ml-2 sm:mr-5 text-left w-[90%] px-[6%] lg:w-full lg:pl-[2%] lg:pr-[6%]">Winners</label>
                        <section class="ac-small px-5">
                            <p className='text-base mt-5 mb-5 font-normal text-[#6C727F] sm:ml-2 readex sm:mr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s  ... <br /> <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard </p>
                        </section>
                    </div>
                </div>
                <div class="relative ac-container h-full rounded-[25px] bg-white py-3 transition-all duration-300 ease-in border border-[rgba(0,0,0,0.3)] my-3 sm:mx-40  lg:py-5">
                    <div className=''>
                        <input id="ac-4" name="accordion-4" type="checkbox"   checked={accordionChecked === 'ac-4'}
                                onChange={() => handleAccordionChange('ac-4')} />
                        <span className='absolute right-2 top-2 lg:right-3 lg:top-5'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg> */}
                            <img
                                    src="/Images/faqarrow.png"
                                    className={`h-[30px] w-[30px] ${
                                        accordionChecked === 'ac-4' ? 'rotate-upside-down' : ''
                                    }`}
                                    alt="accordion arrow"
                                />
                        </span>
                        <label for="ac-4" className="text-base lg:text-2xl readex font-semibold text-[#090909] sm:ml-2 sm:mr-5 text-left w-[90%] px-[6%] lg:w-full lg:pl-[2%] lg:pr-[6%]">Compliance</label>
                        <section class="ac-small px-5">
                            <p className='text-base mt-5 mb-5 font-normal text-[#6C727F] sm:ml-2 readex sm:mr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s  ... <br /> <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NexusFaq;
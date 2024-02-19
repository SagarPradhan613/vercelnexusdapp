const Sales = () => {
    return (
        <>
            <div className="MainContainer lg:mb-32 lg:flex block px-4 lg:px-20">
                <div className="w-full mt-6 lg:mt-24 flex flex-col justify-center items-center">
                    <p className="font-semibold text-[#0075FF] text-3xl lg:text-7xl "><span className="text-black readex  mr-3 lg:mr-6">Completed</span>Sales Report</p>

                    <div className="w-full rounded-[36px] border border-[rgba(0,0,0,0.1)] responsive-display lg:mt-16 responsive-nexus-padding  mt-6 lg:flex block px-3 py-3">
                        <div className="lg:w-[40%] flex justify-between px-4 lg:px-8 py-8 rounded-[36px] responsive-width lg:bg-[#F2F2F2]">
                            <div className="flex items-center">
                                <div>
                                    <div className="bg-[#0075FF] rounded-[8px] h-[60px] w-[60px]">

                                    </div>
                                </div>

                                <div className="flex flex-col justify-between py-2 ml-4 text-start h-full items-center">
                                    <p className='font-medium lg:text-sm text-[8px] text-start w-full text-black opacity-50'>Select Project</p>
                                    <p className='font-semibold lg:text-2xl text-lg mt-1 lg:mt-2 text-black'>Lorem Ipsum</p>
                                </div>

                            </div>

                            <div className="flex justify-center items-center">
                                <div className="hidden ani border text-base font-semibold border-black rounded-[36px] px-10 py-3 lg:flex justify-center items-center">
                                    Proof
                                </div>

                                <div className="ml-4 ani">
                                    <img className="h-[45px] w-[45px]" src="/Images/faqarrow.png"></img>
                                </div>
                            </div>

                        </div>
                        <div className="px-4">
                            <div className="lg:hidden ani py-2 w-full  border border-black rounded-[36px] flex flex-col justify-center items-center">
                                Proof
                            </div>
                        </div>

                        <div className="responsive-width lg:w-[60%]">
                            <div className="w-full mt-4 lg:mt-0 h-[80px] md:h-[140px]  flex justify-around items-center py-3 lg:px-4 px-3 rounded-[50px]">
                                <div className='flex justify-center items-center gap-2'>
                                    <img src='/Images/salelogo1.png' className='lg:w-[50px] w-[20px]'></img>
                                    <div className='  lg:ml-3'>
                                        <p className='font-bold lg:text-sm text-[8px] text-black lg:opacity-50'>AVG ROI</p>
                                        <p className='font-semibold lg:text-4xl text-lg mt-1 lg:mt-2 text-black'>15X</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src='/Images/salelogo2.png' className='lg:w-[50px] w-[20px]'></img>
                                    <div className='  lg:ml-3'>
                                        <p className='font-bold lg:text-sm text-[8px] text-black lg:opacity-50'>Total Participants</p>
                                        <p className='font-semibold lg:text-4xl text-lg mt-1 lg:mt-2 text-black'>200,000+</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    <img src='/Images/salelogo3.png' className='lg:w-[50px] w-[20px]'></img>
                                    <div className='  lg:ml-3'>
                                        <p className='font-bold lg:text-sm text-[8px] text-black lg:opacity-50'>Total Assets Connected</p>
                                        <p className='font-semibold lg:text-4xl mt-1 lg:mt-2 text-lg text-black'>1 Billion</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sales;
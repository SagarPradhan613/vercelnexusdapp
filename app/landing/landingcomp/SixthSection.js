const SixthSection = () => {
    return (
        <>
            <div className="mt-6 lg:mt-32 w-full lg:gap-7 px-4 lg:px-20">
                <div className="bg-[#000000] lg:pb-10 lg:px-20 px-8 lg:pt-10 pt-2 lg:rounded-[50px] rounded-[20px] w-full">
                    <div className="lg:flex w-full">
                        <div className="lg:w-1/2 lg:mt-12 mt-6 w-full text-xs lg:text-lg text-white">
                            <div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. survived not only five centuries, when an </p>
                            </div>
                            <div className="lg:my-8 my-4">
                                <p>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer</p>
                            </div>
                            <div>
                                <p><span className="text-[#84BCFF]">took a galley of type and scrambled it to make a type specimen </span> book. It has survived not only five centuries, when an unknown printer</p>
                            </div>
                        </div>

                        <div className="relative lg:w-1/2 mt-4 lg:mt-0 w-full flex justify-center items-center">
                            <div className="relative mob-img-size z-20">
                                <img src="/Images/sixthright1.png" className="w-full h-full"></img>
                            </div>
                            <div className="absolute mob-img-size2 z-10 right-6">
                                <img src="/Images/sixthright2.png" className="w-full h-full"></img>
                            </div>

                        </div>
                    </div>

                    <div className="lg:flex hidden w-full">
                        <div className="flex w-1/2 justify-center items-center">
                            <p className="text-white font-medium text-base">Our transactions algorithm functions on the following principle:</p>
                        </div>
                        <div className="flex w-1/2 justify-center items-center">
                            <div className="bg-[#191F25] p-4 text-[#84BCFF] rounded-[20px]">
                                <p>If you don&apos;t generate yield, the transaction doesn&apos;t go through.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SixthSection;
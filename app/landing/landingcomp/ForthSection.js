import React, { useState } from "react";




const ForthSection = () => {

    const [active, setActive] = useState(1);

console.log(active)

    return (
        <>
            <div className="relative mt-10 w-full">
                <div className="absolute right-0 z-10 -top-[70rem] w-full">
                    <img src="/Images/forthright.png" className="w-full"></img>
                </div>
                <div className="  mt-16  w-full lg:gap-7 px-4 lg:px-28">
                    <div className="flex flex-col w-full justify-center items-center">
                        <p className="text-black sen font-bold text-3xl lg:text-7xl text-center">Makes us <span className="text-[#0075FF]">Better</span> </p>
                        <p className="text-center mt-8 font-medium lg:text-2xl text-sm">We provide straight forward tools that maximize <br></br> financial opportunities.</p>
                    </div>

                    <div className="lg:flex relative z-30 lg:mt-16 mt-6 gap-6">
                        <div  className={`lg:w-1/3 w-full rounded-[50px] bgchange  flex px-8 py-8`}>
                            <div className="w-1/2 mr-3 flex justify-center items-center">
                                <img className="h-[75px] w-[75px]" src="/Images/forth1.png"></img>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm lg:text-xl">Native super-app + trading terminal <span className="font-medium">supported on desktop & mobile.</span> </p>
                            </div>
                        </div>

                        <div  className={`lg:w-1/3 my-4 lg:my-0 w-full rounded-[50px] bgchange  flex px-8 py-8`}>
                            <div className="w-1/2 mr-3 flex justify-center items-center">
                                <img className="h-[75px] w-[75px]" src="/Images/forth2.png"></img>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm lg:text-xl">Native super-app + trading terminal <span className="font-medium">supported on desktop & mobile.</span> </p>
                            </div>
                        </div>

                        <div  className={`lg:w-1/3  w-full rounded-[50px] bgchange  flex px-8 py-8`}>
                            <div className="w-1/2 mr-3 flex justify-center items-center">
                                <img className="h-[75px] w-[75px]" src="/Images/forth3.png"></img>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm lg:text-xl">Native super-app + trading terminal <span className="font-medium">supported on desktop & mobile.</span> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForthSection;
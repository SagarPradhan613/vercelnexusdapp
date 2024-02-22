'use client'
import { useMediaQuery } from '@react-hook/media-query';
import React, { useState, useEffect } from "react";

const MainNotification = () => {
    const [personalised, setPersonalised] = useState(true);
    const [general, setGeneral] = useState(false);



    const PersonalizedFunc = () => {
        setPersonalised(true);
        setGeneral(false);
    }

    const GeneralFunc = () => {
        setPersonalised(false);
        setGeneral(true);
    }

    return (
        <>
            <div className="  lg:px-20   w-full">
                <div className="border lg:gap-8 lg:flex lg:py-6 lg:px-6 border-[#FFFFFF1A] relative z-30 bg-[#0E111480] w-full rounded-[36px]">
                    {/* personlized list */}

                    <div className="lg:w-[70%] lg:pl-6 w-full ">

                        <div className="lg:flex hidden justify-between items-center">
                            <div>
                                <p className="readex font-semibold text-3xl text-white">Personalized Updates</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="flex glow relative z-30 rounded-[36px] justify-between bg-[#191F25] py-4 px-6 gap-8 items-center">
                                    <p className="readex  text-white font-medium text-sm">Sort by</p>

                                    <div>
                                        <img src="/Images/dropdownarrow.png"></img>
                                    </div>
                                </div>

                                <div className="flex glow rounded-[36px]  relative z-30 justify-between bg-[#191F25] py-4 px-4 gap-8 items-center">
                                    <p className="readex  text-white font-medium text-sm">Category</p>

                                    <div>
                                        <img src="/Images/dropdownarrow.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="lg:bg-[#191F25] lg:h-[80vh] overflow-auto px-6 py-4 rounded-[28px] lg:mt-4">
                            <div className="w-full mb-4 rounded-[36px] border border-[#FFFFFF1A] px-2 py-2 lg:hidden flex items-center">
                                <div onClick={() => { PersonalizedFunc() }} className={`w-1/2 transition-all duration-500 ease-in  bg-${personalised ? `[#0075FF]` : 'black'}  py-3 rounded-[36px] justify-center flex font-semibold text-sm text-white`}>
                                    <p>Personalized Updates</p>
                                </div>
                                <div onClick={() => { GeneralFunc() }} className={`w-1/2  bg-${general ? `[#0075FF]` : 'black'} transition-all duration-500 ease-in  py-3 rounded-[36px] justify-center flex font-semibold text-sm text-white`}>
                                    <p>General Updates</p>
                                </div>
                            </div>
                            <>
                                <div className={`${personalised ? '' : 'hidden'}`}>
                                    {/* cards */}
                                    {/* today */}
                                    <div className="mt-2">
                                        {/* title container */}
                                        <div className="day heading ">
                                            <p className="readex font-medium text-xs lg:font-semibold lg:text-lg opacity-50 text-white">Today</p>
                                        </div>
                                        {/* cardcontainer */}
                                        <div className="flex lg:flex-row flex-col lg:flex-wrap mt-2 w-full gap-3 lg:gap-4">
                                            <div className="responsive-notification-card cardglow   w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow   w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* yesterday */}
                                    <div className="mt-2">
                                        {/* title container */}
                                        <div className="day heading ">
                                            <p className="readex font-medium text-xs lg:font-semibold lg:text-lg opacity-50 text-white">Yesterday</p>
                                        </div>
                                        {/* cardcontainer */}
                                        <div className="flex lg:flex-row flex-col lg:flex-wrap mt-2 w-full gap-3 lg:gap-4">
                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani  lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani  lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani  lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani  lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* last week */}
                                    <div className="mt-2">
                                        {/* title container */}
                                        <div className="day heading ">
                                            <p className="readex font-medium text-xs lg:font-semibold lg:text-lg opacity-50 text-white">Last Week</p>
                                        </div>
                                        {/* cardcontainer */}
                                        <div className="flex lg:flex-row flex-col lg:flex-wrap mt-2 w-full gap-3 lg:gap-4">
                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani lg:ml-[5px] rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] ani lg:ml-[5px]  rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] lg:ml-[5px] rounded-[28px] px-4 py-2 ani flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] lg:ml-[5px] ani rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] lg:ml-[5px] rounded-[28px] px-4 py-2 ani flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="responsive-notification-card cardglow w-full bg-[#232A32] rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                                <div className="flex items-center justify-between ">
                                                    <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                        <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                    </div>

                                                    <div>
                                                        <div className="bg-[#00316A] lg:ml-[5px] ani rounded-[28px] px-4 py-2 flex items-center">
                                                            <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                            <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        </div>
                    </div>

                    {/* general list */}
                    <>
                        <div className={`lg:w-[30%] w-full  lg:pl-6 lg:flex flex-col ${general ? '' : 'hidden'}`}>
                            <div className="lg:flex hidden items-center  py-2">
                                <p className="readex font-semibold text-3xl text-white">General Updates</p>
                            </div>
                            <div className="lg:bg-[#191F25] lg:h-[80vh] overflow-auto px-6 py-4 rounded-[28px] lg:mt-4">
                                <div className="mt-2">
                                    {/* cardcontainer */}
                                    <div className="flex lg:flex-row flex-col lg:flex-wrap mt-2 w-full gap-3 lg:gap-4">
                                        <div className=" w-full bg-[#232A32] cardglow rounded-[25px] px-4 py-4 lg:px-2 lg:py-2 flex flex-col  gap-3">
                                            <div className="w-full">
                                                <img src="/Images/generaltop.png" className="w-full"></img>
                                            </div>
                                            <div className="px-4 pb-4">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">Lorem Ipsum is simply</p>
                                                <div className="flex mt-2">
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50 ">24th Mar 2024</p>
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50 ml-4">12:04 UTC </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className=" w-full bg-[#232A32] cardglow rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                            <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                            <div className="flex items-center justify-between ">
                                                <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                </div>

                                                <div>
                                                    <div className="bg-[#00316A] ani lg:ml-[5px] rounded-[28px] px-4 py-2 ani flex items-center">
                                                        <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                        <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" w-full bg-[#232A32] cardglow rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                            <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                            <div className="flex items-center justify-between ">
                                                <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                </div>

                                                <div>
                                                    <div className="bg-[#00316A] lg:ml-[5px] ani rounded-[28px] px-4 py-2 flex items-center">
                                                        <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                        <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" w-full bg-[#232A32] cardglow rounded-[25px] px-4 py-4 lg:px-6 lg:py-4 flex flex-col justify-between gap-8">
                                            <p className="font-semibold lg:text-lg text-sm text-white readex">New lottery is published for you, lorem ipsum end of</p>

                                            <div className="flex items-center justify-between ">
                                                <div className="flex justify-between responsive-notification-cat gap-4 rounded-[13px] bg-[#191F25] px-3 py-2 ">
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50">24th Mar 2024</p>

                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50">12:04 UTC</p>
                                                </div>

                                                <div>
                                                    <div className="bg-[#00316A] lg:ml-[5px] ani rounded-[28px] px-4 py-2 flex items-center">
                                                        <img src="/Images/rocket.png" className="h-[10px] w-[10px] mr-2"></img>
                                                        <p className="text-[#288BFF] readex font-medium text-sm">Launch</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" w-full bg-[#232A32] cardglow rounded-[25px] px-4 py-4 lg:px-2 lg:py-2 flex flex-col  gap-3">
                                            <div className="w-full">
                                                <img src="/Images/generaltop.png" className="w-full"></img>
                                            </div>
                                            <div className="px-4 pb-4">
                                                <p className="font-semibold lg:text-lg text-sm text-white readex">Lorem Ipsum is simply</p>
                                                <div className="flex mt-2">
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50 ">24th Mar 2024</p>
                                                    <p className="font-medium text-xs text-[#FFFFFF] opacity-50 ml-4">12:04 UTC </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>

                </div>
            </div>
        </>
    )
}

export default MainNotification;
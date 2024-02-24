'use client'

import React, { useState, useEffect } from "react";



const FifthSection = () => {
    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);

    const State1Fun = () => {
        setState1(true);
        setState2(false);
        setState3(false);
        setState4(false);
    }

    const State2Fun = () => {
        setState1(false);
        setState2(true);
        setState3(false);
        setState4(false);
    }
    const State3Fun = () => {
        setState1(false);
        setState2(false);
        setState3(true);
        setState4(false);
    }
    const State4Fun = () => {
        setState1(false);
        setState2(false);
        setState3(false);
        setState4(true);
    }

    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        // Reset the animation each time the image changes
        setAnimateImage(true);
        const timeout = setTimeout(() => {
            setAnimateImage(false);
        }, 1000); // Adjust this timeout to match the animation duration
        return () => clearTimeout(timeout);
    }, [currentImage]);

    const [animateImage, setAnimateImage] = useState(false);

    useEffect(() => {
        // Logic to set the current image based on state changes
        if (state1) {
            setCurrentImage("/Images/Engage.png");
        } else if (state2) {
            setCurrentImage("/Images/Snapshot.png");
        } else if (state3) {
            setCurrentImage("/Images/Lottery.png");
        } else if (state4) {
            setCurrentImage("/Images/Contribution.png");
        } else {
            setCurrentImage(null);
        }
    }, [state1, state2, state3, state4]);

    const fadeInAnimation = {
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out'
    };
    return (
        <>
            <div className="mt-6 lg:mt-32 w-full lg:gap-7 px-4 responsive-body-padding lg:px-20">
                <div className="flex flex-col w-full justify-center items-center">
                    <p className="text-black sen font-bold text-3xl lg:text-7xl text-center">Easy &<span className="text-[#0075FF] ml-6">Cutting Edge</span> </p>
                    <p className="text-center lg:mt-8 mt-2 font-medium lg:text-2xl text-sm">We provide straight forward tools that maximize <br></br> financial opportunities.</p>
                </div>

                <div className="lg:flex block w-full lg:mt-14">
                    <div className="lg:w-1/2 w-full px-6 py-6">
                        <div className="flex">
                            <div className="w-[20%]">
                                {state1 ?
                                    <>
                                        <div className={`flex mob-width flex-col justify-center items-center moveup transition-effect ${state1 ? 'visible' : ''}`}>
                                            <div className="flex mob-width flex-col justify-center items-center">
                                                <img className="h-full w-full" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-card-mini.png"></img>
                                            </div>
                                            <div className="lg:mt-6 mt-3 w-[2px] lg:h-[50px] h-[50px] bg-[#C1C1C1]">

                                            </div>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className="flex lg:w-[6vw] justify-center mr-2   h-full items-center">
                                            <p className="font-black text-4xl mb-[20px]">.</p>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className={`ml-4 lg:ml-0 responsive-cutting-edge-margin flex flex-col ${state1 ? '' : 'justify-center'}`}>
                                <p onClick={() => { State1Fun() }} className={`font-semibold cursor-default relative z-30 text-xl lg:text-4xl readex ${state1 ? 'text-[#0075FF]' : 'text-black'}`}>Engage</p>
                                {state1 ? <><p className="font-medium moveup text-xs lg:text-base opacity-60 mt-6">Engage with Nexus community and compete with others in sharing the upcoming launches for a chance to win a spot.</p></> : <></>}


                            </div>




                        </div>

                        {state1 ?
                            <>
                                <div className="w-full py-2 moveup lg:hidden flex flex-col mt-3 justify-center items-center bg-[#0075FF]  rounded-[36px]">
                                    <img className="w-[250px] " src="/Images/Engage.png"></img>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }

                        <div className="flex mt-6">
                            <div className="w-[20%]">
                                {state2 ?
                                    <>
                                        <div className="flex flex-col justify-center items-center moveup">
                                            <div className="flex mob-width flex-col justify-center items-center">
                                                <img className="h-full w-full" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-card-mini2.png"></img>
                                            </div>
                                            <div className="lg:mt-6 mt-3 w-[2px] lg:h-[50px] h-[50px] bg-[#C1C1C1]">

                                            </div>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className="flex lg:w-[6vw] justify-center mr-2   h-full items-center">
                                            <p className="font-black text-4xl mb-[20px]">.</p>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className={`ml-4 lg:ml-0 flex flex-col ${state2 ? '' : 'justify-center'}`}>
                                <p onClick={() => { State2Fun() }} className={`font-semibold relative z-30 text-xl lg:text-4xl readex cursor-default ${state2 ? 'text-[#0075FF]' : 'text-black'}`}>Snapshot</p>
                                {state2 ? <><p className="font-medium text-xs lg:text-base opacity-60 mt-6 moveup">Snapshots are taken of all the competing profiles and wallets.</p></> : <></>}


                            </div>

                        </div>

                        {state2 ?
                            <>
                                <div className="w-full py-2 moveup lg:hidden flex flex-col mt-3 justify-center items-center bg-[#0075FF]  rounded-[36px]">
                                    <img className="w-[250px] " src="/Images/Snapshot.png"></img>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }


                        <div className="flex mt-6">
                            <div className="w-[20%]">
                                {state3 ?
                                    <>
                                        <div className="flex flex-col justify-center items-center moveup">
                                            <div className="flex mob-width flex-col justify-center items-center">
                                                <img className="h-full w-full" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-card-mini3.png"></img>
                                            </div>
                                            <div className="lg:mt-6 mt-3 w-[2px] lg:h-[50px] h-[50px] bg-[#C1C1C1]">

                                            </div>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className="flex lg:w-[6vw] justify-center mr-2   h-full items-center">
                                            <p className="font-black text-4xl mb-[20px]">.</p>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className={`ml-4 lg:ml-0 flex flex-col ${state3 ? '' : 'justify-center'}`}>
                                <p onClick={() => { State3Fun() }} className={`font-semibold relative z-30 text-xl lg:text-4xl readex cursor-default ${state3 ? 'text-[#0075FF]' : 'text-black'}`}>Lottery</p>
                                {state3 ? <><p className="font-medium moveup text-xs lg:text-base opacity-60 mt-6">Nexus smart contract withdraws a lottery for each launch and selects limited random profiles which will be investing.</p></> : <></>}


                            </div>

                        </div>

                        {state3 ?
                            <>
                                <div className="w-full py-2 moveup lg:hidden flex flex-col mt-3 justify-center items-center bg-[#0075FF]  rounded-[36px]">
                                    <img className="w-[250px] " src="/Images/Lottery.png"></img>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }


                        <div className="flex mt-6">
                            <div className="w-[20%]">
                                {state4 ?
                                    <>
                                        <div className="flex flex-col justify-center items-center moveup">
                                            <div className="flex mob-width flex-col justify-center items-center">
                                                <img className="h-full w-full" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-card-mini4.png"></img>
                                            </div>
                                            <div className="lg:mt-6 mt-3 w-[2px] lg:h-[50px] h-[50px] bg-[#C1C1C1]">

                                            </div>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <div className="flex lg:w-[6vw] justify-center mr-2   h-full items-center">
                                            <p className="font-black text-4xl mb-[20px]">.</p>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className={`ml-4 responsive-cutting-edge-margin lg:ml-0 flex flex-col ${state4 ? '' : 'justify-center'}`}>
                                <p onClick={() => { State4Fun() }} className={`font-semibold relative z-30 text-xl lg:text-4xl readex cursor-default ${state4 ? 'text-[#0075FF]' : 'text-black'}`}>Contribution</p>
                                {state4 ? <><p className="font-medium text-xs lg:text-base opacity-60 mt-6 moveup">Selected profiles and wallets invest their funds into the sale and claim purchased tokens according to the vesting period.</p></> : <></>}


                            </div>

                        </div>

                        {state4 ?
                            <>
                                <div className="w-full py-2 moveup lg:hidden flex flex-col mt-3 justify-center items-center bg-[#0075FF]  rounded-[36px]">
                                    <img className="w-[250px] " src="/Images/Contribution.png"></img>
                                </div>
                            </>
                            :
                            <>
                            </>
                        }

                    </div>

                    <div className="bg-[#0075FF] py-4 hidden lg:flex justify-center items-center rounded-[36px]  lg:h-[500px] lg:w-1/2 w-full">
                        {/* {state1 ? <img className="moveup" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pin-section-main.png" />
                            :
                            state2 ? <img className="moveup" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-snapshot.png" />
                                :
                                state3 ? <img className="moveup" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-lottery.png" />
                                    :
                                    state4 ? <img className="moveup" src="https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/pinned-section-contribution.png" />
                                        :
                                        null
                        } */}
                        {currentImage && (
                            <img className={animateImage ? "moveup md:h-[400px] md:w-[550px] h-[250px] " : "h-[250px]  md:h-[400px] md:w-[550px]"} src={currentImage} alt="Your image" />
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default FifthSection;
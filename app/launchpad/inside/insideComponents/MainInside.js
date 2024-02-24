'use client'
import { useMediaQuery } from '@react-hook/media-query';
import { document } from 'postcss';
import React, { useState, useEffect, useRef } from "react";


const MainInside = () => {
    const [details, setDetails] = useState(true);
    const [ido, setIdo] = useState(false);
    const [reachKey, setReachKey] = useState(true);
    const [reachOverview, setReachOverview] = useState(false);
    const [reachFeatures, setReachFeatures] = useState(false);
    const [reachMarket, setReachMarket] = useState(false);
    const [reachToken, setReachToken] = useState(false);
    const [reachRevenue, setReachRevenue] = useState(false);
    const [reachMetrics, setReachMetrics] = useState(false);



    const [idoTimeline, setIdoTimeline] = useState(false);
    const [idoTerms, setIdoTerms] = useState(false);

    const bodyRef = useRef(null);
    const keyRef = useRef(null);
    const overRef = useRef(null);
    const testRef = useRef(null);
    const marketRef = useRef(null);
    const tokenRef = useRef(null);
    const revenueRef = useRef(null);
    const tokenMetricRef = useRef(null);



    const timelineRef = useRef(null);
    const termsRef = useRef(null);

    useEffect(() => {
        if (reachMarket) {
            setReachFeatures(false);
            // console.log("done")
        }
    }, [reachMarket])


    // overref
    useEffect(() => {
        const handleScroll = () => {
            if(overRef.current){
                 const itemOffset = overRef.current.offsetTop;
            const scrollTop = bodyRef.current.scrollTop; // Access scrollTop of the container

            if (scrollTop >= itemOffset) {
                // setReachFeatures(false);
                setReachKey(false);
                setReachOverview(true);
                // setReachMarket(false);
                // setReachToken(false);
                // setReachRevenue(false);
                // setReachMetrics(false);
            }
            else if (scrollTop <= itemOffset) {
                setReachKey(true);
                setReachOverview(false);
            }
            else {
                setReachOverview(false);
            }
            }
           
        };

        bodyRef.current.addEventListener('scroll', handleScroll); // Access current property to get the DOM element

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll); // Access current property to get the DOM element
        };
    }, []);

    // test and feature ref
    useEffect(() => {
        const handleScroll = () => {
            if (testRef.current) {
                const itemOffset = testRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop; // Access scrollTop of the container

                if (scrollTop >= itemOffset) {
                    setReachFeatures(true);
                    // setReachKey(false);
                    setReachOverview(false);
                    // setReachMarket(false);
                    // setReachToken(false);
                    // setReachRevenue(false);
                    // setReachMetrics(false);

                } else {
                    setReachFeatures(false);
                }
            }
        };

        bodyRef.current.addEventListener('scroll', handleScroll); // Access current property to get the DOM element

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll); // Access current property to get the DOM element
        };
    }, []);

    // market ref

    useEffect(() => {
        const handleScroll = () => {
            if (marketRef.current) {
                const itemOffset = marketRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop;

                if (scrollTop >= itemOffset) {
                    setReachMarket(true);
                    setReachFeatures(false); // Set reachFeatures to false when reachMarket is true
                } else {
                    setReachMarket(false);
                }
            }

        };

        bodyRef.current.addEventListener('scroll', handleScroll);

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // token ref
    useEffect(() => {
        const handleScroll = () => {
            if (tokenRef.current) {
                const itemOffset = tokenRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop;

                if (scrollTop >= itemOffset) {
                    setReachToken(true);
                    setReachMarket(false); // Set reachFeatures to false when reachMarket is true
                } else {
                    setReachToken(false);
                }
            }
        };

        bodyRef.current.addEventListener('scroll', handleScroll);

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // revenueRef
    useEffect(() => {
        const handleScroll = () => {
            if (revenueRef.current) {
                const itemOffset = revenueRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop;

                if (scrollTop >= itemOffset) {
                    setReachRevenue(true);
                    setReachToken(false); // Set reachFeatures to false when reachMarket is true
                } else {
                    setReachRevenue(false);
                }
            }

        };

        bodyRef.current.addEventListener('scroll', handleScroll);

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // tokenMetricRef
    useEffect(() => {
        const handleScroll = () => {
            if (tokenMetricRef.current) {
                const itemOffset = tokenMetricRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop;

                if (scrollTop >= itemOffset) {
                    setReachMetrics(true);
                    setReachRevenue(false);
                } else {
                    setReachMetrics(false);
                }
            }

        };

        bodyRef.current.addEventListener('scroll', handleScroll);

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // idotimeline
    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) { // Check if timelineRef.current is not null
                const itemOffset = timelineRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop; // Access scrollTop of the container

                if (scrollTop >= itemOffset) {
                    setReachKey(false);
                    setIdoTimeline(true);
                } else if (scrollTop <= itemOffset) {
                    setReachKey(true);
                    setIdoTimeline(false);
                } else {
                    setIdoTimeline(false);
                }
            }
        };

        bodyRef.current.addEventListener('scroll', handleScroll); // Access current property to get the DOM element

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll); // Access current property to get the DOM element
        };
    }, []);


    // termsref
    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const itemOffset = termsRef.current.offsetTop;
                const scrollTop = bodyRef.current.scrollTop; // Access scrollTop of the container

                if (scrollTop >= itemOffset) {
                    setIdoTerms(true);
                    setIdoTimeline(false);

                } else {
                    setIdoTerms(false);
                }
            }

        };

        bodyRef.current.addEventListener('scroll', handleScroll); // Access current property to get the DOM element

        return () => {
            bodyRef.current.removeEventListener('scroll', handleScroll); // Access current property to get the DOM element
        };
    }, []);















    const DetailsFunc = () => {
        setDetails(true);
        setIdo(false);
    }

    const IdoFunc = () => {
        setDetails(false);
        setIdo(true);
    }

    // console.log("reve", reachRevenue);
    // console.log("metrics", reachMetrics);
    return (
        <>
            <div className="  lg:px-20   w-full">
                <div className="lg:border lg:gap-6 lg:flex lg:py-4 lg:px-4 border-[#FFFFFF1A] bg-[#0E111480] relative z-30 w-full rounded-[36px]">
                    <div className="w-[25%] lg:block hidden pb-16 bg-[#191F25] border border-[white] border-opacity-5 rounded-[28px] px-3 py-2">
                        <div className='w-full rounded-[36px] bg-black flex items-center p-2'>
                            <div onClick={() => { DetailsFunc() }} className={`bg-${details ? '[#0075FF]' : ''} text-white w-1/2 relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}>
                                Project Details
                            </div>
                            <div onClick={() => { IdoFunc() }} className={`bg-${ido ? '[#0075FF]' : ''} text-white  w-1/2 relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}>
                                IDO
                            </div>
                        </div>


                        {/* roadmap */}
                        {details ?
                            <>
                                <div className='relative gap-4 flex flex-col px-6 mt-6 '>
                                    <div className='absolute z-10 h-full w-[2px] bg-[#0075FF]'>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-start'>
                                        <div className={` bg-${reachKey ? '[#0075FF]' : "[#24282D]"} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold mt-[-5px] text-base text-white'>Key Metrics</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-center'>
                                        <div className={`bg-${reachOverview ? '[#0075FF]' : "[#24282D]"} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Overview</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-center'>
                                        <div className={`bg-${reachFeatures ? '[#0075FF]' : "[#24282D]"} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Key Features</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-center'>
                                        <div className={`bg-${reachMarket ? '[#0075FF]' : "[#24282D]"} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Market Traction</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-center'>
                                        <div className={`bg-${reachToken ? '[#0075FF]' : '[#24282D]'} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Token Utility</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-center'>
                                        <div className={`bg-${reachRevenue ? '[#0075FF]' : '[#24282D]'} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Revenue</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-end'>
                                        <div className={`bg-${reachMetrics ? '[#0075FF]' : '[#24282D]'} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Token Metrics</p>
                                        </div>

                                    </div>

                                </div>
                            </>
                            :
                            <>
                                <div className='relative gap-4 flex flex-col px-6 mt-6 '>
                                    <div className='absolute z-10 h-full w-[2px] bg-[#0075FF]'>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-start'>
                                        <div className={` bg-${reachKey ? '[#0075FF]' : "[#24282D]"} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold mt-[-5px] text-base text-white'>Key Metrics</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-center'>
                                        <div className={`bg-${idoTimeline ? '[#0075FF]' : "[#24282D]"} rounded-[50%] relative z-20  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>IDO Timeline</p>
                                        </div>

                                    </div>
                                    <div className='flex justify-start ml-[-5px] gap-4 items-end'>
                                        <div className={`bg-${idoTerms ? '[#0075FF]' : '[#24282D]'} rounded-[50%] relative z-30  border border-[#0075FF] h-[12px] w-[12px]`}>

                                        </div>
                                        <div>
                                            <p className='font-semibold text-base text-white'>Terms & Conditions</p>
                                        </div>

                                    </div>
                                </div>
                            </>
                        }

                    </div>

                    <div className="lg:w-[80%] w-full">
                        <div className='lg:flex hidden items-center w-full gap-4'>
                            <div className='responsive-inside-path-padding flex bg-[#191F25] cardglow items-center pl-4 pr-6 py-4 rounded-[28px] border border-[#FFFFFF26]'>
                                <div className='fleex justify-center items-center'>
                                    <img className='responsive-inside-path-img h-[30px] w-[30px]' src='/Images/right.png'></img>
                                </div>
                                <div className='flex text-white flex-col ml-4 justify-between h-full'>
                                    <p className='font-semibold responsive-inside-path-head text-xl'>Subscription</p>
                                    <p className='responsive-inside-path-para opacity-50 font-medium text-sm'>27th Dec 8.00 UTC</p>
                                </div>
                            </div>

                            <div className='h-full  justify-center items-center'>
                                <img src='/Images/nextstep.png'></img>
                            </div>

                            <div className='responsive-inside-path-padding flex bg-[#191F25] cardglow items-center pl-4 pr-6 py-4 rounded-[28px] border border-[#FFFFFF26]'>
                                <div className='fleex justify-center items-center'>
                                    <img className='responsive-inside-path-img h-[30px] w-[30px]' src='/Images/right.png'></img>
                                </div>
                                <div className='flex text-white flex-col ml-4 justify-between h-full'>
                                    <p className='font-semibold responsive-inside-path-head text-xl'>Snapshot</p>
                                    <p className='responsive-inside-path-para opacity-50 font-medium text-sm'>27th Dec 8.00 UTC</p>
                                </div>
                            </div>

                            <div className='h-full  justify-center items-center'>
                                <img src='/Images/nextstep.png'></img>
                            </div>

                            <div className='responsive-inside-path-padding flex bg-[#191F25] cardglow items-center pl-4 pr-6 py-4 rounded-[28px] border border-[#FFFFFF26]'>
                                <div className='fleex justify-center items-center'>
                                    <img className='responsive-inside-path-img h-[30px] w-[30px]' src='/Images/right.png'></img>
                                </div>
                                <div className='flex text-white flex-col ml-4 justify-between h-full'>
                                    <p className='font-semibold responsive-inside-path-head text-xl'>Lottery</p>
                                    <p className='responsive-inside-path-para opacity-50 font-medium text-sm'>27th Dec 8.00 UTC</p>
                                </div>
                            </div>

                            <div className='h-full  justify-center items-center'>
                                <img src='/Images/nextstep.png'></img>
                            </div>

                            <div className='responsive-inside-path-padding flex bg-[#191F25] cardglow items-center pl-4 pr-6 py-4 rounded-[28px] border border-[#FFFFFF26]'>
                                <div className='fleex justify-center items-center'>
                                    <img className='responsive-inside-path-img h-[30px] w-[30px]' src='/Images/right.png'></img>
                                </div>
                                <div className='flex text-white flex-col ml-4 justify-between h-full'>
                                    <p className='font-semibold responsive-inside-path-head text-xl'>Redemption</p>
                                    <p className='responsive-inside-path-para opacity-50 font-medium text-sm'>27th Dec 8.00 UTC</p>
                                </div>
                            </div>
                        </div>

                        <div ref={bodyRef} id='targetBody' className='mt-4 h-[80vh] w-full overflow-auto lg:bg-[#191F25] lg:px-6 py-6 rounded-[28px] scrolling-container'>
                            {details ?
                                <>
                                    <div ref={keyRef} className='flex lg:flex-row flex-col justify-center items-center lg:justify-between w-full'>
                                        <div className='flex items-center'>
                                            <div className='bg-black p-1 rounded-[17px]'>
                                                <img src='/Images/insidepp.png' className='h-[40px] w-[40px]'></img>
                                            </div>

                                            <div >
                                                <p className='font-semibold text-2xl lg:text-4xl text-white ml-4'>Lorem Ipsum</p>
                                            </div>
                                        </div>

                                        <div ref={overRef} className='flex items-center'>
                                            <div className='h-[45px] w-[45px] anilogo'>
                                                <img src='/Images/hdtelegramlogo.png' className='h-full w-full'></img>
                                            </div>
                                            <div className='h-[45px] w-[45px] anilogo'>
                                                <img src='/Images/hdtwitterlogo.png' className='h-full w-full'></img>
                                            </div>
                                            <div className='h-[45px] w-[45px] anilogo'>
                                                <img src='/Images/hddiscordlogo.png' className='h-full w-full'></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='px-4 lg:px-0'>
                                        <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>AIT Protocol is being incubated by PAAL AI which has over 2M group members and dozens of partnerships who already use personalized AI solutions.
                                        </p>
                                    </div>

                                    <div className='mt-6 px-4 lg:px-0 py-4 lg:py-0 border rounded-[36px] border-white border-opacity-20 lg:border-none w-full'>

                                        <div className='w-full border-[2px] border-white border-opacity-20 lg:hidden mb-4 rounded-[36px] bg-black flex items-center p-2'>
                                            <div onClick={() => { DetailsFunc() }} className={`bg-${details ? '[#0075FF]' : ''} text-white w-1/2 relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}>
                                                Project Details
                                            </div>
                                            <div onClick={() => { IdoFunc() }} className={`bg-${ido ? '[#0075FF]' : ''} text-white  w-1/2 relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}>
                                                IDO
                                            </div>
                                        </div>
                                        <p className='lg:text-2xl font-semibold text-base text-[#0075FF]'>Key Metrics</p>

                                        <div ref={testRef} className='flex flex-wrap mt-4 gap-4 justify-center lg:justify-start'>
                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Blockchain Network</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>Ethereum</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Initial Market Cap</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>$900,000</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Hard Cap</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>$400,000</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Project Valuation</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>$15,000,000</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Platform Raise</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>$100,000</p>
                                            </div>

                                        </div>

                                        <p className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Overview</p>
                                        <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>AIT Protocol is the first-ever decentralized machine learning protocol that empowers AI development leveraging blockchain for scalability and efficiency of AI model training.
                                            <br /><br />
                                            It rewards community members to participate in the AI training via an innovative Train-to-Earn model providing AI solutions and millions of jobs for Web users.</p>
                                        <div ref={marketRef}>
                                            <p id="your-paragraph-id" className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Key Features</p>
                                        </div>


                                        <ul className='list-disc px-6 text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>
                                            <li>The first Web3 protocol to use blockchain to deliver a trustless labor market for AI model training</li>
                                            <li>Harnessing blockchain&apos;s decentralized nature to provide a wider array of insights and build the most powerful AI models.</li>
                                            <li>Decentralized AI marketplace that offers rewarded data validation tasks for users and access to curated datasets for AI model training and   development for companies</li>
                                            <li>Tailor-made dynamic AI solutions like chat moderation and data tracking bots.</li>
                                            <li>Robust quality control algorithms to ensure AI&apos;s high accuracy levels.</li>
                                            <li>Rewards community for getting involved in data-accuracy testing via simple validation tasks.</li>
                                        </ul>


                                        <div ref={tokenRef}>
                                            <p className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Market Traction</p>
                                        </div>


                                        <ul className='list-disc px-6 text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>
                                            <li>High Profile backers and partners including LayerZero, Sharedum, OKXChain, and zkSync.</li>
                                            <li>Strong community with 16.9k followers on Twitter.</li>
                                            <li>The project&apos;s incubator, PAAL AI, has over 2M group members and dozens of integrations.</li>
                                        </ul>

                                        <div ref={revenueRef}>
                                            <p id="target-para" className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Token Utility</p>
                                        </div>

                                        <div ref={tokenMetricRef}>
                                            <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>IT Protocol is launching the $AIT token as its primary governance and community-rewarding mechanism.
                                                <br /><br />
                                                <span className='font-semibold lg:text-xl text-sm opacity-100'>Governance of the Protocol</span>
                                                <br />
                                                The token&apos;s governance utility allows holders to participate in decision-making processes related to the protocol&apos;s development. Token holders can vote and propose changes, upgrades, and other governance decisions.
                                                The active participation of token holders in governance enhances decentralization and community involvement. This engagement can attract more users and developers, contributing positively to the overall ecosystem.
                                                <br /><br />
                                                <span className='font-semibold lg:text-xl text-sm opacity-100'>Profit-Sharing (4% of Fees)</span>
                                                <br></br>
                                                The profit-sharing mechanism, where token holders receive a portion (4%) of the fees generated on the platform, directly ties the token&apos;s value to the success and growth of the business. As the project gains traction and more users utilize its services, the total fees generated increase.
                                                <br></br><br></br>

                                                Token holders benefit from a share of these: trading fees on dex for buyback, incentives for stakers and NFT holders, trading competitions.
                                            </p>
                                        </div>



                                        <p className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Revenue</p>


                                        <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>At AIT Protocol, we have carefully designed a robust business model which combines key elements of Web3 and AI, providing us with multiple avenues for monetization.
                                        </p>

                                        <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>Our community-centric revenue model not only supports the protocol&apos;s long-term reliability and transparency, but it also accrues value to the $AIT token through its utility in governance and profit-sharing for all holders. AIT Protocol&apos;s revenue streams include:
                                        </p>

                                        <p className='text-white lg:block hidden font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'><span className='font-semibold lg:text-xl text-sm opacity-100'>Discover Web3 Data Annotations</span> <br />
                                            Through our protocol, we are allowing users to access and explore annotated data within the Web3 ecosystem. By combining AI and Web3, we are providing valuable insights from decentralized data sets to researchers, developers, and companies seeking annotated data for diverse applications. With this, we are also fostering a decentralized data economy within the Web3 space.
                                        </p>

                                        <p className='lg:hidden block text-white  lg:opacity-100  mt-4 lg:mt-6 font-semibold lg:text-xl text-sm opacity-100' >Discover Web3 Data Annotations</p>

                                        <p className='text-white lg:hidden block font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>Through our protocol, we are allowing users to access and explore annotated data within the Web3 ecosystem. By combining AI and Web3, we are providing valuable insights from decentralized data sets to researchers, developers, and companies seeking annotated data for diverse applications. With this, we are also fostering a decentralized data economy within the Web3 space.</p>

                                        <p className='text-white lg:block hidden font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'><span className='font-semibold lg:text-xl text-sm opacity-100'>Dataset as a Service (DaaS)</span> <br />
                                            We offer companies comprehensive solutions to access curated datasets for AI model training and development. At AIT Protocol, we simplify the process of acquiring datasets for companies by making quality & decentralized AI data annotations accessible to everyone.
                                        </p>

                                        <p className='text-white lg:hidden block  lg:opacity-100 mt-4 lg:mt-6 font-semibold lg:text-xl text-sm opacity-100'>Dataset as a Service (DaaS)</p>
                                        <p className='text-white lg:hidden block font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'> We offer companies comprehensive solutions to access curated datasets for AI model training and development. At AIT Protocol, we simplify the process of acquiring datasets for companies by making quality & decentralized AI data annotations accessible to everyone.</p>

                                        <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'><span className='font-semibold lg:text-xl text-sm opacity-100'>Custom AI solutions</span> <br />
                                            We serve the unique needs of our clients by delivering tailor-made AI solutions. Whether it is developing specialized machine learning models, custom-made algorithms, or AI consulting. We support our clients&apos; workflows by leveraging AI and Web3, while they support our community-centric revenue model.
                                        </p>

                                        <p className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Token Metrics</p>



                                        {/* desktop Token Metrics */}

                                        <div className='mt-6 lg:block hidden'>


                                            <div class="relative overflow-x-auto rounded-[25px]" >
                                                <table class="w-full text-sm  rounded-[25px] text-left rtl:text-right ">
                                                    <thead class="text-xs font-semibold text-[#FFFFFF] rounded-[25px] bg-[#0D1014] ">
                                                        <tr className='rounded-[25px]'>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                Allocation
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                Allocation %
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                Amount
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                Price
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                Raise
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                TGE %
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 opacity-50">
                                                                Vesting
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className=''>
                                                        <tr class="bg-[#14191E] border-b border-[#FFFFFF1A] text-white">
                                                            <th scope="row" class="px-6 py-6 font-medium whitespace-nowrap text-white">
                                                                Angel Sale
                                                            </th>
                                                            <td class="px-6 py-6">
                                                                5.605 %
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                56.05 M
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $0.01
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $560.5k
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20%
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-[#14191E] border-b border-[#FFFFFF1A] text-white">
                                                            <th scope="row" class="px-6 py-6 font-medium whitespace-nowrap text-white">
                                                                Angel Sale
                                                            </th>
                                                            <td class="px-6 py-6">
                                                                5.605 %
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                56.05 M
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $0.01
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $560.5k
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20%
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-[#14191E] border-b border-[#FFFFFF1A] text-white">
                                                            <th scope="row" class="px-6 py-6 font-medium whitespace-nowrap text-white">
                                                                Angel Sale
                                                            </th>
                                                            <td class="px-6 py-6">
                                                                5.605 %
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                56.05 M
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $0.01
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $560.5k
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20%
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-[#14191E] border-b border-[#FFFFFF1A] text-white">
                                                            <th scope="row" class="px-6 py-6 font-medium whitespace-nowrap text-white">
                                                                Angel Sale
                                                            </th>
                                                            <td class="px-6 py-6">
                                                                5.605 %
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                56.05 M
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $0.01
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $560.5k
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20%
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-[#14191E] border-b border-[#FFFFFF1A] text-white">
                                                            <th scope="row" class="px-6 py-6 font-medium whitespace-nowrap text-white">
                                                                Angel Sale
                                                            </th>
                                                            <td class="px-6 py-6">
                                                                5.605 %
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                56.05 M
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $0.01
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                $560.5k
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20%
                                                            </td>
                                                            <td class="px-6 py-6">
                                                                20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months
                                                            </td>
                                                        </tr>

                                                        <tr className='rounded-[25px] bg-[#0D1014] mt-6 text-white'>
                                                            <th scope="col" class="px-6 py-6 ">
                                                                Total
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 text-[#83BCFE]">
                                                                100%
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 text-[#83BCFE]">
                                                                18
                                                            </th>
                                                            <th scope="col" class="px-6 py-6 text-[#83BCFE]">
                                                                $1.28 M
                                                            </th>
                                                            <th />


                                                            <th />


                                                            <th />



                                                        </tr>
                                                    </tbody>
                                                </table>

                                                {/* <div className='w-full rounded-[22px] bg-[#0D1014] flex items-center px-6 py-6 mt-4'>

                                        </div> */}
                                            </div>


                                        </div>

                                        <div className='lg:hidden block px-5 py-5 mt-3 bg-[#24282D] border border-white border-opacity-15 rounded-[20px]'>
                                            <div className='flex justify-between items-center'>
                                                <p className='font-semibold text-sm text-white'>Angel Sale</p>

                                                <div className='flex items-center'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Allocation %</p>
                                                    <p className='font-semibold text-sm text-white ml-4' >5.605 %</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-full mt-3'>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Amount</p>
                                                    <p className='font-semibold text-sm text-white'>56.05 M</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Raise</p>
                                                    <p className='font-semibold text-sm text-white'>$560.5k</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>TGE %</p>
                                                    <p className='font-semibold text-sm text-white'>20%</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Price</p>
                                                    <p className='font-semibold text-sm text-white'>$0.01</p>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <p className='font-semibold text-xs opacity-50 text-white'>Vesting</p>

                                                <p className='font-semibold text-sm text-white mt-2'>20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months</p>
                                            </div>

                                        </div>

                                        <div className='lg:hidden block px-5 py-5 mt-3 bg-[#24282D] border border-white border-opacity-15 rounded-[20px]'>
                                            <div className='flex justify-between items-center'>
                                                <p className='font-semibold text-sm text-white'>Angel Sale</p>

                                                <div className='flex items-center'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Allocation %</p>
                                                    <p className='font-semibold text-sm text-white ml-4' >5.605 %</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-full mt-3'>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Amount</p>
                                                    <p className='font-semibold text-sm text-white'>56.05 M</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Raise</p>
                                                    <p className='font-semibold text-sm text-white'>$560.5k</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>TGE %</p>
                                                    <p className='font-semibold text-sm text-white'>20%</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Price</p>
                                                    <p className='font-semibold text-sm text-white'>$0.01</p>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <p className='font-semibold text-xs opacity-50 text-white'>Vesting</p>

                                                <p className='font-semibold text-sm text-white mt-2'>20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months</p>
                                            </div>

                                        </div>

                                        <div className='lg:hidden block px-5 py-5 mt-3 bg-[#24282D] border border-white border-opacity-15 rounded-[20px]'>
                                            <div className='flex justify-between items-center'>
                                                <p className='font-semibold text-sm text-white'>Angel Sale</p>

                                                <div className='flex items-center'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Allocation %</p>
                                                    <p className='font-semibold text-sm text-white ml-4' >5.605 %</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-full mt-3'>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Amount</p>
                                                    <p className='font-semibold text-sm text-white'>56.05 M</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Raise</p>
                                                    <p className='font-semibold text-sm text-white'>$560.5k</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>TGE %</p>
                                                    <p className='font-semibold text-sm text-white'>20%</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Price</p>
                                                    <p className='font-semibold text-sm text-white'>$0.01</p>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <p className='font-semibold text-xs opacity-50 text-white'>Vesting</p>

                                                <p className='font-semibold text-sm text-white mt-2'>20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months</p>
                                            </div>

                                        </div>

                                        <div className='lg:hidden block px-5 py-5 mt-3 bg-[#24282D] border border-white border-opacity-15 rounded-[20px]'>
                                            <div className='flex justify-between items-center'>
                                                <p className='font-semibold text-sm text-white'>Angel Sale</p>

                                                <div className='flex items-center'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Allocation %</p>
                                                    <p className='font-semibold text-sm text-white ml-4' >5.605 %</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-full mt-3'>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Amount</p>
                                                    <p className='font-semibold text-sm text-white'>56.05 M</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Raise</p>
                                                    <p className='font-semibold text-sm text-white'>$560.5k</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>TGE %</p>
                                                    <p className='font-semibold text-sm text-white'>20%</p>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='font-semibold text-xs opacity-50 text-white'>Price</p>
                                                    <p className='font-semibold text-sm text-white'>$0.01</p>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <p className='font-semibold text-xs opacity-50 text-white'>Vesting</p>

                                                <p className='font-semibold text-sm text-white mt-2'>20% at TGE, 2-month cliff, followed by daily linear vesting over next 10 months</p>
                                            </div>

                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div ref={keyRef} className='flex lg:flex-row flex-col justify-center items-center lg:justify-between w-full'>
                                        <div className='flex items-center'>
                                            <div className='bg-black p-1 rounded-[17px]'>
                                                <img src='/Images/insidepp.png' className='h-[40px] w-[40px]'></img>
                                            </div>

                                            <div >
                                                <p className='font-semibold text-2xl lg:text-4xl text-white ml-4'>Lorem Ipsum</p>
                                            </div>
                                        </div>

                                        <div ref={overRef} className='flex items-center relative z-30'>
                                            <div className='h-[45px] w-[45px] anilogo'>
                                                <img src='/Images/hdtelegramlogo.png' className='h-full w-full'></img>
                                            </div>
                                            <div className='h-[45px] w-[45px] anilogo'>
                                                <img src='/Images/hdtwitterlogo.png' className='h-full w-full'></img>
                                            </div>
                                            <div className='h-[45px] w-[45px] anilogo'>
                                                <img src='/Images/hddiscordlogo.png' className='h-full w-full'></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div ref={timelineRef} className='px-4 lg:px-0'>
                                        <p className='text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>AIT Protocol is being incubated by PAAL AI which has over 2M group members and dozens of partnerships who already use personalized AI solutions.
                                        </p>
                                    </div>


                                    <div ref={termsRef} className='mt-6 px-4 lg:px-0 py-4 lg:py-0 border rounded-[36px] border-white border-opacity-20 lg:border-none w-full'>

                                        <div className='w-full border-[2px] border-white border-opacity-20 lg:hidden mb-4 rounded-[36px] bg-black flex items-center p-2'>
                                            <div onClick={() => { DetailsFunc() }} className={`bg-${details ? '[#0075FF]' : ''} text-white w-1/2 relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}>
                                                Project Details
                                            </div>
                                            <div onClick={() => { IdoFunc() }} className={`bg-${ido ? '[#0075FF]' : ''} text-white  w-1/2 relative z-30 cursor-pointer py-3 font-semibold responsive-inside-switch-text text-base rounded-[36px] flex items-center justify-center`}>
                                                IDO
                                            </div>
                                        </div>

                                        <p className='lg:text-2xl font-semibold text-base text-[#0075FF]'>IDO Details</p>

                                        <div ref={testRef} className='flex flex-wrap mt-4 gap-4 justify-center lg:justify-start'>
                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Launch Price</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>0.025 USDC</p>
                                            </div>

                                            <div className='flex flex-col cardglow bg-[#24282D] justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Total Winning Tickets</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>6000 Tickets</p>
                                            </div>

                                            <div className='flex flex-col cardglow bg-[#24282D] justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Total Amount</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>600,000 USDC</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Redemption Amount</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>100 USDC per Ticket</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Total Issued</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>24,000,000 BEFI</p>
                                            </div>

                                            <div className='flex flex-col bg-[#24282D] cardglow justify-center items-center text-center lg:rounded-[23px] rounded-[20px] px-6 py-4  border border-white border-opacity-15'>
                                                <p className='font-normal text-xs lg:text-sm text-white opacity-50' >Total Participants</p>
                                                <p className='font-medium text-white text-sm lg:text-xl'>82,944</p>
                                            </div>

                                        </div>

                                        <p id="your-paragraph-id" className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>IDO Timeline</p>

                                        <div className='mt-4 ml-2 lg:mt-6'>

                                            <div className='flex items-center'>
                                                <div className='flex justify-center items-center rounded-[50%] bg-[#0075FF] h-[10px] w-[10px]'>

                                                </div>
                                                <div className='flex ml-4 items-center justify-center'>
                                                    <p className='text-base lg:text-xl font-medium text-white'>Subscription Period</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center h-full'>
                                                <div className='bg-[#0075FF] ml-1 w-[3px] h-[100px] flex justify-center items-center'>

                                                </div>

                                                <div className=' ml-5 '>
                                                    <p className='font-medium mt-1  lg:font-normal text-xs lg:text-sm text-white lg:opacity-60 opacity-50'>14th Dec 10:00 - 18th Dec 10:00 UTC</p>
                                                    <p className='font-medium mt-3 text-xs lg:font-medium lg:text-base text-white opacity-50 lg:opacity-90'>Participants must have at least $50 worth of tokens (Ethereum chain) in their connected wallet. The more you engage on socials, the greater the chances of winning. Create an account to make the checkout process during the lottery phase smoother.</p>
                                                </div>

                                            </div>


                                            <div className='flex items-center mt-4'>
                                                <div className='flex justify-center items-center rounded-[50%] bg-[#0075FF] h-[10px] w-[10px]'>

                                                </div>
                                                <div className='flex ml-4 items-center justify-center'>
                                                    <p className='text-base lg:text-xl font-medium text-white'>Snapshot Period</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center h-full'>
                                                <div className='bg-[#0075FF] ml-1 w-[3px] h-[120px] flex justify-center items-center'>

                                                </div>

                                                <div className=' ml-5 '>
                                                    <p className='font-medium mt-1  lg:font-normal text-xs lg:text-sm text-white lg:opacity-60 opacity-50'>14th Dec 10:00 - 18th Dec 10:00 UTC</p>
                                                    <p className='font-medium mt-3 text-xs lg:font-medium lg:text-base text-white opacity-50 lg:opacity-90'>

                                                    </p>
                                                    <ul className='list-disc px-6 text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>
                                                        <li>Hold min. $50 tokens (Ethereum chain)</li>
                                                        <li>The snapshot will take place at 10:00am UTC on 18th of Dec</li>
                                                        <li>Failure to maintain this balance during the Snapshot Period will result in ineligibility.</li>
                                                    </ul>
                                                </div>

                                            </div>


                                            <div className='flex items-center mt-4'>
                                                <div className='flex justify-center items-center rounded-[50%] bg-[#0075FF] h-[10px] w-[10px]'>

                                                </div>
                                                <div className='flex ml-4 items-center justify-center'>
                                                    <p className='text-base lg:text-xl font-medium text-white'>Lottery Period</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center h-full'>
                                                <div className='bg-[#0075FF] ml-1 w-[3px] h-[100px] flex justify-center items-center'>

                                                </div>

                                                <div className=' ml-5 '>
                                                    <p className='font-medium mt-1  lg:font-normal text-xs lg:text-sm text-white lg:opacity-60 opacity-50'>14th Dec 10:00 - 18th Dec 10:00 UTC</p>
                                                    <p className='font-medium mt-3 text-xs lg:font-medium lg:text-base text-white opacity-50 lg:opacity-90'>Ape Launchpad uses a smart contract to randomly select tickets, making it fair for all applicants to win token allocations. At this time, you&apos;ll be able to check your participation to see if you&apos;re a winner. You can only use USDC to invest. Remember to engage on Twitter/X to increase your chances.</p>
                                                </div>

                                            </div>

                                            <div className='flex items-center mt-4'>
                                                <div className='flex justify-center items-center rounded-[50%] bg-[#0075FF] h-[10px] w-[10px]'>

                                                </div>
                                                <div className='flex ml-4 items-center justify-center'>
                                                    <p className='text-base lg:text-xl font-medium text-white'>Redemption Period</p>
                                                </div>
                                            </div>
                                            <div className='flex items-center h-full'>


                                                <div className=' ml-5 '>
                                                    <p className='font-medium mt-1  lg:font-normal text-xs lg:text-sm text-white lg:opacity-60 opacity-50'>14th Dec 10:00 - 18th Dec 10:00 UTC</p>
                                                    <p className='font-medium mt-3 text-xs lg:font-medium lg:text-base text-white opacity-50 lg:opacity-90'>Participants selected in the token allocation lottery can check their allocation and redeem tokens before the Redemption Deadline.</p>
                                                </div>

                                            </div>


                                        </div>


                                        <p id="your-paragraph-id" className='lg:text-2xl mt-6 font-semibold text-base text-[#0075FF]'>Terms & Conditions</p>

                                        <ul className='list-disc px-6 text-white font-normal lg:text-base opacity-60 lg:opacity-100 text-sm mt-4 lg:mt-6'>
                                            <li>Participants must have at least $50 worth of tokens (Ethereum chain) in their connected wallet. The more you engage on socials, the greater the chances of winning. Create an account to make the checkout process during the lottery phase smoother.</li>
                                            <li>To redeem allocated IDO tokens, participants will need to pay blockchain gas fees in some cases, which may vary due to network conditions.</li>
                                            <li>If you have any questions, please submit a ticket on Telegram.</li>
                                            <li>In order to be eligible to receive IDO tokens, please check & fulfil all snapshot requirements established by each IDO project.</li>
                                            <li>Disclaimer: The information and project data provided above are sourced from the project or public information and are for reference only.</li>
                                        </ul>
                                    </div>
                                </>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainInside;
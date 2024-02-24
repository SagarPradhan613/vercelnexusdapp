const ThirdSection = () => {
    return (
        <>
            <div className="mt-14 lg:block hidden  w-full lg:gap-7 px-4 responsive-body-padding lg:px-20 ">
                <div className="border relative h-[630px]  z-20 bg-[url(/Images/thirdmask.png)] rounded-[50px] flex justify-center items-center bg-cover bg-no-repeat bg-black  border-black">
                    <div>
                        <img src="/Images/thirdtext.png"></img>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden w-full mt-4 px-4 justify-center items-center ">
                <img src="/Images/hdthirdbgmob.png" className="w-full"></img>
            </div>
        </>
    )
}

export default ThirdSection;
import { BLUE } from "@/app/constants"
import { Sen } from "@/app/fonts"

export const Upcoming = () => {
    return (
        <section className="py-16 w-full relative">
            <h1 style={{
                color: BLUE
            }} className={`text-center ${Sen.className} my-8 font-bold text-7xl`}>
                Live
                <span className="text-black mx-4">
                    and
                </span>
                Upcoming
            </h1>


            <div className="flex items-center justify-center w-full">
                <div className="max-w-[1280.49px] h-full w-[1000px] z-10 rounded-[36px] p-2 flex">
                    
                </div>
            </div>

        </section>
    )
}
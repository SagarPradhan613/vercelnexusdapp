import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import Maininside from  './insideComponents/MainInside'
import MainInside from "./insideComponents/MainInside";

const Inside = () =>{
    return(
        <> 
            <div className="bg-[#000000] pb-16 w-full">
                <Navbar></Navbar>
                 <MainInside></MainInside>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Inside;
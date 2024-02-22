import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import MainNotification from './NotificationComp/MainNotification'

const Notification = () => {
    return (
        <>
            <div className="bg-[#000000] pb-16 w-full">
                <Navbar></Navbar>
                <MainNotification></MainNotification>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Notification;
import NexusHeroSection from './NexusComp/NexusHeroSection'
import NexusFaq from './NexusComp/NexusFaq'
import Sales from './NexusComp/Sales'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
const Nexus = () => {
    return (
        <>
            <div className='pb-16'>
                <Navbar></Navbar>
                <NexusHeroSection></NexusHeroSection>
                <NexusFaq></NexusFaq>
                <Sales></Sales>
                <Footer></Footer>
            </div>

        </>
    )
}

export default Nexus;
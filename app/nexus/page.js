import NexusHeroSection from './NexusComp/NexusHeroSection'
import NexusFaq from './NexusComp/NexusFaq'
import Sales from './NexusComp/Sales'
import { Navbar } from '../components/Navbar'
const Nexus = () => {
    return (
        <>
        <Navbar></Navbar>
            <NexusHeroSection></NexusHeroSection>
            <NexusFaq></NexusFaq>
            <Sales></Sales>
        </>
    )
}

export default Nexus;
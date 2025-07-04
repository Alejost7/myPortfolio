import {motion} from "framer-motion"; 
import Proyectos from '../components/Proyectos.jsx'
import SobreMi from '../components/SobreMi.jsx'
import Contacto from '../components/Contacto.jsx'
import Hero from "../components/Hero.jsx";


const Home = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#302b63] to-[#0f0c29] text-white px-6 py-12 pt-[6rem] ">
            <Hero />
            <SobreMi />
            <Proyectos />
            <Contacto />
        </main>
    );
};

export default Home;

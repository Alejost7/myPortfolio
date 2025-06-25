import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section 
            id="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} 
            className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mt-12">
            <img
            src="/foton.jpg"
            alt="Diego"
            className="rounded-lg w-auto h-72 object-cover border-4 border-gray-400 hover:scale-105 transition-transform mb-8 lg:mb-0 lg:w-1/3 lg:h-auto shadow-lg"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center lg:text-left"
            >
            <h1 className="text-7xl font-semibold mb-4">Hola, soy Diego</h1>
            <p className="text-3xl font-thin mb-6">
                Desarrollo soluciones tecnológicas innovadoras.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
                <a
                href="#proyectos"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 rounded-xl font-medium shadow hover:scale-105 transition"
                >
                Ver Proyectos
                </a>
                <a
                href="#contacto"
                className="border border-violet-500 px-5 py-2 rounded-xl hover:bg-violet-800 transition"
                >
                Contáctame
                </a>
            </div>
            </motion.div>
            <div className="absolute top-20 left-10 w-6 h-6 bg-green-400 rounded-full animate-bounce opacity-10 blur-md z-0"></div>
        </motion.section>
    );
}

export default Hero;
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section 
            id="hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} 
            className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
            <img
            src="/diego-profile.jpg"
            alt="Diego"
            className="rounded-lg w-auto h-72 object-cover border-4 border-violet-500"
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
        </motion.section>
    );
}

export default Hero;
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contacto = () => {
    return (
    <section id="contacto" className="rounded-lg py-20 px-6 bg-[#0f0c29] bg-opacity-50 text-white max-w-4xl mx-auto  mt-12">
        <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16}}
        >
        Contáctame
        </motion.h2>
        
        <motion.div
        className="flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        >
        <p className="text-lg md:text-xl max-w-xl">
            ¿Tienes un proyecto en mente, una propuesta o solo quieres saludar? Estoy disponible para oportunidades de colaboración o freelance. ¡Hablemos!
        </p>

        <div className="flex flex-col gap-4 ">
            <div className="flex items-center justify-center gap-2">
            <Mail className="text-violet-400" size={20} />
            <a
                href="mailto:diego.tucorreo@example.com"
                className="hover:underline"
            >
                diego.tucorreo@example.com
            </a>
            </div>

            <div className="flex items-center justify-center gap-2">
            <Linkedin className="text-blue-400" size={20} />
            <a
                href="https://www.linkedin.com/in/diegotuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                linkedin.com/in/diegotuusuario
            </a>
            </div>

            <div className="flex items-center justify-center gap-2">
            <Github className="text-white" size={20} />
            <a
                href="https://github.com/Alejost7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                github.com/Alejost7
            </a>
            </div>

            <div className="flex items-center justify-center gap-2">
            <Instagram className="text-pink-400" size={20} />
            <a
                href="https://instagram.com/diegotuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                instagram.com/diegotuusuario
            </a>
            </div>
        </div>

        <div className="mt-8 text-sm text-white/60">
            © {new Date().getFullYear()} Diego. Todos los derechos reservados.
        </div>
        </motion.div>
    </section>
    );
};

export default Contacto;

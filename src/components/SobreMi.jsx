import { motion } from "framer-motion";

export default function SobreMi() {
    return (
        <section
        id="sobre-mi"
        className="rounded-lg flex flex-col items-center bg-[#0f0f1f] bg-opacity-30 text-white py-6 px-6 max-w-6xl mx-auto mt-12"
        >
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
            Sobre mí
        </motion.h2>

        <motion.div
            className="flex flex-col md:flex-row items-center max-w-4xl gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            
            {/* Texto y skills */}
            <div className="space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl leading-relaxed">
                ¡Hola! Soy <span className="font-semibold">Diego</span>, estudiante de Ingeniería de Sistemas y Computación en la Pontificia Universidad Javeriana Cali. Me apasiona la tecnología, la programación y la innovación. 
                Actualmente me especializo en construir experiencias digitales y soluciones útiles que aporten valor real.
            </p>

            <div>
                <h3 className="text-2xl font-semibold mb-8">Habilidades</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["JavaScript", "React", "Node.js", "Python", "Git", "SQL"].map((skill) => (
                    <li
                    key={skill}
                    className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-block hover:bg-white/20 transition cursor-pointer text-center"
                    >
                    {skill}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </motion.div>
        </section>
);
}

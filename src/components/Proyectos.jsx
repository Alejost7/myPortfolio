import { motion } from 'framer-motion';

const Proyectos = () => {
    return (
        <section id="proyectos" className="mt-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Proyectos destacados</h2>
        <div className="grid md:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            >
            <img
            src="/vscode.png"
            alt="Visual Studio Code"
            className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Código en VS Code</h3>
            <span className="bg-blue-600 px-2 py-1 rounded text-sm">React</span>
        </motion.div>

        {/* CARD 2 */}
        <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}                
            >
            <img
            src="/guerra.jpeg"
            alt="Guerra Mundial Z"
            className="rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
            Prueba de rendimiento: Guerra Mundial Z
            </h3>
            <div className="flex gap-2">
            <span className="bg-yellow-500 px-2 py-1 rounded text-sm">Python</span>
            <span className="bg-blue-700 px-2 py-1 rounded text-sm">C++</span>
            </div>
        </motion.div>

        {/* CARD 3 - Referencias */}
        <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}                
            >
            <h3 className="text-xl font-semibold mb-4">Referencias</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
            <li>Investigaciones sobre hardware y CPU</li>
            <li>Estudios en ingeniería</li>
            <li>Motivación para generar ingresos y mejorar calidad de vida</li>
            </ul>
        </motion.div>
        </div>

        {/* CARD 4 - GTA */}
        <motion.div 
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}                
            >
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow hover:shadow-xl transition">
            <img
            src="/gta.jpg"
            alt="GTA V"
            className="rounded mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold">Prueba de rendimiento: GTA V</h3>
            <span className="bg-blue-700 px-2 py-1 rounded text-sm">C++</span>
        </div>
        </motion.div>
    </section>
    );
};

export default Proyectos;

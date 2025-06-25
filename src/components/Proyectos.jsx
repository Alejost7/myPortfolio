import { motion } from 'framer-motion';
import Modal from './Modal';
import { useState } from 'react';
import { projects } from '../data/projects';

// src/data/projects.js


const Proyectos = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="proyectos" className="mt-24 max-w-6xl mx-auto scroll-mt-24">
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-8"
        >
            Proyectos destacados
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-16">
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className=" rounded-lg bg-white/5 backdrop-blur-sm roundend-xl p-4 shadow hover:shadow-xl cursor-pointer "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onClick={() => setSelected(project)}
                >
                    {project.img.endsWith(".mp4") ? (
                    <video className="rounded mb-4 w-full" autoPlay loop muted>
                        <source src={project.img} type="video/mp4" />
                        Tu navegador no soporta este video.
                    </video>
                    ) : (
                    <img src={project.img} alt={project.title} className="rounded mb-4 w-full" />
                    )}
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key= {tech} className ="bg-blue-600  px-2 py-1 rounded-lg text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
                ))}
        </div>

        {/* Modal */}
        <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
                {selected && (
                    <div className="space-y-4">
                        {selected.img.endsWith(".mp4") ? (
                        <video className="rounded-lg w-full" autoPlay loop muted playsInline>
                            <source src={selected.img} type="video/mp4" />
                            Tu navegador no soporta este video.
                        </video>
                        ) : (
                        <img src={selected.img} alt={selected.title} className="rounded-lg w-full" />
                        )}
                        <h3 className="text-2xl font-bold">{selected.title}</h3>
                        <p className="text-gray-300">{selected.description}</p> 
                        {selected.link && (
                            <>
                                {console.log(selected.link)}
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 text-violet-400 hover:underline"
                                >
                                    Ver repositorio
                                </a>
                            </>
                        )}
                    </div>
                )}
        </Modal>            
    </section>
    );
};

export default Proyectos;

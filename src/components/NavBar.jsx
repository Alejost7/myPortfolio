import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md shadow-md fixed top-0 z-50 pb-4">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">            
            {/* Desktop nav */}
            <div className="hidden md:flex gap-9 text-sm">
            {links.map((link) => (
                <a
                key={link.name}
                href={link.href}
                className="hover:text-violet-400 hover:scale-150 transition"
                >
                {link.name}
                </a>
            ))}
            </div>

            {/* Mobile toggle button */}
            <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden px-4 bg-black/50"
            >
                <ul className="flex flex-col py-4 gap-4 text-white text-sm">
                {links.map((link) => (
                    <li key={link.name}>
                    <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block hover:text-violet-400 transition"
                    >
                        {link.name}
                    </a>
                    </li>
                ))}
                </ul>
            </motion.div>
            )}
        </AnimatePresence>
        </nav>
    );
}

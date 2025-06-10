import { motion, AnimatePresence }   from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {

    return (
        <AnimatePresence>
        {isOpen && (
            <>
            {/* Backdrop */}
            <motion.div
                className="fixed inset-0 bg-black/60 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Modal Content */}
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <div className="bg-[#0f0f1f] rounded-2xl shadow-lg max-w-lg w-full p-6 relative text-white">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                    <X size={24} />
                </button>

                {/* Aquí va el contenido dinámico */}
                {children}
                </div>
            </motion.div>
            </>
        )}
        </AnimatePresence>
    );

}
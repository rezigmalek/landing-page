import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Questions = () => {
    const [open, setOpen] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, x: -120 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.45 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    }

    const modalVariants = {
        hidden: { opacity: 0, x: 120, scale: 0.98 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, type: 'spring', stiffness: 90, damping: 16 } },
        exit: { opacity: 0, x: 80, transition: { duration: 0.35 } },
    }

    return (
        <motion.div className="my-5 text-center" variants={containerVariants} initial="hidden" animate="visible">
            <AnimatePresence>
                {open && (
                    <motion.div className="overlay" onClick={() => setOpen(false)} variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
                        <motion.div
                            className="custom-modal"
                            onClick={(e) => e.stopPropagation()}
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <iframe
                                src="https://www.youtube.com/embed/X7IAfiGgBRA?rel=0&autoplay=1"
                                title="YouTube video"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Questions;

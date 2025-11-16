import React from 'react'
import img from '../images/img-1.jpg'
import start from '../images/start.png'
import { VscDebugStart } from "react-icons/vsc";
import { useState } from 'react';
import { motion } from 'framer-motion'

const Answers = () => {
    const [open, setOpen] = useState(false);

    const leftColumnVariants = {
        hidden: { opacity: 0, x: -120, scale: 0.92 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 2.2, ease: 'easeOut', type: 'spring', stiffness: 60, damping: 18 } },
    }

    const rightColumnVariants = {
        hidden: { opacity: 0, x: 120, scale: 0.92 },
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 2.2, ease: 'easeOut', type: 'spring', stiffness: 60, damping: 18 } },
    }

    return (
        <div className="row py-5 my-5">
            <motion.div className="col-12 col-md-6" variants={leftColumnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <div className="card position-relative" style={{ maxWidth: "39rem" }}>
                    {/* Image principale */}
                    <img src={img} className="card-img-top" alt="Main" />

                    {/* Bouton centré */}
                    <button
                        className="btn rounded-circle position-absolute top-50 start-50 translate-middle shadow-lg d-flex align-items-center justify-content-center"
                        style={{
                            width: "70px",
                            height: "70px",
                            backgroundColor: "rgb(121, 61, 244)", // Violet
                            border: "none",
                            color: "white",
                            fontSize: "1.2rem",
                        }}
                        onClick={() => setOpen(true)}
                    >
                        <VscDebugStart />
                    </button>
                    {open && (
                        <div className="overlay" onClick={() => setOpen(false)}>
                            <div
                                className="custom-modal"
                                onClick={(e) => e.stopPropagation()} // évite la fermeture si clic sur la vidéo
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/X7IAfiGgBRA?rel=0&autoplay=1"
                                    title="YouTube video"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>


            <motion.div className="col-12 col-md-6 mt-2 d-flex flex-column justify-content-center" variants={rightColumnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <h1 className="fw-bold text-center mt-2">Questions & Answers</h1>
                <h6 className="custom-text py-3">
                    Discover a world of knowledge and opportunities with our online
                    education platform pursue a new career.
                </h6>

                <div className="accordion" id="accordionExample">
                    {/* Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the first item’s accordion body.</strong> It is
                                shown by default...
                            </div>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the second item’s accordion body.</strong> It is
                                hidden by default...
                            </div>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the third item’s accordion body.</strong> It is
                                hidden by default...
                            </div>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Accordion Item #4
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the fourth item’s accordion body.</strong> It is
                                hidden by default...
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Answers

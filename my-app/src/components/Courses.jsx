import React from 'react'
import img1 from '../images/img-1.jpg'
import MagicButton from './MagicButton'
import { PiDeviceMobile } from "react-icons/pi";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from 'framer-motion'

const Courses = () => {
    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    const leftCardVariants = {
        hidden: { opacity: 0, x: -120, scale: 0.92 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.6, ease: 'easeOut', type: 'spring', stiffness: 60, damping: 18 },
        },
    }

    const rightCardVariants = {
        hidden: { opacity: 0, x: 120, scale: 0.92 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1.6, ease: 'easeOut', type: 'spring', stiffness: 60, damping: 18 },
        },
    }

    const middleCardVariants = {
        hidden: { opacity: 0, y: 140, scale: 0.92 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1.6, ease: 'easeOut', type: 'spring', stiffness: 60, damping: 18 },
        },
    }
    
    const seeMoreParentVariants = {
        initial: {},
        hover: {},
    }

    const seeMoreArrowVariants = {
        initial: { x: 0, rotate: 0 },
        hover: { x: 12, rotate: 15, transition: { duration: 0.35, type: 'spring', stiffness: 400, damping: 12 } },
    }
    return (
        <div className='my-5 pb-5'>
            <div className='row py-5'>
                <div className='text-center mt-5'>
                    <motion.h1 variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>Explore Our Best Courses</motion.h1>
                    <motion.h6 className='mt-4 custom-text' variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>Discover a world of knowledge and opportunities with our online education.</motion.h6>
                    <motion.h6 className='custom-text' variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>platform pursue a new career.</motion.h6>
                </div>
            </div>
            <div className='row d-flex justify-content-center gap-5'>
                <motion.div 
                    className="card border-0 shadow-lg" 
                    style={{ width: "18rem" }}
                    variants={leftCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Conteneur image + badge */}
                    <div className="position-relative">
                        <img src={img1} className="card-img-top pt-2 rounded-4" />

                        {/* Badge prix en bas de l'image */}
                        <span
                            className="badge position-absolute bottom-0 end-0 me-2 mb-2 px-3 py-2 rounded-2"
                            style={{ backgroundColor: "rgb(121, 61, 244)", fontSize: "0.9rem" }}
                        >
                            18000.00DZD
                        </span>
                    </div>

                    <div className="card-body">
                        <div className="row pb-2">
                            <div className="col d-flex align-items-center gap-2">
                                <PiDeviceMobile />
                                <h6 className="custom-text pt-1">6 Lessons</h6>
                            </div>
                        </div>

                        <h5 className="card-title pb-5">UI/UX for beginners</h5>

                        <div className="d-flex justify-content-end">
                            <button className="course-btn">
                                <div className="d-flex align-items-center gap-2">
                                    Course
                                    <BsArrowRightCircleFill size={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="card border-0 shadow-lg" 
                    style={{ width: "18rem" }}
                    variants={middleCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Conteneur image + badge */}
                    <div className="position-relative">
                        <img src={img1} className="card-img-top pt-2 rounded-4" />

                        {/* Badge prix en bas de l'image */}
                        <span
                            className="badge position-absolute bottom-0 end-0 me-2 mb-2 px-3 py-2 rounded-2"
                            style={{ backgroundColor: "rgb(121, 61, 244)", fontSize: "0.9rem" }}
                        >
                            18000.00DZD
                        </span>
                    </div>

                    <div className="card-body">
                        <div className="row pb-2">
                            <div className="col d-flex align-items-center gap-2">
                                <PiDeviceMobile />
                                <h6 className="custom-text pt-1">6 Lessons</h6>
                            </div>
                        </div>

                        <h5 className="card-title pb-5">UI/UX for beginners</h5>

                        <div className="d-flex justify-content-end">
                            <button className="course-btn">
                                <div className="d-flex align-items-center gap-2">
                                    Course
                                    <BsArrowRightCircleFill size={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="card border-0 shadow-lg" 
                    style={{ width: "18rem" }}
                    variants={rightCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Conteneur image + badge */}
                    <div className="position-relative">
                        <img src={img1} className="card-img-top pt-2 rounded-4" />

                        {/* Badge prix en bas de l'image */}
                        <span
                            className="badge position-absolute bottom-0 end-0 me-2 mb-2 px-3 py-2 rounded-2"
                            style={{ backgroundColor: "rgb(121, 61, 244)", fontSize: "0.9rem" }}
                        >
                            18000.00DZD
                        </span>
                    </div>

                    <div className="card-body">
                        <div className="row pb-2">
                            <div className="col d-flex align-items-center gap-2">
                                <PiDeviceMobile />
                                <h6 className="custom-text pt-1">6 Lessons</h6>
                            </div>
                        </div>

                        <h5 className="card-title pb-5">UI/UX for beginners</h5>

                        <div className="d-flex justify-content-end">
                            <button className="course-btn">
                                <div className="d-flex align-items-center gap-2">
                                    Course
                                    <BsArrowRightCircleFill size={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='row mt-5 d-flex text-center justify-content-center'>
                <motion.h6
                    className='custom-text'
                    variants={seeMoreParentVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ cursor: 'pointer' }}
                >
                    See more courses&nbsp;
                    <motion.span variants={seeMoreArrowVariants} style={{ display: 'inline-block' }}>
                        <BsArrowRightCircleFill size={15} />
                    </motion.span>
                </motion.h6>
            </div>
        </div>
    )
}

export default Courses

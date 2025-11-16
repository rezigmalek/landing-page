import React from 'react'
import img1 from '../images/img-1.jpg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import { motion } from 'framer-motion'

const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const headingVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
        hover: {
            rotate: 10,
            scale: 1.15,
            transition: { duration: 0.3, type: 'spring', stiffness: 400 },
        },
    }
    return (
        <div className='row py-5'>
            <motion.div 
                className='text-center my-5'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h1 variants={headingVariants}>What makes Althue different</motion.h1>
                <motion.h6 className='mt-4 custom-text' variants={headingVariants}>We don't just teach you how to design, we teach you how to</motion.h6>
                <motion.h6 className='custom-text fw-bold' variants={headingVariants}>build a creative career.</motion.h6>
            </motion.div>
            <motion.div 
                className='row d-flex justify-content-center'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                    className="card col-md-3 my-md-4 col-6 my-2 mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                    variants={cardVariants}
                >
                    <div className="card-body">
                        <motion.img
                            src={icon1}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                            variants={iconVariants}
                            whileHover="hover"
                        />
                        <h5 className="card-title fw-bold">Career Launch</h5>
                        <p className="card-text mb-0">
                            Turn your creativity into freelance work build a portfolio and land your first clients.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="card col-md-3 my-md-4 col-6 my-2 mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                    variants={cardVariants}
                >
                    <div className="card-body">
                        <motion.img
                            src={icon2}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                            variants={iconVariants}
                            whileHover="hover"
                        />
                        <h5 className="card-title fw-bold">Practical Learning</h5>
                        <p className="card-text mb-0">
                            Project-based courses focused on real-world skills.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="card col-md-3 my-md-4 col-6 my-2 mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                    variants={cardVariants}
                >
                    <div className="card-body">
                        <motion.img
                            src={icon3}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                            variants={iconVariants}
                            whileHover="hover"
                        />
                        <h5 className="card-title fw-bold">Ongoing Mentorship</h5>
                        <p className="card-text mb-0">
                            Get live feedback and guidance from experienced freelance instructors.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="card col-md-3 my-md-4 col-6 my-2 mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                    variants={cardVariants}
                >
                    <div className="card-body">
                        <motion.img
                            src={icon4}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                            variants={iconVariants}
                            whileHover="hover"
                        />
                        <h5 className="card-title fw-bold">Surrounded by Creatives</h5>
                        <p className="card-text mb-0">
                            Grow with fellow designers, editors, and creators in a supportive space.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AboutUs

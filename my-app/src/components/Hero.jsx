import React from 'react';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';
import img4 from '../images/img-4.jpg';
import MagicButton from './MagicButton';
import { BsArrowRightCircleFill } from "react-icons/bs";
import background from '../images/background.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.08,
      rotate: 2,
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3, type: 'spring', stiffness: 300 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    tap: {
      scale: 0.95,
    },
  };

  const arrowVariants = {
    initial: { x: 0, rotate: 0 },
    hover: {
      x: 12,
      rotate: 15,
      transition: { duration: 0.4, type: 'spring', stiffness: 400, damping: 10 },
    },
  };

  const buttonHoverVariants = {
    buttonHover: {
      scale: 1.05,
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
      transition: { duration: 0.3, type: 'spring', stiffness: 300 },
    },
    tap: {
      scale: 0.92,
    },
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center text-center text-md-start hero-row">
        
        {/* Texte à gauche */}
        <motion.div 
          className="col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column justify-content-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="fw-bold display-4 display-md-3" variants={itemVariants}>
            By Creatives
          </motion.h1>
          <motion.h1 className="fw-bold display-4 display-md-3" variants={itemVariants}>
            For Creatives
          </motion.h1>
          <motion.h5 className="mt-4 custom-text px-3 px-md-0" variants={itemVariants}>
            Discover a world of creativity and career opportunities with our online learning platform and start building your future.
          </motion.h5>
          <motion.div className='my-4' variants={itemVariants}>
            <motion.div
              variants={buttonHoverVariants}
              whileHover="buttonHover"
              whileTap="tap"
              style={{ display: 'inline-block' }}
            >
              <MagicButton>
                <span className="d-flex align-items-center justify-content-center gap-2">
                  Explore Course 
                  <motion.div
                    variants={arrowVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <BsArrowRightCircleFill size={15} />
                  </motion.div>
                </span>
              </MagicButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Images à droite */}
        <motion.div 
          className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center py-4 rounded-4"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Ligne 1 */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
            <motion.img
              src={img1}
              className="rounded-start-pill img-fluid"
              alt="img1"
              style={{ maxWidth: '45%', height: 'auto' }}
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.img
              src={img2}
              className="rounded-circle img-fluid"
              alt="img2"
              style={{ maxWidth: '45%', height: 'auto' }}
              variants={imageVariants}
              whileHover="hover"
            />
          </div>

          {/* Ligne 2 */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <motion.img
              src={img3}
              className="rounded-3 img-fluid"
              alt="img3"
              style={{ maxWidth: '45%', height: 'auto' }}
              variants={imageVariants}
              whileHover="hover"
            />
            <motion.img
              src={img4}
              className="rounded-end-circle img-fluid"
              alt="img4"
              style={{ maxWidth: '45%', height: 'auto' }}
              variants={imageVariants}
              whileHover="hover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;

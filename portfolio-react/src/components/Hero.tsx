import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const headline = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const subheadline = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8, ease: 'easeOut' } },
};
const intro = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7, ease: 'easeOut' } },
};
const button = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5, ease: 'easeOut' } },
};

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-gradient" />
      <div className="hero-content">
        <motion.h1
          className="hero-headline"
          initial="hidden"
          animate="visible"
          variants={headline}
        >
          Khushi Naik
        </motion.h1>
        <motion.h2
          className="hero-subheadline"
          initial="hidden"
          animate="visible"
          variants={subheadline}
        >
          Machine Learning Engineer & Software Developer
        </motion.h2>
        <motion.p
          className="hero-intro"
          initial="hidden"
          animate="visible"
          variants={intro}
        >
          I build intelligent, scalable solutions at the intersection of AI, data, and software. Welcome to my creative portfolio.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={button}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link to="/projects" className="hero-cta">
            View My Work
          </Link>
        </motion.div>
      </div>
      {/* Optional: Profile image with animation */}
      {/* <motion.img src="/profile.jpg" alt="Khushi Naik" className="hero-profile-img" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.7 }} /> */}
    </section>
  );
};

export default Hero; 
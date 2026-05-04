import React from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LetterCollision from './LetterCollision';
import './HomeGrid.css';

const RESUME_URL = 'https://drive.google.com/file/d/1bDlCB0ZvbpMYbRH5GabETDKA-Jn4XU5g/view?usp=drive_link';

const items = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Publications', path: '/publications' },
  { label: 'Contact', path: '/contact' }
];

const strips = [
  'Machine Learning',
  'Computer Vision',
  'Design-Driven UI',
  'Product Engineering',
  'Healthcare AI'
];

const HomeGrid: React.FC = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const yShift = useTransform(scrollYProgress, [0, 0.3], [0, -40]);
  const blur = useTransform(scrollYProgress, [0, 0.3], [0, 3]);
  const blurFilter = useMotionTemplate`blur(${blur}px)`;

  return (
    <main className="home-shell">
      <section className="home-hero-block">
        <motion.div className="hero-main" style={{ y: yShift, filter: blurFilter }}>
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Khushi Naik · Fullstack Developer
          </motion.p>
          <LetterCollision />

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.2 }}
          >
            <button type="button" onClick={() => navigate('/projects')}>View Projects</button>
            <button type="button" onClick={() => navigate('/about')}>About Me</button>
            <button type="button" onClick={() => window.open(RESUME_URL, '_blank', 'noopener,noreferrer')}>
              Resume
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-orb"
          animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>

      <section className="home-strip" aria-label="Focus Areas">
        <div className="track">
          {[...strips, ...strips].map((label, index) => (
            <span key={`${label}-${index}`}>{label}</span>
          ))}
        </div>
      </section>

      <section className="home-link-grid">
        {items.map((item, index) => (
          <motion.button
            type="button"
            key={item.label}
            onClick={() => navigate(item.path)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.05 }}
          >
            {item.label}
          </motion.button>
        ))}
      </section>
    </main>
  );
};

export default HomeGrid;

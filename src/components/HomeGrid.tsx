import React from 'react';
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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

const HOME_HERO_IMAGE = `${import.meta.env.BASE_URL}Me_about_transparent.png`;

const HomeGrid: React.FC = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement | null>(null);
  const heroInView = useInView(heroRef, { amount: 0.22 });
  const pulseActive = !shouldReduceMotion && heroInView;
  const { scrollYProgress } = useScroll();
  const yRaw = useTransform(scrollYProgress, [0, 0.3], [0, -28]);
  const yShift = useSpring(yRaw, { stiffness: 180, damping: 30, mass: 0.25 });

  return (
    <main className="home-shell">
      <section className="home-hero-block" ref={heroRef}>
        <motion.div className="hero-main" style={{ y: yShift }}>
          <motion.p
            className="hero-top-tag"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            HELLO, I&apos;M KHUSHI NAIK
          </motion.p>

          <div className="hero-comic-title-wrap" aria-label="Fullstack Developer">
            <motion.h1
              className="hero-comic-title"
              initial={{ opacity: 0, y: 26 }}
              animate={pulseActive ? { opacity: 1, y: [0, -3, 0], scale: [1, 1.04, 1] } : { opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.56,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
                y: { delay: 0.8, duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
                scale: { delay: 0.8, duration: 4.8, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              FULLSTACK
            </motion.h1>
            <motion.h1
              className="hero-comic-title"
              initial={{ opacity: 0, y: 26 }}
              animate={pulseActive ? { opacity: 1, y: [0, -2, 0], scale: [1, 1.035, 1] } : { opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.56,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
                y: { delay: 0.88, duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
                scale: { delay: 0.88, duration: 5.2, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              DEVELOPER
            </motion.h1>

            <div className="hero-photo-anchor">
              <motion.img
                src={HOME_HERO_IMAGE}
                alt="Khushi Naik portrait"
                className="hero-photo"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={
                  pulseActive
                    ? { opacity: 1, y: [0, -5, 0], scale: [1, 1.09, 1], rotate: [0, -0.4, 0.4, 0] }
                    : { opacity: 1, y: 0, scale: 1, rotate: 0 }
                }
                transition={{
                  duration: 0.56,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                  y: { delay: 1.02, duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
                  scale: { delay: 1.02, duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { delay: 1.02, duration: 6.6, repeat: Infinity, ease: 'easeInOut' }
                }}
              />
            </div>

            <div className="hero-bottom-banner-anchor">
              <motion.p
                className="hero-bottom-banner"
                initial={{ opacity: 0, y: 20 }}
                animate={pulseActive ? { opacity: 1, y: [0, -2, 0], scale: [1, 1.045, 1] } : { opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                  y: { delay: 1.1, duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
                  scale: { delay: 1.1, duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
                }}
              >
                BUILDING PRODUCTS THAT MATTER
              </motion.p>
            </div>

            <div className="hero-actions-anchor">
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.58, delay: 0.38 }}
              >
                <button type="button" onClick={() => navigate('/projects')}>View Projects</button>
                <button type="button" onClick={() => navigate('/about')}>About Me</button>
                <button type="button" onClick={() => window.open(RESUME_URL, '_blank', 'noopener,noreferrer')}>
                  Resume
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
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

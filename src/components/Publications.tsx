import React from 'react';
import { motion } from 'framer-motion';
import './Publications.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';

const publications = [
  {
    title: 'Car Driver Fatigue Detection Using Deep Learning and IoT Modules',
    venue: 'Patent (WIPO)',
    year: '2026',
    link: 'https://patentscope.wipo.int/search/en/detail.jsf?docId=IN417757234',
    description:
      'Co-inventor, Patent No. 587088 (granted Apr 17, 2026) on a deep learning and IoT-based driver fatigue detection system for safer road monitoring.'
  },
  {
    title: 'Automated Drowsiness Detection for Driver Safety: A Deep Learning-based Approach',
    venue: 'IEEE',
    year: '2023',
    link: 'https://ieeexplore.ieee.org/document/10183506',
    description:
      'Designed a real-time fatigue detection framework that uses facial landmarks and eye-state dynamics to identify drowsiness risk in driving scenarios.'
  },
  {
    title: 'Effective Automated Drowsiness Detection Using Machine Intelligence Techniques',
    venue: 'IEEE',
    year: '2023',
    link: 'https://ieeexplore.ieee.org/document/10263966',
    description:
      'Benchmarked multiple machine-intelligence approaches for robust drowsiness classification under variable real-world conditions and lighting.'
  },
  {
    title: 'IoT Technologies in Smart Environment: Security Issues and Future Enhancements',
    venue: 'Environmental Science and Pollution Research',
    year: '2022',
    link: 'https://link.springer.com/10.1007/s11356-022-20132-1',
    description:
      'Surveyed IoT adoption across transportation, agriculture, and public systems with an emphasis on security risks, operational constraints, and resilience priorities.'
  }
];

const researchThemes = [
  {
    title: 'APPLIED SAFETY SYSTEMS',
    text: 'Research centered on practical, real-world ML applications where model decisions directly affect human outcomes.'
  },
  {
    title: 'INTERPRETABILITY AND TRUST',
    text: 'A recurring focus on making intelligent systems understandable and dependable for stakeholders beyond engineering teams.'
  },
  {
    title: 'FROM PAPER TO PRODUCT',
    text: 'I treat publications as building blocks for future prototypes, not as isolated academic artifacts.'
  }
];

const Publications: React.FC = () => {
  return (
    <PageLayout
      title="PUBLICATIONS"
      subtitle="Research work"
      description="Peer-reviewed writing on applied intelligence systems, with emphasis on safety, reliability, and practical implementation contexts."
      >
      <section className="publications-flow">
        <div className="publications-theme-grid">
          {researchThemes.map((theme, index) => (
            <motion.article
              key={theme.title}
              className="publications-theme-card"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.72, delay: index * 0.06, ease: cinematicEase }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="publications-timeline" aria-label="Publication list">
          {publications.map((pub) => (
            <motion.article
              className="publication-story-card"
              key={pub.title}
              initial={{ opacity: 0, y: 64, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.82, ease: cinematicEase }}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <div className="publication-year-chip">{pub.year}</div>
              <div className="publication-content">
                <span className="publication-venue">{pub.venue}</span>
                <h3>{pub.title}</h3>
                <p className="publication-description">{pub.description}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                  Read publication
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;

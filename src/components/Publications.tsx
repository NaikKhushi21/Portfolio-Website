import React from 'react';
import { motion } from 'framer-motion';
import './Publications.css';
import PageLayout, { cardVariants } from './PageLayout';

const publications = [
  {
    title: 'IoT Technologies in Smart Environment: Security Issues and Future Enhancements',
    venue: 'Environmental Science and Pollution Research 2022',
    link: 'https://link.springer.com/10.1007/s11356-022-20132-1',
    icon: '/scholar.png',
    description: 'This comprehensive review paper explores the role of IoT in smart environment development, covering various sectors including agriculture, transportation, garbage collection, and security. The paper discusses key technologies like RFID, IP, EPC, Wi-Fi, Bluetooth, and ZigBee, providing insights into IoT implementation challenges and future enhancements for researchers in the field.',
  },
  {
    title: 'Automated Drowsiness Detection for Driver Safety: A Deep Learning-based Approach',
    venue: 'IEEE 2023',
    link: 'https://ieeexplore.ieee.org/document/10183506',
    icon: '/scholar.png',
    description: 'This paper presents a comprehensive deep learning framework for real-time driver drowsiness detection using computer vision and deep learning techniques. The system analyzes facial landmarks and eye movements to detect fatigue indicators, achieving high accuracy in identifying drowsy states to enhance road safety.',
  },
  {
    title: 'Effective Automated Drowsiness Detection Using Machine Intelligence Techniques',
    venue: 'IEEE 2023',
    link: 'https://ieeexplore.ieee.org/document/10263966',
    icon: '/scholar.png',
    description: 'This research focuses on implementing advanced machine learning and ensemble techniques for automated drowsiness detection systems. The paper explores various ML approaches and ensemble methods to improve the accuracy and reliability of fatigue detection in real-world driving scenarios.',
  },
  // Add more publications as needed
];

const Publications: React.FC = () => {
  return (
    <PageLayout title="Publications" subtitle="My published research">
      <section className="publications-section">
        <div className="publications-grid">
          {publications.map((pub, idx) => (
            <motion.div
              className="publication-card"
              key={pub.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                <img src={pub.icon} alt="Publication" className="publication-icon" />
                <div className="publication-content">
                  <h3>{pub.title}</h3>
                  <p className="publication-venue">{pub.venue}</p>
                  <p className="publication-description">{pub.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications; 
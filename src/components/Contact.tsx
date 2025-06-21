import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import PageLayout, { cardVariants } from './PageLayout';

const contacts = [
  {
    label: 'Email',
    value: 'kknaik@usc.edu',
    icon: 'email.png',
    link: 'mailto:kknaik@usc.edu',
    isLink: true,
  },
  {
    label: 'LinkedIn',
    value: 'View Profile',
    icon: 'linkedin.png',
    link: 'https://www.linkedin.com/in/khushinaik/',
    isLink: true,
  },
  {
    label: 'GitHub',
    value: 'View on GitHub',
    icon: 'github.png',
    link: 'https://github.com/khushinaik',
    isLink: true,
  },
  {
    label: 'Google Scholar',
    value: 'View Citations',
    icon: 'google-scholar.png',
    link: 'https://scholar.google.com/citations?user=KhushiNaik',
    isLink: true,
  },
];

const Contact: React.FC = () => {
  return (
    <PageLayout title="Contact Me" subtitle="Get in touch">
      <section className="contact-section">
        <div className="contact-grid">
          {contacts.map((c, idx) => (
            <motion.div
              className="contact-card"
              key={c.label}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <img src={c.icon} alt={c.label} className="contact-icon" />
              <div>
                <span className="contact-label">{c.label}</span>
                {c.isLink ? (
                  <a 
                    href={c.link}
                    target={c.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-value contact-link"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="contact-value">{c.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact; 
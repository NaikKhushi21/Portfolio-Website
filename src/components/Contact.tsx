import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';

type ContactPoint = {
  label: string;
  value: string;
  link: string;
  icon: 'mail' | 'linkedin' | 'github' | 'scholar' | 'resume';
};

const contacts: ContactPoint[] = [
  {
    label: 'Email',
    value: 'khushinaikk21@gmail.com',
    link: 'mailto:khushinaikk21@gmail.com',
    icon: 'mail'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/khushinaik',
    link: 'https://www.linkedin.com/in/khushinaik/',
    icon: 'linkedin'
  },
  {
    label: 'GitHub',
    value: 'github.com/NaikKhushi21',
    link: 'https://github.com/NaikKhushi21',
    icon: 'github'
  },
  {
    label: 'Google Scholar',
    value: 'Research profile',
    link: 'https://scholar.google.com/citations?user=KhushiNaik',
    icon: 'scholar'
  }
];

const IconGlyph: React.FC<{ type: ContactPoint['icon'] }> = ({ type }) => {
  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4.5 7.5L12 13L19.5 7.5" />
      </svg>
    );
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10V17" />
        <circle cx="8" cy="7.5" r="1" />
        <path d="M12 17V12.8C12 11.6 12.8 10.8 14 10.8C15.2 10.8 16 11.6 16 12.8V17" />
      </svg>
    );
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3C7.03 3 3 7.15 3 12.28C3 16.38 5.58 19.86 9.16 21.09V18.42C7.72 18.91 7.42 17.78 7.42 17.78C6.95 16.55 6.28 16.22 6.28 16.22C5.33 15.56 6.35 15.57 6.35 15.57C7.4 15.65 7.95 16.68 7.95 16.68C8.88 18.31 10.39 17.84 11 17.56C11.1 16.87 11.36 16.4 11.65 16.14C8.78 15.81 5.76 14.65 5.76 9.48C5.76 8.01 6.27 6.81 7.12 5.87C6.99 5.54 6.53 4.15 7.25 2.3C7.25 2.3 8.39 1.93 11 3.74C12.08 3.44 13.24 3.3 14.4 3.3C15.56 3.3 16.72 3.44 17.8 3.74C20.41 1.93 21.55 2.3 21.55 2.3C22.27 4.15 21.81 5.54 21.68 5.87C22.53 6.81 23.04 8.01 23.04 9.48C23.04 14.67 20.01 15.8 17.13 16.13C17.49 16.45 17.8 17.09 17.8 18.06V21.09C21.41 19.85 24 16.37 24 12.28C24 7.15 19.97 3 15 3H12Z" />
      </svg>
    );
  }

  if (type === 'resume') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3H14L19 8V21H7Z" />
        <path d="M14 3V8H19" />
        <path d="M10 12H16" />
        <path d="M10 15H16" />
        <path d="M10 18H14" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 13.8C10.3 15.6 13.7 15.6 16 13.8" />
      <path d="M9 10.3H15" />
      <path d="M12 6V10" />
    </svg>
  );
};

const Contact: React.FC = () => {
  return (
    <PageLayout
      title="Contact"
      subtitle="Let’s build the good stuff"
      description="Open to full-time opportunities and thoughtful collaborations in machine learning, computer vision, and product engineering."
    >
      <section className="contact-flow">
        <motion.article
          className="contact-hero-card"
          initial={{ opacity: 0, y: 56, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.24 }}
          transition={{ duration: 0.8, ease: cinematicEase }}
          whileHover={{ y: -3, transition: { duration: 0.2, ease: cinematicEase } }}
        >
          <h2>Great products are built by people who care about both precision and people.</h2>
          <p>
            If you are building in AI, healthcare, or high-impact software and need someone who can think
            from architecture to user experience, I would love to connect.
          </p>
        </motion.article>

        <div className="contact-grid">
          {contacts.map((item) => (
            <motion.article
              className="contact-card"
              key={item.label}
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)', scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: false, amount: 0.28 }}
              transition={{ duration: 0.76, ease: cinematicEase }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <div className="contact-icon-wrap" aria-hidden="true">
                <IconGlyph type={item.icon} />
              </div>

              <div className="contact-content">
                <span className="contact-label">{item.label}</span>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-value"
                >
                  {item.value}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;

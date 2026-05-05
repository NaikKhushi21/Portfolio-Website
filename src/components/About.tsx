import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';

const aboutPhoto = `${import.meta.env.BASE_URL}me_about.png`;

const creativeModes = {
  aiSystems: {
    label: 'AI Systems',
    title: 'Applied AI System Building',
    summary: 'I build practical AI workflows that combine model capability with production reliability.',
    points: [
      'Built RAG assistants, recommendation systems, and document-driven copilots.',
      'Focused on grounded outputs, stable APIs, and clean frontend integration.',
      'Prioritize measurable outcomes over demo-only behavior.'
    ]
  },
  computerVision: {
    label: 'Computer Vision',
    title: 'Computer Vision for Real Workflows',
    summary: 'I enjoy vision projects where model decisions directly affect user and business outcomes.',
    points: [
      'Worked on real-time detection, safety-focused vision, and model fine-tuning.',
      'Optimize for latency and robustness so systems hold up outside ideal conditions.',
      'Treat evaluation and error analysis as core product work.'
    ]
  },
  productEngineering: {
    label: 'Production',
    title: 'End-to-End Product Execution',
    summary: 'I like owning the full flow from backend logic to frontend usability and deployment readiness.',
    points: [
      'Build across React, FastAPI, data workflows, and integration layers.',
      'Design for first-use clarity and long-term maintainability.',
      'Best work happens where technical depth and product clarity meet.'
    ]
  },
  hobby: {
    label: 'Hobby',
    title: 'Hobby and Personal Interests',
    summary: 'Outside work, I spend time on creative hobbies that help me reset and think clearly.',
    points: [
      'Painting and sketching help me stay patient and detail-oriented.',
      'Music helps me focus and maintain a steady creative rhythm.',
      'These hobbies keep me balanced and bring fresh perspective to my work.'
    ]
  }
} as const;

type CreativeMode = keyof typeof creativeModes;

const About: React.FC = () => {
  const [activeMode, setActiveMode] = useState<CreativeMode>('aiSystems');
  const mode = creativeModes[activeMode];

  return (
    <PageLayout
      title="ABOUT ME"
      subtitle="Short story, no fluff"
      description="I’m an MSCS graduate from USC who builds AI, computer vision, and full-stack products with equal focus on technical quality and user experience."
    >
      <section id="about" className="about-section">
        <motion.article
          className="about-card"
          initial={{ opacity: 0, y: 44, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, ease: cinematicEase }}
        >
          <div className="about-media">
            <img src={aboutPhoto} alt="Khushi Naik" />
          </div>
          <div className="about-description">
            <p>
              I'm Khushi Naik, an MS Computer Science graduate from USC. I work at the intersection of computer vision,
              machine learning, and full-stack product engineering, with strong focus on healthcare, education, and
              high-impact user workflows.
            </p>
            <p>
              I have built production-oriented systems across internships and projects, including AI learning tools,
              RAG assistants, real-time vision pipelines, and full-stack apps. I enjoy owning the full path from
              architecture and APIs to interface polish and usability.
            </p>
          </div>
        </motion.article>

        <motion.article
          className="about-lab-card"
          initial={{ opacity: 0, y: 56, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.78, delay: 0.06, ease: cinematicEase }}
        >
          <div className="about-lab-nav" role="tablist" aria-label="Work focus modes">
            {(Object.keys(creativeModes) as CreativeMode[]).map((key) => (
              <button
                key={key}
                type="button"
                className={activeMode === key ? 'active' : ''}
                onClick={() => setActiveMode(key)}
              >
                {creativeModes[key].label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeMode}
            className="about-lab-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <h3>{mode.title}</h3>
            <p>{mode.summary}</p>
            <ul>
              {mode.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </motion.article>
      </section>
    </PageLayout>
  );
};

export default About;

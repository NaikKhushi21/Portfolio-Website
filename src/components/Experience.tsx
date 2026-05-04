import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';

const experiences = [
  {
    company: 'Easley Dunn Productions Inc',
    location: 'Remote',
    title: 'Full Stack Developer Intern',
    dates: 'Sept 2025 – Present',
    highlights: [
      'I built a multilingual gameplay pipeline in Unity that supports 14 languages and lets players switch instantly on both iOS and Android.',
      'I added Firebase analytics across key gameplay loops so the team could clearly see where players were progressing, dropping off, or getting stuck.',
      'I partnered closely with design on those insights, and the resulting tuning work helped increase the player base by 20%.'
    ],
    tech: ['Unity', 'C#', 'Firebase', 'iOS', 'Android']
  },
  {
    company: 'NailedIT Labs',
    location: 'Remote',
    title: 'Full Stack Developer Intern',
    dates: 'July 2025 – Sept 2025',
    highlights: [
      'I built and shipped a full-stack blog platform in Next.js and TypeScript with GraphQL ingestion, then evolved it into a Contentful workflow that non-engineering teams could manage on their own.',
      'To make publishing smooth, I implemented preview/live token handling, typed content normalization, caching, and incremental revalidation so new posts appeared in minutes without redeploys.',
      'I also handled SEO fundamentals end to end, including stable slug rules, canonical tags, sitemap generation, and phased 301 redirects to keep rankings consistent and avoid duplicate-content issues.',
      'On booking reliability, I implemented Stripe Payment Intents with idempotency keys, webhook-based payment confirmation, and retry/fallback notifications, which helped us maintain zero double charges across 2K+ transactions.'
    ],
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'Contentful', 'Stripe']
  },
  {
    company: 'University of Southern California',
    location: 'Los Angeles, CA',
    title: 'Course Grader, CSCI 526 (Advanced Mobile Devices and Game Consoles)',
    dates: 'Jan 2025 – May 2025',
    highlights: [
      'I worked with the professor and course staff to review project milestones, track team progress, and uphold practical engineering standards.',
      'I gave detailed feedback on gameplay design, UI/UX choices, architecture decisions, and implementation quality in Unity and C# projects.',
      'I also evaluated technical design docs and final presentations for clarity, technical depth, and execution quality.'
    ],
    tech: ['Unity', 'C#', 'Game Design', 'Technical Review']
  },
  {
    company: 'Baum Family Maker Space',
    location: 'Los Angeles, CA',
    title: 'Software Developer Intern',
    dates: 'Sep 2024 – May 2025',
    highlights: [
      'I built AI-powered learning tools with React and FastAPI, including real-time APIs and data pipelines for retrieval and summarization.',
      'I developed a RAG chatbot with LangChain, Llama, and ChromaDB so students and instructors could ask contextual questions over course materials.',
      'In parallel, I built a real-time AR sandbox with Orbbec depth sensing that supported hands-on spatial learning for over 100 students.'
    ],
    tech: ['React', 'FastAPI', 'LangChain', 'ChromaDB', 'Orbbec']
  },
  {
    company: 'Avalon Aerospace',
    location: 'Compton, CA',
    title: 'Machine Learning Engineer Intern',
    dates: 'May 2024 – Aug 2024',
    highlights: [
      'I built computer vision systems used for robotics safety, part localization, occupancy tracking, and defect inspection in a production-style environment.',
      'I implemented a Linux real-time detection pipeline on 4K/30FPS streams using YOLO, threaded frame capture, and monitoring hooks for alerting and operational visibility.',
      'I also built a part-location workflow using template matching and calibration-aware coordinate transforms so detections could be consumed reliably by downstream automation APIs.',
      'To improve data quality, I created a C# WinForms annotation tool with OpenCV and SQLite that cut relabeling effort by 65%.'
    ],
    tech: ['PyTorch', 'OpenCV', 'DETR', 'Flask', 'C#']
  },
  {
    company: 'TalentServe',
    location: 'Remote',
    title: 'AI/ML Engineer Intern',
    dates: 'May 2022 – Jul 2022',
    highlights: [
      'I built an AI resume parsing pipeline with GPT-3.5, PyMuPDF, and LangChain to extract and normalize candidate information into structured outputs.',
      'I integrated it with a React frontend and AWS S3-backed storage so the team could run high-volume processing reliably.',
      'The pipeline reached 90%+ extraction accuracy and automated processing for 10K+ resumes, which significantly reduced manual data-entry work.'
    ],
    tech: ['OpenAI API', 'LangChain', 'React', 'AWS S3']
  }
];

const impactStrip = [
  { label: 'Internationalization', value: '14-language game support with instant switching' },
  { label: 'Reliability', value: 'Zero double charges across 2K+ transactions' },
  { label: 'Applied Impact', value: 'Shipped AI, AR, and full-stack systems in production settings' }
];

const Experience: React.FC = () => {
  return (
    <PageLayout
      title="Work Experience"
      subtitle="Professional Journey"
      description="From research-inspired prototypes to production systems, focused on measurable impact, strong engineering quality, and collaborative execution."
    >
      <section className="experience-modern">
        <div className="experience-impact-strip">
          {impactStrip.map((item, index) => (
            <motion.article
              key={item.label}
              className="experience-impact-item"
              initial={{ opacity: 0, y: 42, filter: 'blur(9px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.72, delay: index * 0.06, ease: cinematicEase }}
            >
              <span>{item.label}</span>
              <h3>{item.value}</h3>
            </motion.article>
          ))}
        </div>

        <div className="experience-timeline-modern">
          {experiences.map((exp) => (
            <motion.article
              className="experience-row"
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 74, filter: 'blur(12px)', scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.84, ease: cinematicEase }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <div className="experience-row-left">
                <p>{exp.dates}</p>
                <h4>{exp.location}</h4>
              </div>

              <div className="experience-row-right">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>

                <ul>
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="experience-tech-list">
                  {exp.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;

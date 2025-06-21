import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import PageLayout, { cardVariants } from './PageLayout';

const experiences = [
  {
    company: 'MyReaa',
    location: 'Los Angeles, CA',
    title: 'Associate Software Developer',
    dates: 'Mar 2025 – Present',
    summary: `At MyReaa, I architected and deployed a scalable property valuation engine using XGBoost and KNN, achieving 92% accuracy on over 10,000 properties. I automated appraisal report generation with CrewAI and Selenium, reducing turnaround time by 85%, and built interactive analytics dashboards with Next.js, TypeScript, Plotly, and Grafana to deliver real-time property insights on AWS.`,
    icon: 'devicon-amazonwebservices-original colored', // Placeholder
  },
  {
    company: 'Baum Family Maker Space',
    location: 'Los Angeles, CA',
    title: 'Software Developer Intern',
    dates: 'Sep 2024 – May 2025',
    summary: `I developed an AR sandbox for real-time depth processing and spatial visualization using the Orbbec SDK, supporting 200+ architecture students. I also built a full-stack RAG chatbot solution with React, TypeScript, LangChain, and Llama 3.2, enabling real-time regulatory document summarization and scalable content indexing with ChromaDB.`,
    icon: 'devicon-react-original colored', // Placeholder
  },
  {
    company: 'University of Southern California',
    location: 'Los Angeles, California',
    title: 'Course Grader (CSCI 526 Advanced Mobile devices and Game Console)',
    dates: 'Jan 2024 – Present',
    summary: `Collaborated with the professor to manage coursework, track team project progress, and ensure adherence to industry standards. Provided in-depth feedback on game mechanics, UI/UX design, and software architecture using Unity and C#. Assessed and graded technical game design documents and presentations, ensuring compliance with best coding practices.`,
    icon: '', // No icon
  },
  {
    company: 'Avalon Aerospace',
    location: 'Compton, CA',
    title: 'Machine Learning Engineer',
    dates: 'May 2024 – Aug 2024',
    summary: `At Avalon Aerospace, I engineered a real-time machine vision system for robotic part pickup, integrating PyTorch/CUDA models and Flask APIs for seamless robotic automation. I designed a DETR-based defect detection pipeline, a YOLOv8 safety system on Linux, and a C# WinForms annotation tool, significantly improving accuracy, safety, and efficiency on the factory floor.`,
    icon: 'devicon-pytorch-original colored', // Placeholder
  },
  {
    company: 'TalentServe',
    location: 'Remote',
    title: 'AI/ML Engineer Intern',
    dates: 'May 2022 – Jul 2022',
    summary: `I built an AI-powered resume parser using OpenAI's GPT-3.5 API, PyMuPDF, and LangChain, achieving over 90% accuracy and eliminating manual data entry. The system, integrated with a React.js frontend and S3 backend, processed 10,000+ resumes with 98% uptime, streamlining recruitment workflows.`,
    icon: 'devicon-openai-plain colored', // Placeholder
  }
];

const Experience: React.FC = () => {
  return (
    <PageLayout title="Work Experience" subtitle="My professional journey">
      <section className="experience-section">
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              className="experience-card"
              key={exp.company + exp.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="experience-card-header">
                <h3>{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
                <span className="experience-location">{exp.location}</span>
                <span className="experience-dates">{exp.dates}</span>
              </div>
              <div className="experience-details">
                <p>{exp.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience; 
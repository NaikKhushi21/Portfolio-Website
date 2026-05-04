import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Southern California',
    coursework:
      'Deepened expertise in machine learning, advanced computer vision, NLP, and scalable software systems while converting research and classwork into production-grade prototypes.',
    years: '2023 – 2025'
  },
  {
    degree: 'Bachelor of Technology in Information and Communication Technology',
    school: 'Pandit Deendayal Energy University',
    coursework:
      'Built strong foundations in algorithms, systems, databases, and cloud while exploring AI/ML through hackathons, labs, and collaborative engineering projects.',
    years: '2019 – 2023'
  }
];

const academicHighlights = [
  { label: 'Graduate Degree', value: 'USC MSCS' },
  { label: 'Core Focus', value: 'AI + Vision + Product' },
  { label: 'Project Style', value: 'Research to Deployment' }
];

const skillsCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'C#', 'Go', 'Swift', 'R', 'Solidity', 'HTML', 'SQL']
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Redux', 'Node.js', 'Express', 'Next.js', 'Django', 'Flask', 'Angular', 'Bootstrap', 'Material-UI', 'Linux']
  },
  {
    title: 'Data & Cloud',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Git', 'CI/CD', 'Hadoop']
  },
  {
    title: 'AI & ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Spark', 'NumPy', 'Pandas', 'OpenCV', 'Jax', 'OpenAI', 'LangChain']
  }
];

const Education: React.FC = () => {
  return (
    <PageLayout
      title="Education"
      subtitle="Academic Foundation"
      description="Structured training in machine learning and software engineering, paired with hands-on project execution and deployment discipline."
    >
      <section className="education-modern">
        <div className="education-highlights">
          {academicHighlights.map((item, index) => (
            <motion.article
              key={item.label}
              className="education-highlight"
              initial={{ opacity: 0, y: 46, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.74,
                delay: index * 0.06,
                ease: cinematicEase
              }}
            >
              <span>{item.label}</span>
              <h3>{item.value}</h3>
            </motion.article>
          ))}
        </div>

        <div className="education-timeline-modern">
          {educationData.map((edu) => (
            <motion.article
              key={edu.degree}
              className="education-row"
              initial={{ opacity: 0, y: 72, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.82, ease: cinematicEase }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <div className="education-row-left">
                <p>{edu.years}</p>
              </div>
              <div className="education-row-right">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p>{edu.coursework}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="education-skill-sections">
          {skillsCategories.map((category) => (
            <motion.article
              key={category.title}
              className="skill-section"
              initial={{ opacity: 0, y: 58, filter: 'blur(10px)', scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: false, amount: 0.28 }}
              transition={{ duration: 0.74, ease: cinematicEase }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <h3>{category.title}</h3>
              <div className="skill-pills">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Education;

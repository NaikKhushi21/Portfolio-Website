import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';
import openaiLogo from '../assets/OpenAI-black-monoblossom.svg';
import langchainLogo from '../assets/langchain.png';
import jaxLogo from '../assets/jax.png';

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
    tone: 'languages',
    blurb: 'Core programming toolkit for building reliable, maintainable systems across product and platform layers.',
    badgeSkill: 'Python',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'C#', 'Go', 'Swift', 'R', 'Solidity', 'HTML', 'SQL']
  },
  {
    title: 'Frameworks',
    tone: 'frameworks',
    blurb: 'Production frameworks and app tooling used to ship full-stack products from API to polished interface.',
    badgeSkill: 'React',
    skills: ['React', 'Redux', 'Node.js', 'Express', 'Next.js', 'Django', 'Flask', 'Angular', 'Bootstrap', 'Material-UI', 'Linux']
  },
  {
    title: 'Data & Cloud',
    tone: 'data-cloud',
    blurb: 'Cloud infrastructure, data systems, and DevOps stack for scalable workflows and dependable delivery.',
    badgeSkill: 'AWS',
    skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Git', 'CI/CD', 'Hadoop']
  },
  {
    title: 'AI & ML',
    tone: 'ai-ml',
    blurb: 'Modern ML and applied AI stack for model building, orchestration, evaluation, and deployment.',
    badgeSkill: 'OpenAI',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Spark', 'NumPy', 'Pandas', 'OpenCV', 'Jax', 'OpenAI', 'LangChain']
  }
];


const skillIconClass: Record<string, string> = {
  Python: 'devicon-python-plain',
  Java: 'devicon-java-plain',
  JavaScript: 'devicon-javascript-plain',
  TypeScript: 'devicon-typescript-plain',
  'C++': 'devicon-cplusplus-plain',
  C: 'devicon-c-plain',
  'C#': 'devicon-csharp-plain',
  Go: 'devicon-go-plain',
  Swift: 'devicon-swift-plain',
  R: 'devicon-r-plain',
  Solidity: 'devicon-solidity-plain',
  HTML: 'devicon-html5-plain',
  SQL: 'devicon-mysql-plain',
  React: 'devicon-react-original',
  Redux: 'devicon-redux-original',
  'Node.js': 'devicon-nodejs-plain',
  Express: 'devicon-express-original',
  'Next.js': 'devicon-nextjs-original',
  Django: 'devicon-django-plain',
  Flask: 'devicon-flask-original',
  Angular: 'devicon-angularjs-plain',
  Bootstrap: 'devicon-bootstrap-plain',
  'Material-UI': 'devicon-materialui-plain',
  Linux: 'devicon-linux-plain',
  AWS: 'devicon-amazonwebservices-plain-wordmark',
  GCP: 'devicon-googlecloud-plain',
  Docker: 'devicon-docker-plain',
  Kubernetes: 'devicon-kubernetes-plain',
  MongoDB: 'devicon-mongodb-plain',
  PostgreSQL: 'devicon-postgresql-plain',
  MySQL: 'devicon-mysql-plain',
  Redis: 'devicon-redis-plain',
  Git: 'devicon-git-plain',
  'CI/CD': 'devicon-githubactions-plain',
  Hadoop: 'devicon-hadoop-plain',
  TensorFlow: 'devicon-tensorflow-original',
  PyTorch: 'devicon-pytorch-original',
  'Scikit-Learn': 'devicon-scikitlearn-plain',
  Spark: 'devicon-apachespark-original',
  OpenCV: 'devicon-opencv-plain',
  Jax: ''
};

const skillIconImage: Record<string, string> = {
  AWS: 'https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/amazonwebservices/amazonwebservices-original.svg',
  OpenAI: openaiLogo,
  LangChain: langchainLogo,
  NumPy: 'https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/numpy/numpy-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/pandas/pandas-original.svg',
  Jax: jaxLogo
};

const Education: React.FC = () => {
  return (
    <PageLayout
      title="EDUCATION"
      subtitle="Academic Foundation"
      description="Structured training in machine learning and software engineering, paired with hands-on project execution and deployment discipline."
    >
      <section className="education-modern">
        <div className="education-highlights">
          {academicHighlights.map((item, index) => (
            <motion.article
              key={item.label}
              className="education-highlight"
              initial={{ opacity: 0, y: 46 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
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
              initial={{ opacity: 0, y: 72 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
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
              className={`skill-section skill-section--${category.tone}`}
              initial={{ opacity: 0, y: 58, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.74, ease: cinematicEase }}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: cinematicEase } }}
            >
              <div className="skill-card-badge" aria-hidden="true">
                {skillIconImage[category.badgeSkill] ? (
                  <img src={skillIconImage[category.badgeSkill]} alt="" className="skill-pill-icon-img" />
                ) : (
                  <i className={`${skillIconClass[category.badgeSkill]} skill-pill-icon`} />
                )}
              </div>
              <h3>{category.title}</h3>
              <p className="skill-section-blurb">{category.blurb}</p>
              <div className="skill-pills">
                {category.skills.map((skill) => {
                  const iconClass = skillIconClass[skill];
                  const iconImage = skillIconImage[skill];
                  return (
                    <span key={skill}>
                      {iconImage ? <img className="skill-pill-icon-img" src={iconImage} alt="" aria-hidden="true" /> : null}
                      {iconClass ? <i className={`${iconClass} skill-pill-icon`} aria-hidden="true" /> : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import PageLayout, { cardVariants } from './PageLayout';
import awsLogo from '../assets/aws.svg';
import jaxLogo from '../assets/jax.png';
import openaiLogo from '../assets/OpenAI-black-monoblossom.svg';
import langchainLogo from '../assets/langchain.png';

const educationData = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Southern California',
    coursework:
      'I spent two years deepening my skills in AI, machine learning, deep learning, natural-language processing, advanced computer vision, algorithms, and even mobile-game development, turning class projects into real prototypes and research ideas.',
    years: '2023 – 2025',
    icon: '', // Placeholder, can use a USC logo if available
  },
  {
    degree: 'Bachelor of Technology in Information and Communication Technology',
    school: 'Pandit Deendayal Energy University',
    coursework:
      'Over four years I built a solid base in data structures, databases, operating systems, and cloud services while exploring AI, machine learning, computer vision, NLP, and big-data analytics through labs, hackathons, and group projects.',
    years: '2019 – 2023',
    icon: '', // Placeholder, can use a DA-IICT logo if available
  },
];

const skillsCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'C', icon: 'devicon-c-plain colored' },
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: 'Go', icon: 'devicon-go-plain colored' },
      { name: 'Swift', icon: 'devicon-swift-plain colored' },
      { name: 'R', icon: 'devicon-r-plain colored' },
      { name: 'Solidity', icon: 'devicon-solidity-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'SQL', icon: 'devicon-mysql-plain colored' },
    ],
  },
  {
    title: 'Frameworks & Tech',
    skills: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Redux', icon: 'devicon-redux-original colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-original colored' },
      { name: 'Django', icon: 'devicon-django-plain colored' },
      { name: 'Flask', icon: 'devicon-flask-original colored' },
      { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'Material-UI', icon: 'devicon-materialui-plain colored' },
      { name: 'Linux', icon: 'devicon-linux-plain colored' },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'GCP', icon: 'devicon-googlecloud-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'Redis', icon: 'devicon-redis-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'CI/CD', icon: 'devicon-githubactions-plain colored' },
      { name: 'Hadoop', icon: 'devicon-hadoop-plain colored' },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
      { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
      { name: 'Scikit-Learn', icon: 'devicon-scikitlearn-plain colored' },
      { name: 'Spark', icon: 'devicon-apachespark-plain colored' },
      { name: 'NumPy', icon: 'devicon-numpy-original colored' },
      { name: 'Pandas', icon: 'devicon-pandas-original colored' },
      { name: 'OpenCV', icon: 'devicon-opencv-plain colored' },
      { name: 'Jax', icon: '' },
      { name: 'OpenAI', icon: '' },
      { name: 'LangChain', icon: '' },
    ],
  },
];

const logoMap: Record<string, string> = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'Go': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
  'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Material-UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'AWS': awsLogo,
  'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
  'Hadoop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  'Spark': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'Jax': jaxLogo,
  'OpenAI': openaiLogo,
  'LangChain': langchainLogo,
};

const Education: React.FC = () => {
  return (
    <PageLayout title="Education & Skills" subtitle="My academic journey">
      <section className="education-section">
        <div className="education-timeline">
          {educationData.map((edu, idx) => (
            <motion.div
              className="education-card"
              key={edu.degree}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="education-card-header">
                {edu.icon && <i className={edu.icon} />}
                <div>
                  <h3>{edu.degree}</h3>
                  <span className="education-school">{edu.school}</span>
                  <span className="education-years">{edu.years}</span>
                </div>
              </div>
              <div className="education-details">
                <p className="education-coursework">{edu.coursework}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="skills-grid-container">
          {skillsCategories.map((category, catIndex) => (
            <motion.div
              className="skill-card"
              key={category.title}
              custom={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map(skill => (
                  <div className="skill-item" key={skill.name}>
                    {logoMap[skill.name] && (
                      <img
                        src={logoMap[skill.name]}
                        alt={skill.name + ' logo'}
                        className="skill-logo"
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Education; 
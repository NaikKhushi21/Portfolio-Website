import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import PageLayout, { cardVariants } from './PageLayout';

const logoMap: Record<string, string> = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'Unity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'DOTS': '',
  'LangChain': '',
  'ChromaDB': '',
  'BeautifulSoup': '',
  'GCN': '',
  'Keras': '',
  'SHAP': '',
  'VAPI.ai': '',
  'WebSockets': '',
  'SIFT': '',
  'RANSAC': '',
  'PyTorch3D': '',
  'Neural Rendering': '',
  'Ceres Solver': '',
  'SFM': '',
  'MLP': '',
  'CNN': '',
  'U-Net': '',
  'SegNet': '',
  'AR/VR': '',
  '3D Graphics': '',
  '.NET': '',
  'Computer Vision': '',
  'Parallel Processing': '',
};

const projects = [
  {
    title: 'Landmarks iOS Application',
    description: `Developed a native iOS app using Swift, SwiftUI, and MapKit that provides interactive maps and landmark information. Integrated Core Location for real-time tracking, implemented offline caching, and designed custom animations for a seamless user experience.`,
    link: '',
    image: 'landmark.jpg',
    stack: ['Swift', 'SwiftUI', 'MapKit', 'Core Location'],
  },
  {
    title: 'Web Marketplace',
    description: `Full-stack web application built with MongoDB, Express, React, and Node.js. Features user authentication, CRUD operations, and a responsive UI. Deployed on Render for live access.`,
    link: 'https://github.com/NaikKhushi21/MERN-Project',
    image: 'marketlace.jpg',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'AI Flowchart Generator',
    description: `Built a web application with React, TypeScript, Next.js, and LangChain that automates the creation of flowcharts from natural-language descriptions using LLM prompts, streamlining documentation and process mapping for users.`,
    link: '',
    image: 'flow.png',
    stack: ['React', 'TypeScript', 'Next.js', 'LangChain'],
  },
  {
    title: 'Real Estate Q&A Chatbot',
    description: `Engineered a property document Q&A chatbot using React, FastAPI, LangChain, and ChromaDB. Enabled users to upload documents and query them via an LLM-powered chat interface, delivering instant, accurate answers for real estate professionals.`,
    link: 'https://github.com/NaikKhushi21/Real-Estate-RAG-Chatbot-with-Ollama-and-Langchain',
    image: 'Chatbot Conversation.jpg',
    stack: ['React', 'FastAPI', 'LangChain', 'ChromaDB'],
  },
  {
    title: 'Real Estate Market Sentiment Analysis',
    description: `Created a dynamic analytics dashboard that scrapes property forums and news sites, runs VADER sentiment scoring, and presents user-driven insights using Python, BeautifulSoup, FastAPI, and React.`,
    link: 'https://github.com/NaikKhushi21/Real-Estate-Sentiment-Analysis',
    image: 'realestate-sentiment.png',
    stack: ['Python', 'BeautifulSoup', 'FastAPI', 'React'],
  },
  {
    title: 'Ethereum Phishing Detection',
    description: `Designed a sparse Graph Convolutional Network pipeline in Python and PyTorch to analyze a three-million-node Ethereum graph, boosting phishing F1-score to 0.64 and reducing training time by 16%.`,
    link: '',
    image: 'ethereum-phishing.png',
    stack: ['Python', 'PyTorch', 'GCN'],
  },
  {
    title: 'Lung Tumor Segmentation',
    description: `Improved lesion delineation precision by 28% in CT scans using U-Net and SegNet architectures in PyTorch. Performed image segmentation and calculated tumor volume for early diagnosis and treatment planning.`,
    link: 'https://github.com/NaikKhushi21/Lung-Tumor-Segmentation',
    image: 'lung.jpg',
    stack: ['Python', 'PyTorch', 'U-Net', 'SegNet'],
  },
  {
    title: 'AR Sandbox - SandWorm Extension',
    description: `Extended the SandWorm augmented reality sandbox project for Orbbec FemtoBolt sensor integration. Implemented real-time depth data processing at 30+ FPS using double-buffering, optimized memory management with unsafe code blocks, achieved parallel processing with thread-safe structures, and accelerated water flow simulation using ILGPU for CUDA-based processing.`,
    link: 'https://github.com/NaikKhushi21/AR-Sandbox',
    image: 'ar-sandbox.png',
    stack: ['C#', '.NET', 'Computer Vision', 'Parallel Processing'],
  },
  {
    title: 'MedBuddy Voice Medication Assistant',
    description: `Built a real-time medication reminder system with React, FastAPI, WebSockets, and VAPI.ai, featuring REST APIs, WebSocket sync, and voice/phone integration for improved medication adherence.`,
    link: 'https://github.com/NaikKhushi21/MedBuddy-Voice-Agent',
    image: 'medbuddy.jpg',
    stack: ['React', 'FastAPI', 'WebSockets', 'VAPI.ai'],
  },
  {
    title: 'Skin Cancer Detection',
    description: `Achieved 94% melanoma classification accuracy by building deep learning models (ResNet50, InceptionResNetV2) with SHAP explainability, supporting early diagnosis and clinical decision-making.`,
    link: 'https://github.com/NaikKhushi21/Skin-Cancer-Detection-and-XAI',
    image: 'skin.jpg',
    stack: ['Python', 'TensorFlow', 'Keras', 'SHAP'],
  },
  {
    title: 'Driver Drowsiness Detection',
    description: `Created a real-time fatigue alert system using OpenCV, CNN/MLP, and facial landmark detection, optimizing for 97% precision and enhancing driver safety.`,
    link: 'https://github.com/NaikKhushi21/Drowsiness-Detection',
    image: 'car.jpg',
    stack: ['OpenCV', 'CNN', 'MLP'],
  },
  {
    title: '360° Panorama Stitching',
    description: `Built a feature-based image stitching tool in Python using SIFT, RANSAC, and multi-band blending, producing seamless panoramas for AR applications.`,
    link: 'https://github.com/NaikKhushi21/Panorama-Stitching',
    image: 'pano.jpg',
    stack: ['Python', 'SIFT', 'RANSAC'],
  },
  {
    title: '3D Gaussian Splatting',
    description: `Designed a neural rendering engine with PyTorch3D, using Gaussian primitives to achieve photorealistic 3D reconstruction at 60+ FPS.`,
    link: '',
    image: 'gauss.jpg',
    stack: ['PyTorch3D', 'Neural Rendering'],
  },
  {
    title: 'Structure-from-Motion 3D Reconstruction',
    description: `Implemented an end-to-end SFM pipeline with OpenCV and Ceres Solver, achieving a mean reprojection error of 0.54 across multiple image sets.`,
    link: '',
    image: 'reconstruction.jpg',
    stack: ['OpenCV', 'Ceres Solver', 'SFM'],
  },
  {
    title: 'Flip-the-Hue',
    description: `Unity game with physics interactions and GPU optimizations using C# & DOTS. Integrated CI/CD with Unity Cloud Build and managed assets with Addressables.`,
    link: 'https://github.com/NaikKhushi21/Flip-the-Hue',
    image: 'flip.jpg',
    stack: ['Unity', 'C#', 'DOTS'],
  },
  {
    title: 'Heart-Attack-Likelihood-Prediction',
    description: `Built ML models to predict heart attack likelihood using patient data. Used Jupyter Notebook for data analysis and model evaluation.`,
    link: 'https://github.com/NaikKhushi21/Heart-Attack-Likelihood-Prediction',
    image: 'heart.jpg',
    stack: ['Python', 'Jupyter', 'ML'],
  },
];

const Projects: React.FC = () => {
  return (
    <PageLayout title="Projects" subtitle="A selection of my work">
      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              className="project-card enhanced"
              key={project.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              style={{ cursor: project.link ? 'pointer' : 'default', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(2px)' }}
            >
              {/* Floating logo/icon for the main tech or project */}
              {project.stack && project.stack.length > 0 && logoMap[project.stack[0]] && (
                <img src={logoMap[project.stack[0]]} alt={project.stack[0]} className="project-logo-float" />
              )}
              {/* Animated overlay on hover */}
              <div className="project-card-overlay" />
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                  <img src={project.image} alt={project.title} className="project-image" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack && project.stack.map(tech => (
                      <span className="project-tech" key={tech}>
                        {logoMap[tech] && <img src={logoMap[tech]} alt={tech} className="project-tech-logo" />} {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#D83F87', fontWeight: '600' }}>
                    <i className="devicon-github-original" style={{ marginRight: '0.3rem' }}></i>
                    View on GitHub
                  </div>
                </a>
              ) : (
                <>
                  <img src={project.image} alt={project.title} className="project-image" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">
                    {project.stack && project.stack.map(tech => (
                      <span className="project-tech" key={tech}>
                        {logoMap[tech] && <img src={logoMap[tech]} alt={tech} className="project-tech-logo" />} {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects; 
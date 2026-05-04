import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Projects.css';
import PageLayout from './PageLayout';
import { cinematicEase } from './motionPresets';

const DEFAULT_GITHUB = 'https://github.com/NaikKhushi21?tab=repositories';

type Project = {
  title: string;
  description: string;
  category: string;
  impact: string;
  github?: string;
  live?: string;
  image?: string;
  stack: string[];
};

const projects: Project[] = [
  {
    title: 'AI Lab Report Interpreter',
    description:
      'Interactive patient chatbot with a 3-node LangGraph workflow for lab report reasoning, local PII redaction, and context-aware explanations.',
    category: 'Healthcare AI',
    impact: 'HIPAA-oriented workflow with private document handling',
    image: 'project-covers/ai-lab-report.svg',
    stack: ['FastAPI', 'React', 'TypeScript'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Live Meeting Copilot',
    description:
      'Real-time assistant that captures microphone audio, performs rolling transcription, and returns contextual in-meeting suggestions with low-latency cycles.',
    category: 'AI Systems',
    impact: 'Reliable in-session guidance with strict suggestion quality constraints',
    image: 'project-covers/live-meeting-copilot.svg',
    stack: ['React', 'Node.js', 'Express', 'TypeScript'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'TensorRT Vision Inference Optimization Pipeline',
    description:
      'End-to-end ONNX + TensorRT optimization stack using FP16/INT8 quantization and async CUDA streams for YOLOv8 inference acceleration.',
    category: 'ML/CV',
    impact: '3.65x throughput gain and 79.9% p95 latency reduction on Tesla T4',
    image: 'project-covers/tensorrt-vision.svg',
    stack: ['PyTorch', 'Python'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Supplement Recommender',
    description:
      'Full-stack Shopify recommendation app with personalized bundles, GraphQL integration, background tasks, and product-cart workflows.',
    category: 'Full Stack',
    impact: 'Production-grade personalization and e-commerce orchestration',
    image: 'project-covers/supplement-recommender.svg',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Real Estate Price Prediction Web App',
    description:
      'Web app that finds comparable properties and predicts valuation adjustments via KNN + XGBoost models exposed through REST APIs.',
    category: 'AI Systems',
    impact: '92% accuracy on 10K+ listings with explainable valuation outputs',
    stack: ['Python', 'FastAPI', 'React'],
    image: 'realestate.png',
    github: DEFAULT_GITHUB
  },
  {
    title: 'Real Estate Q&A Chatbot',
    description:
      'RAG-based property assistant that supports document uploads and fast factual retrieval using embeddings and conversational querying.',
    category: 'AI Systems',
    impact: 'Instant and grounded document Q&A for domain users',
    github: 'https://github.com/NaikKhushi21/Real-Estate-RAG-Chatbot-with-Ollama-and-Langchain',
    image: 'Chatbot Conversation.jpg',
    stack: ['React', 'FastAPI', 'LangChain']
  },
  {
    title: 'Object Detection Fine-Tuning on Pascal VOC',
    description:
      'Trained and tuned Faster R-CNN and DETR pipelines by converting datasets into Detectron2 and COCO formats with targeted hyperparameter optimization.',
    category: 'ML/CV',
    impact: 'Raised Faster R-CNN AP50 from 0.158 to 77.18',
    image: 'project-covers/object-detection.svg',
    stack: ['PyTorch', 'Python'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'MedBuddy Voice Medication Assistant',
    description:
      'Real-time medication reminder platform with API-driven scheduling, live sync over WebSockets, and AI voice-call integration.',
    category: 'Healthcare AI',
    impact: 'Live reminder workflows with reliable user-device synchronization',
    github: 'https://github.com/NaikKhushi21/MedBuddy-Voice-Agent',
    image: 'medbuddy.jpg',
    stack: ['React', 'FastAPI', 'WebSockets']
  },
  {
    title: 'Skin Cancer Detection with XAI',
    description:
      'Transfer-learning pipeline for lesion classification with interpretability overlays for malignant vs benign prediction reasoning.',
    category: 'Healthcare AI',
    impact: '94% classification accuracy with explainable outputs',
    github: 'https://github.com/NaikKhushi21/Skin-Cancer-Detection-and-XAI',
    image: 'skin.jpg',
    stack: ['Python', 'TensorFlow']
  },
  {
    title: '3D Gaussian Splatting',
    description:
      'Neural rendering engine that converts reconstructed scene data to Gaussian primitives for high-fidelity real-time view synthesis.',
    category: 'ML/CV',
    impact: '60+ FPS photorealistic reconstruction pipeline',
    image: 'gauss.jpg',
    stack: ['PyTorch', 'Python'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Structure-from-Motion 3D Reconstruction',
    description:
      'Implemented feature matching, camera pose estimation, and bundle adjustment for full SfM geometry reconstruction.',
    category: 'ML/CV',
    impact: 'Mean reprojection error around 0.54 across image sets',
    image: 'reconstruction.jpg',
    stack: ['OpenCV', 'Python'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'MERN E-Commerce Marketplace',
    description:
      'Full-stack marketplace with authentication middleware, modular APIs, product catalog management, and order workflows.',
    category: 'Full Stack',
    impact: 'Production-ready architecture for end-to-end commerce workflows',
    github: 'https://github.com/NaikKhushi21/MERN-Project',
    image: 'marketlace.jpg',
    stack: ['MongoDB', 'Express', 'React', 'Node.js']
  },
  {
    title: 'AI Flowchart Generator',
    description:
      'Developer productivity tool that transforms natural language prompts into structured flowchart outputs.',
    category: 'AI Systems',
    impact: 'Reduced documentation effort for complex logic flows',
    image: 'flow.png',
    stack: ['React', 'TypeScript', 'Next.js', 'LangChain'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Landmarks iOS Application',
    description:
      'Native iOS app with map-based location discovery, Core Location tracking, local caching, and custom interaction animations.',
    category: 'Product Engineering',
    impact: 'Smooth and responsive location UX on-device',
    image: 'landmark.jpg',
    stack: ['Swift'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'AI Book Recommendation System',
    description:
      'Architected a recommendation service with FastAPI + React, integrated Gemini and Google Books APIs, and used Firestore for caching and user history.',
    category: 'AI Systems',
    impact: 'Scalable NLP-powered recommendation flow with API health monitoring.',
    image: 'project-covers/book-recommendation.svg',
    stack: ['FastAPI', 'React', 'Gemini', 'Firestore'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'AI-Driven Resume Parser',
    description:
      'Built a document parsing pipeline with GPT-3.5, PyMuPDF, and LangChain to extract and normalize resume content at scale.',
    category: 'AI Systems',
    impact: 'Achieved 90%+ extraction quality on high-volume resume processing.',
    image: 'project-covers/resume-parser.svg',
    stack: ['Python', 'LangChain', 'GPT-3.5', 'React', 'AWS S3'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'AI-Powered Spatial Navigator',
    description:
      'Developed an assistive AR iOS app using CoreML, Vision, YOLOv3, and LiDAR to provide spatial audio and speech guidance.',
    category: 'Product Engineering',
    impact: 'Real-time assistive navigation for visually impaired users.',
    image: 'project-covers/ar-navigator.svg',
    stack: ['Swift', 'CoreML', 'Vision', 'ARKit', 'LiDAR'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Adversarial Robustness for Vision Models',
    description:
      'Implemented IGSM adversarial attacks and training for ResNet-9 on CINIC-10 with quantified robustness and accuracy tradeoffs.',
    category: 'ML/CV',
    impact: 'Improved attacked-image performance from 2.34% to 63.28% under epsilon 0.12.',
    image: 'project-covers/adversarial-robustness.svg',
    stack: ['Python', 'PyTorch', 'ResNet-9', 'IGSM'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Customer Churn Analysis',
    description:
      'Built churn risk scoring workflows and Tableau dashboards to expose contract, support, and payment drivers behind revenue loss.',
    category: 'Data Analytics',
    impact: 'Quantified retention priorities with business-facing analytics views.',
    image: 'project-covers/customer-churn.svg',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'Tableau'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'Built an interactive dataset exploration dashboard with optimized real-time rendering and API-driven data workflows.',
    category: 'Full Stack',
    impact: 'Improved responsiveness for large-data visual exploration.',
    image: 'project-covers/data-visualization-dashboard.svg',
    stack: ['React', 'TypeScript', 'Next.js'],
    github: 'https://github.com/NaikKhushi21/Data-Dashboard',
    live: 'https://realestate-visualization-dashboard.vercel.app/'
  },
  {
    title: 'Dye Hard',
    description:
      'Built a 2D color-matching survival shooter with dynamic color-switching mechanics, scaling difficulty, and gameplay economy loops.',
    category: 'Game Development',
    impact: 'Balanced progression and replayability with measurable gameplay signals.',
    image: 'flip.jpg',
    stack: ['Unity', 'C#', 'Git'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Ethereum Phishing Detection',
    description:
      'Developed a graph-based ML pipeline to detect fraudulent transactions on large Ethereum transaction networks.',
    category: 'AI Systems',
    impact: 'Reduced training time by 16% while achieving a 0.64 F1 score.',
    image: 'ethereum-phishing.png',
    stack: ['Python', 'PyTorch', 'GCN'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Flip the Hue',
    description:
      'Built a 2D puzzle platformer with color-flip obstacle logic, dash/checkpoint systems, and Firebase gameplay telemetry.',
    category: 'Game Development',
    impact: 'Enabled data-driven level tuning through per-level player analytics.',
    image: 'flip-the-hue.png',
    stack: ['Unity', 'C#', 'Firebase', 'Git'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Heart Attack Likelihood Prediction',
    description:
      'Developed DNN + CNN ensemble pipelines with SMOTE balancing and feature engineering for risk prediction.',
    category: 'Healthcare AI',
    impact: 'Achieved 87.44% accuracy with 100% precision in evaluation runs.',
    image: 'heart.jpg',
    stack: ['PyTorch', 'DNN', 'CNN', 'SMOTE'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'LLM-Powered RAG Analytics',
    description:
      'Built a scalable FastAPI + ChromaDB RAG platform that grounded LLM outputs on custom knowledge base retrieval.',
    category: 'AI Systems',
    impact: 'Improved response reliability and reduced hallucination risks for analytic queries.',
    image: 'Chatbot Conversation.jpg',
    stack: ['FastAPI', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/NaikKhushi21/RAG-chatbot-with-Llama-3.2'
  },
  {
    title: 'Lung Tumor Segmentation',
    description:
      'Built CT semantic segmentation pipelines with U-Net and SegNet plus Hounsfield preprocessing for better boundary quality.',
    category: 'Healthcare AI',
    impact: 'Improved tumor boundary delineation by 28%.',
    image: 'lung.jpg',
    stack: ['PyTorch', 'U-Net', 'SegNet'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Operating System Virtual Lab',
    description:
      'Created an interactive browser-based lab to simulate deadlock, CPU scheduling, and disk scheduling algorithms.',
    category: 'Product Engineering',
    impact: 'Delivered configurable real-time visual learning for core OS concepts.',
    image: 'project-covers/os-virtual-lab.svg',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/NaikKhushi21/Operating-Systems-Website',
    live: 'https://naikkhushi21.github.io'
  },
  {
    title: 'Panorama Stitching with SIFT & RANSAC',
    description:
      'Implemented a computational photography pipeline with keypoint extraction, feature matching, homography estimation, and warping.',
    category: 'ML/CV',
    impact: 'Generated geometrically aligned panoramas from custom multi-image captures.',
    image: 'pano.jpg',
    stack: ['OpenCV', 'Python', 'SIFT', 'RANSAC'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Real Estate Market Sentiment Analysis',
    description:
      'Built a scraping + sentiment workflow over property forums and news, then surfaced dynamic analytics in a React dashboard.',
    category: 'Data Analytics',
    impact: 'Enabled near real-time sentiment tracking for property-market signals.',
    image: 'project-covers/real-estate-sentiment.svg',
    stack: ['Python', 'BeautifulSoup', 'FastAPI', 'React'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Mini Google Play Store',
    description:
      'Built a full-stack app marketplace with Spring Boot REST APIs, JWT auth, PostgreSQL-backed data models, and React client workflows.',
    category: 'Full Stack',
    impact: 'Shipped production-style app-store flows for search, reviews, and role-based access.',
    image: 'project-covers/mini-play-store.svg',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'JWT', 'Docker'],
    github: DEFAULT_GITHUB
  },
  {
    title: '3D Dungeon Crawler Engine',
    description:
      'Developed a first-person raycasting game engine with DDA wall rendering, A* enemy pathfinding, AABB collisions, and depth-sorted sprites.',
    category: 'Game Development',
    impact: 'Delivered performant real-time rendering and gameplay systems in C/SDL2.',
    image: 'project-covers/dungeon-crawler.svg',
    stack: ['C', 'SDL2'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Local Mood Board Generator',
    description:
      'Built an offline MCP workflow for clustering image collections with CLIP embeddings and generating contextual summaries with local LLMs.',
    category: 'AI Systems',
    impact: 'Enabled private, local-first creative ideation pipelines without external APIs.',
    image: 'project-covers/moodboard-generator.svg',
    stack: ['Python', 'FastAPI', 'CLIP', 'Ollama', 'MCP'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Neuro-Flex Accessible Reader',
    description:
      'Built a modular desktop reader that extracts and cleans web content, supports focus mode, and runs asynchronous text-to-speech.',
    category: 'Product Engineering',
    impact: 'Improved accessible reading ergonomics with responsive, config-driven controls.',
    image: 'project-covers/accessible-reader.svg',
    stack: ['Java', 'JavaFX', 'JSoup', 'HTTP', 'TTS'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Pitch Deck Verifier Agent',
    description:
      'Built a multi-agent claim-verification flow that extracts statements from pitch decks, validates sources on the web, and drafts investor questions.',
    category: 'AI Systems',
    impact: 'Automated diligence prep with evidence-backed question generation.',
    image: 'project-covers/pitch-verifier.svg',
    stack: ['Python', 'Gemini API', 'LangChain', 'Tavily API', 'Gmail'],
    github: DEFAULT_GITHUB
  },
  {
    title: 'Real-Time Object Detection & Tagging',
    description:
      'Implemented a frame-level detection and labeling pipeline for video streams targeting analytics and moderation workloads.',
    category: 'ML/CV',
    impact: 'Sustained around 20 FPS object tagging for live analysis scenarios.',
    image: 'project-covers/realtime-detection.svg',
    stack: ['PyTorch', 'OpenCV'],
    github: DEFAULT_GITHUB
  }
];

const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
      const queryMatch =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query));

      return categoryMatch && queryMatch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <PageLayout
      title="Projects"
      subtitle="Selected Work"
      description="Production AI systems, applied computer vision, healthcare tools, and full-stack products built for real outcomes."
    >
      <section className="projects-modern">
        <motion.div
          className="projects-controls"
          initial={{ opacity: 0, y: 44, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: cinematicEase }}
        >
          <div className="projects-filters" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -2, transition: { duration: 0.2, ease: cinematicEase } }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.input
            type="search"
            className="projects-search"
            placeholder="Search by title, stack, keyword"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search projects"
            whileFocus={{ scale: 1.01 }}
          />
        </motion.div>

        <motion.div className="projects-grid-modern" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const hasGithub = Boolean(project.github && project.github !== DEFAULT_GITHUB);
              return (
                <motion.article
                  className="project-card-modern"
                  key={project.title}
                  layout
                  initial={{
                    opacity: 0,
                    y: 72,
                    filter: 'blur(12px)',
                    scale: 0.95
                  }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  viewport={{ once: false, amount: 0.22 }}
                  transition={{ duration: 0.85, ease: cinematicEase }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(6px)', scale: 0.99, transition: { duration: 0.24 } }}
                  whileHover={{ y: -6, transition: { duration: 0.22, ease: cinematicEase } }}
                >
                  <span className="category">{project.category}</span>

                  {project.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${project.image}`}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="project-image placeholder">
                      <span>{project.title}</span>
                    </div>
                  )}

                  <h3>{project.title}</h3>
                  <p className="description">{project.description}</p>
                  <p className="impact">{project.impact}</p>

                  <div className="stack">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {(hasGithub || project.live) && (
                    <div className="links">
                      {hasGithub && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      )}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default Projects;

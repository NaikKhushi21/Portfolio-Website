import React from 'react';
import { motion, type Variants } from 'framer-motion';
import './PageLayout.css';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

// Shared animation configuration for consistent performance
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5, 
      ease: 'easeOut'
    }
  })
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <motion.div
      className="page-layout"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <div className="page-header">
        {subtitle && <h2 className="page-subtitle">{subtitle}</h2>}
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="page-content">
        {children}
      </div>
    </motion.div>
  );
};

export default PageLayout; 
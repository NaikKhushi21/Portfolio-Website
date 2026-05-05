import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import './PageLayout.css';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  asideTitle?: string;
  asideBody?: string;
  asideTags?: string[];
  children: React.ReactNode;
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.24, ease: 'easeOut' }
};

const headerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02
    }
  }
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
        scale: 1,
    transition: {
      delay: Math.min(i * 0.03, 0.18),
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  subtitle,
  description,
  asideTitle,
  asideBody,
  asideTags,
  children
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ['start start', 'end start']
  });
  const headerY = useTransform(scrollYProgress, [0, 0.25], [0, -22]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.92]);

  return (
    <motion.div
      ref={rootRef}
      className="page-layout"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <motion.div
        className="page-header"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <div className="page-header-main">
          {subtitle && (
            <motion.h2 className="page-subtitle" variants={headerItem}>
              {subtitle}
            </motion.h2>
          )}
          <motion.h1 className="page-title" variants={headerItem}>
            {title}
          </motion.h1>
          {description && (
            <motion.p className="page-description" variants={headerItem}>
              {description}
            </motion.p>
          )}
        </div>

        {(asideTitle || asideBody || asideTags?.length) && (
          <motion.aside className="page-header-aside" aria-label="Section context" variants={headerItem}>
            {asideTitle && <h3>{asideTitle}</h3>}
            {asideBody && <p>{asideBody}</p>}
            {asideTags && asideTags.length > 0 && (
              <div className="page-header-tags">
                {asideTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </motion.aside>
        )}
      </motion.div>
      <motion.div
        className="page-rule"
        initial={{ scaleX: 0, opacity: 0.3 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.04 }}
      />
      <motion.div
        className="page-content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: 'easeOut', delay: 0.08 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageLayout;

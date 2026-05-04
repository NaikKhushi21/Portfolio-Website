import type { Variants } from 'framer-motion';

export const cinematicEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const sectionStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04
    }
  }
};

export const sectionItem: Variants = {
  hidden: { opacity: 0, y: 26, filter: 'blur(7px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.48, ease: cinematicEase }
  }
};

export const timelineStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.03
    }
  }
};

export const timelineItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)', scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { duration: 0.45, ease: cinematicEase }
  }
};

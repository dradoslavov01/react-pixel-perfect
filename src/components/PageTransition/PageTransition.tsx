import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
  direction: 'left' | 'right';
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, direction = 'left' }) => {
  const location = useLocation();

  const motionSettings: MotionProps = {
    initial: { x: direction === 'left' ? -300 : 300 },
    animate: { x: 0 },
    exit: { opacity: 0, x: direction === 'left' ? 300 : -300 },
    transition: { type: 'spring', stiffness: 140, damping: 30 },
  };

  return (
    <motion.div key={location.pathname} {...motionSettings}>
      {children}
    </motion.div>
  );
};

export default PageTransition;

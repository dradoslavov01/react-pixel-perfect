import React, { useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './ContentWrapper.module.css';

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  const location = useLocation();
  const [progressBarPercentage, setProgressBarPercentage] = useState<number>(0);

  useEffect(() => {
    if (location.pathname === '/') {
      setProgressBarPercentage(0);
    } else {
      setProgressBarPercentage(100);
    }
  }, [location.pathname]);

  return (
    <div className={styles.contentWrapper}>
      <ProgressBar progress={progressBarPercentage} />
      {children}
    </div>
  );
};

export default ContentWrapper;

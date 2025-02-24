import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '@components/ContentWrapper/ContentWrapper';
import Button from '@components/Button/Button';
import successImage from '@assets/success.svg';
import styles from './SuccessPage.module.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <ContentWrapper>
      <div className={styles.successContainer}>
        <p className={styles.successText}>Success!</p>
        <img src={successImage} alt='Success' />
      </div>
      <Button
        text='Back'
        classNames={[styles.backButton]}
        onClick={handleClick}
      />
    </ContentWrapper>
  );
};

export default SuccessPage;

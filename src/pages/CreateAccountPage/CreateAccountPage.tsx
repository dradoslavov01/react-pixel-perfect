import React from 'react';
import ContentWrapper from '@components/ContentWrapper/ContentWrapper';
import InputForm from '@components/InputForm/InputForm';
import styles from './CreateAccountPage.module.css';

const CreateAccountPage = () => (
  <ContentWrapper>
    <div className={styles.createAccountContainer}>
      <section className={styles.information}>
        <h1 className={styles.title}>Step 1</h1>
        <h2 className={styles.subTitle}>Account Information</h2>
        <div className={styles.separator} />
        <p className={styles.description}>
          Start by entering your basic details to personalize your profile. This
          step ensures a secure and tailored experience for you. Your journey
          begins here, and we're here to make it easy.
        </p>
        <p className={styles.description}>
          Passwords must be 12+ characters, include uppercase, lowercase, digits
          (0-9), and a special character (e.g., !@#$).
        </p>
      </section>
      <InputForm />
    </div>
  </ContentWrapper>
);

export default CreateAccountPage;

import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  id,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input {...props} id={id} className={styles.input} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default InputField;

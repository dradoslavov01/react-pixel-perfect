import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classNames: string[];
}

const Button: React.FC<ButtonProps> = ({ text, classNames = [], ...props }) => {
  return (
    <button
      {...props}
      className={[styles.button, ...classNames].join(' ')}
      type='button'
    >
      {text}
    </button>
  );
};

export default Button;

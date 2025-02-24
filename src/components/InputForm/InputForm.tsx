import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '@components/InputField/InputField';
import Button from '@components/Button/Button';
import { inputFieldOptions } from './data';
import { getValidationErrors, formatPhoneNumber } from './validation';
import styles from './InputForm.module.css';

const InputForm = () => {
  const [formValues, setFormValues] = useState(
    inputFieldOptions.reduce((acc, { value }) => {
      acc[value] = '';
      return acc;
    }, {} as Record<string, string>)
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === 'phone') {
      updatedValue = formatPhoneNumber(value);
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: updatedValue,
    }));

    setErrors((prevErrors: Record<string, string>) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleClick = async () => {
    const newErrors = getValidationErrors(formValues);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(
          'https://thebteam.free.beeceptor.com/auth',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
          }
        );

        if (response.ok) {
          navigate('/success');
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className={styles.form}>
      {inputFieldOptions.map(({ id, label, value, type }) => (
        <InputField
        key={id}
        id={id}
        type={type}
        label={label}
        value={formValues[value]}
        name={value}
        onChange={handleChange}
        error={errors[value]}
      />
      ))}
      <Button
        text='Next'
        classNames={[styles.nextButton]}
        onClick={handleClick}
      />
    </form>
  );
};

export default InputForm;

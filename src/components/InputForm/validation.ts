const errorMessages: Record<string, string> = {
  firstName: 'First Name is required',
  lastName: 'Last Name is required',
  email: 'Email is required',
  phone: 'Phone is required',
  username: 'Username is required',
  password: 'Password is required',
  invalidEmail: 'Invalid email address',
  invalidPhone: 'Invalid phone number',
  invalidPassword: 'Password must be at least 12 characters long and include uppercase, lowercase letters, digits (0-9), and a special character (e.g., !@#$)',
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{12,}$/;
  return passwordRegex.test(password);
};

export const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, '');
  if (phoneNumber.length <= 3) {
    return `${phoneNumber}`;
  }
  if (phoneNumber.length <= 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const getValidationErrors = (formValues: Record<string, string>) => {
  const emptyFields: Record<string, string> = {};

  Object.entries(formValues).forEach(([key, value]) => {
    if (!value) {
      emptyFields[key] = errorMessages[key];
    } else {
      if (key === 'email' && !validateEmail(value)) {
        emptyFields[key] = errorMessages['invalidEmail'];
      }

      if (key === 'phone' && !validatePhone(value)) {
        emptyFields[key] = errorMessages['invalidPhone'];
      }

      if (key === 'password' && !validatePassword(value)) {
        emptyFields[key] = errorMessages['invalidPassword'];
      }
    }
  });

  return emptyFields;
};

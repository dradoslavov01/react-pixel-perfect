interface InputFieldOption {
  id: string,
  label: string;
  value: string;
  type: string;
}

export const inputFieldOptions: InputFieldOption[] = [
  {
    id: Math.random().toString(36).substr(2, 9),
    label: 'First Name',
    value: 'firstName',
    type: 'text',
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    label: 'Last Name',
    value: 'lastName',
    type: 'text',
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    label: 'Email',
    value: 'email',
    type: 'text',
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    label: 'Phone',
    value: 'phone',
    type: 'text',
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    label: 'Username',
    value: 'username',
    type: 'text',
  }, 
  {
    id: Math.random().toString(36).substr(2, 9),
    label: 'Password',
    value: 'password',
    type: 'password',
  },
]
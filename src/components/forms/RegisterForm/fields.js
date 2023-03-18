const fields = {
  name: {
    label: 'User name',
    type: 'text',
    name: 'name',
    // required: true,
    // placeholder: 'Name',
  },
  email: {
    label: 'User email',
    type: 'email',
    name: 'email',
    // required: true,
    // placeholder: 'Email',
  },
  password: {
    label: 'User password',
    type: 'password',
    name: 'password',
    // required: true,
    // placeholder: 'Password',
    autoComplete: 'off',
  },
};

export default fields;

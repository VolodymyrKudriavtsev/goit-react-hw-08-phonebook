const fields = {
  name: {
    label: 'User name',
    type: 'text',
    name: 'name',
    // required: true,
    placeholder: 'name',
  },
  email: {
    label: 'User email',
    type: 'email',
    name: 'email',
    // required: true,
    placeholder: 'email',
  },
  password: {
    label: 'User password',
    type: 'password',
    name: 'password',
    minLength: 7,
    // required: true,
    placeholder: 'password',
    autoComplete: 'off',
  },
};

export default fields;

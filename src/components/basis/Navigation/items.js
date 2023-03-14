import shortid from 'shortid';

const items = [
  {
    id: shortid.generate(),
    text: 'Register',
    link: '/register',
    private: false,
  },

  {
    id: shortid.generate(),
    text: 'Log in',
    link: '/login',
    private: false,
  },

  {
    id: shortid.generate(),
    text: 'Contacts',
    link: '/contacts',
    private: true,
  },
];

export default items;

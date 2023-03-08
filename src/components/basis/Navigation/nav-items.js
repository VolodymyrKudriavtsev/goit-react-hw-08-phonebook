import shortid from 'shortid';

const items = [
  {
    id: shortid.generate(),
    text: 'Register',
    link: 'register',
  },
  {
    id: shortid.generate(),
    text: 'Log in',
    link: 'login',
  },
  {
    id: shortid.generate(),
    text: 'Contacts',
    link: 'contacts',
  },
];

export default items;

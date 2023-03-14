import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import items from './items';
import { selectAuth } from 'redux/auth/slice';

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  const filteredItems = !isLoggedIn
    ? items.filter(item => !item.private)
    : items.filter(item => item.private);

  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default Navigation;

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectAuth } from 'redux/auth/slice';

const Appbar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <header>
      <NavLink to="/">LOGO</NavLink>
      <Navigation />
      {isLoggedIn && <UserMenu />}
      <hr />
    </header>
  );
};

export default Appbar;

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectUserIsLogin } from 'redux/auth/slice';

const Appbar = () => {
  const userIsLogin = useSelector(selectUserIsLogin);

  return (
    <header>
      <NavLink to="/">LOGO</NavLink>
      <Navigation />
      {userIsLogin && <UserMenu />}
      <hr />
    </header>
  );
};

export default Appbar;

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectIsLogin } from 'redux/auth/slice';

const Appbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <header>
      <NavLink to="/">LOGO</NavLink>
      <Navigation />
      {isLogin && <UserMenu />}
      <hr />
    </header>
  );
};

export default Appbar;

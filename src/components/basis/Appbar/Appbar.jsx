import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectIsLogin } from 'redux/auth/slice';

const Appbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <header>
      <Navigation />
      {isLogin && <UserMenu />}
    </header>
  );
};

export default Appbar;

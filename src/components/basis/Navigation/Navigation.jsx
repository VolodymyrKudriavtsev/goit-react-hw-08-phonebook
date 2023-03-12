import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { selectIsLogin } from 'redux/auth/slice';

const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div>
      {!isLogin && <NavLink to="register">Register</NavLink>} |{' '}
      {!isLogin && <NavLink to="login">Log in</NavLink>} |{' '}
      {isLogin && <NavLink to="contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;

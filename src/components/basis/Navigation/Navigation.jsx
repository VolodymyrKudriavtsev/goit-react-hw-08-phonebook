import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { selectUserIsLogin } from 'redux/auth/slice';

const Navigation = () => {
  const userIsLogin = useSelector(selectUserIsLogin);

  return (
    <div>
      {!userIsLogin && <NavLink to="register">Register</NavLink>}
      {'   '}
      {!userIsLogin && <NavLink to="login">Log in</NavLink>}
      {'    '}
      {userIsLogin && <NavLink to="contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;

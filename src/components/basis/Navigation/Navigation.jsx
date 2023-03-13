// import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

// import { selecIstUserLogin } from 'redux/auth/slice';

const Navigation = () => {
  // const userIsLogin = useSelector(selecIstUserLogin);

  return (
    <div>
      <NavLink to="register">Register</NavLink>{' '}
      <NavLink to="login">Log in</NavLink>{' '}
      <NavLink to="contacts">Contacts</NavLink>
    </div>
  );
};

export default Navigation;

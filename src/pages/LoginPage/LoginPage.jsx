import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from 'components/forms/LoginForm';

import { selectIsLogin } from 'redux/auth/slice';
import { fetchLogin } from 'redux/auth/operations';

const LoginPage = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(fetchLogin(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;

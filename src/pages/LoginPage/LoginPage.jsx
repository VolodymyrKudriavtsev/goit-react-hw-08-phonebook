import { useDispatch } from 'react-redux';

import LoginForm from 'components/forms/LoginForm';

import { fetchLogin } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(fetchLogin(data));
  };

  return (
    <>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;

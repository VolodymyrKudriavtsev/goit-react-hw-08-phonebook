import { useDispatch } from 'react-redux';

import LoginForm from 'components/forms/LoginForm';

import { fetchLogin } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(fetchLogin(data));
  };

  return (
    <div style={{ position: 'relative', top: '78px', height: '100vh' }}>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

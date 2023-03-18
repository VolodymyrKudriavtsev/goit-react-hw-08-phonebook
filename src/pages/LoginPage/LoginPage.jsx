import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';

import LoginForm from 'components/forms/LoginForm';

import { fetchLogin } from 'redux/auth/operations';

import { styles } from './login-page.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(fetchLogin(data));
  };

  return (
    <Box {...styles.page}>
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};

export default LoginPage;

import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';

import RegisterForm from 'components/forms/RegisterForm';

import { fetchSignup } from 'redux/auth/operations';

import { styles } from './styles';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(fetchSignup(data));
  };

  return (
    <Box {...styles.page}>
      <RegisterForm onSubmit={handleSignup} />
    </Box>
  );
};

export default RegisterPage;

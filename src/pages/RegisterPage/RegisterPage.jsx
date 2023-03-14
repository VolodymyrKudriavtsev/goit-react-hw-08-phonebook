import { useDispatch } from 'react-redux';

import RegisterForm from 'components/forms/RegisterForm';

import { fetchSignup } from 'redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(fetchSignup(data));
  };

  return (
    <>
      <h1>Register Page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from 'components/forms/RegisterForm';

import { selectUserIsLogin } from 'redux/auth/slice';
import { fetchSignup } from 'redux/auth/operations';

const RegisterPage = () => {
  const userIsLogin = useSelector(selectUserIsLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(fetchSignup(data));
  };

  if (userIsLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <h1>Register Page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;

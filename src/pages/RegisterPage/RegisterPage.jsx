import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from 'components/forms/RegisterForm';

import { selectIsLogin } from 'redux/auth/slice';
import { fetchSignup } from 'redux/auth/operations';

const RegisterPage = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(fetchSignup(data));
  };

  if (isLogin) {
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

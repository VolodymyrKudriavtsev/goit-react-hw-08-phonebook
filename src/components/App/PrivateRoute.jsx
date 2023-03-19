import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Progress } from '@chakra-ui/react';

import { selectAuth } from 'redux/auth/slice';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Progress isIndeterminate />;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

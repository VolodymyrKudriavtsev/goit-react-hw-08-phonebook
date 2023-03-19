import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Progress } from '@chakra-ui/react';

import { selectAuth } from 'redux/auth/slice';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <Progress isIndeterminate />;
  }

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoute;

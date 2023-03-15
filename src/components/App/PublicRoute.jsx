import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from 'redux/auth/slice';

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <div>Loading...</div>;
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

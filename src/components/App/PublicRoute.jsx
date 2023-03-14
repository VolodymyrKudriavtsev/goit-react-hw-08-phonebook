import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Suspense } from 'react';

import { selectAuth } from 'redux/auth/slice';

const PublicRoute = () => {
  const {isLogin, token} = useSelector(selectAuth);

  if (!isLogin && token) {
    return <div>Loading...</div>
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default PublicRoute;

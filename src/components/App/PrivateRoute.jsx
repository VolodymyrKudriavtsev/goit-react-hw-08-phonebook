import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

import { selecIstUserLogin } from 'redux/auth/slice';

const PrivateRoute = () => {
  const isUserLogin = useSelector(selecIstUserLogin);

  if (!isUserLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PrivateRoute;

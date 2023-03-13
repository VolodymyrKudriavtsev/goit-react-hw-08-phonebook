import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrent } from 'redux/auth/operations';

import Appbar from 'components/basis/Appbar';
import UserRoutes from './UserRoutes';

// import { Container } from './App.styled';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Appbar />
        <UserRoutes />
      </Suspense>
    </>
  );
};

export default App;

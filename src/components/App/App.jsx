import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrent } from 'redux/auth/operations';

import Appbar from 'components/basis/Appbar';
import UserRoutes from './UserRoutes';

// import { Container } from './App.styled';
import { selectAuth} from 'redux/auth/slice';


const App = () => {
  const dispatch = useDispatch();
  const {isLogin, token} = useSelector(selectAuth);


  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  if (!isLogin && token) {
    return <div>Loading...</div>
  }

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

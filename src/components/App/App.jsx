import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from '@chakra-ui/react';

import { fetchCurrent } from 'redux/auth/operations';

import Appbar from 'components/basis/Appbar';
import UserRoutes from './UserRoutes';

import { selectAuth } from 'redux/auth/slice';

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector(selectAuth);

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  if (!isLoggedIn && token) {
    return <Progress isIndeterminate />;
  }

  return (
    <>
      <Appbar />
      <UserRoutes />
    </>
  );
};

export default App;

import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';

import Button from 'shared/components/Button';
import { ReactComponent as Avatar } from '../../../icons/user.svg';

import { fetchLogout } from 'redux/auth/operations';
import { selectUserInfo } from 'redux/auth/slice';

const UserMenu = () => {
  const { name, email } = useSelector(selectUserInfo);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <Flex>
      <Avatar />
      <Box>
        <p>{name}</p>
        <p>{email}</p>
      </Box>
      <Button onClick={onLogout} type="button">
        Log out
      </Button>
    </Flex>
  );
};

export default UserMenu;

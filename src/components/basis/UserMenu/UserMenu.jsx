import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

import Button from 'shared/components/Button';

import { fetchLogout } from 'redux/auth/operations';
import { selectUserInfo } from 'redux/auth/slice';

const UserMenu = () => {
  const { name, email } = useSelector(selectUserInfo);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <Flex gap="10px">
      <Avatar name={name} />
      <Box>
        <Text as="cite">{name}</Text>
        <Text>{email}</Text>
      </Box>
      <Button onClick={onLogout} type="button">
        Log out
      </Button>
    </Flex>
  );
};

export default UserMenu;

import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex, Avatar, Text, Center } from '@chakra-ui/react';

import Button from 'shared/components/Button';

import { fetchLogout } from 'redux/auth/operations';
import { selectUserInfo, selectIsLoading } from 'redux/auth/slice';

import { styles } from './user-menu.styled';

const UserMenu = () => {
  const { name, email } = useSelector(selectUserInfo);
  const isLoading = useSelector(selectIsLoading);

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
      <Center>
        <Button
          onClick={onLogout}
          type="button"
          isLoading={Boolean(isLoading)}
          {...styles.button}
        >
          Log out
        </Button>
      </Center>
    </Flex>
  );
};

export default UserMenu;

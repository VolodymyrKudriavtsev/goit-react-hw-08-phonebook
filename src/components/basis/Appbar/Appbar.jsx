import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup, Icon, Flex, Spacer } from '@chakra-ui/react';
import { VscHome } from 'react-icons/vsc';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectAuth } from 'redux/auth/slice';

import { styles, bgc } from './appbar.styled';

const Appbar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  const { pathname } = useLocation();

  return (
    <Flex {...styles.header} bg={bgc(pathname)}>
      <ButtonGroup size="lg">
        <Button
          as={NavLink}
          to="/"
          {...styles.button}
          isActive={Boolean(pathname === '/')}
        >
          <Icon as={VscHome} boxSize={8} />
        </Button>
        <Navigation />
      </ButtonGroup>
      <Spacer />
      {isLoggedIn && <UserMenu />}
    </Flex>
  );
};

export default Appbar;

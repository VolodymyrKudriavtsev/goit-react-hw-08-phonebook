import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup, Icon, Flex, Spacer } from '@chakra-ui/react';
import { VscHome } from 'react-icons/vsc';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectAuth } from 'redux/auth/slice';

import settings from './style-settings';

const Appbar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  const { pathname } = useLocation();

  return (
    <Flex {...settings.header}>
      <ButtonGroup size="lg">
        <Button
          as={NavLink}
          to="/"
          {...settings.button}
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

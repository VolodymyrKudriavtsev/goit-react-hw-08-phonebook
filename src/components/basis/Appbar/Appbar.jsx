import { Link as ReachLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { VscHome } from 'react-icons/vsc';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { selectAuth } from 'redux/auth/slice';

const Appbar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <header>
      <ButtonGroup colorScheme="yellow" size="lg">
        <Button as={ReachLink} to="/">
          <Icon as={VscHome} boxSize={8} />
        </Button>
        <Navigation />
      </ButtonGroup>

      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Appbar;

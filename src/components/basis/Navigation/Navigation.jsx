import { useSelector } from 'react-redux';
import { Link as ReachLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import items from './items';
import { selectAuth } from 'redux/auth/slice';

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  const filteredItems = !isLoggedIn
    ? items.filter(item => !item.private)
    : items.filter(item => item.private);

  const elements = filteredItems.map(({ id, text, link }) => (
    <Button as={ReachLink} key={id} to={link}>
      {text}
    </Button>
  ));

  return [elements];
};

export default Navigation;

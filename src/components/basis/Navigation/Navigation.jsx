import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import items from './items';
import settings from './style-settings';
import { selectAuth } from 'redux/auth/slice';

const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  const { pathname } = useLocation();

  const filteredItems = !isLoggedIn
    ? items.filter(item => !item.private)
    : items.filter(item => item.private);

  const elements = filteredItems.map(({ id, text, link }) => {
    return (
      <Button
        as={Link}
        key={id}
        to={link}
        {...settings.button}
        isActive={Boolean(pathname === link)}
      >
        {text}
      </Button>
    );
  });

  return [elements];
};

export default Navigation;

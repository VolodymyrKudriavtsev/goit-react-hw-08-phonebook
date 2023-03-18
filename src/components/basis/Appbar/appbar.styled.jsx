export const styles = {
  button: {
    bg: 'yellow.400',
    boxShadow: 'base',
    _hover: { color: 'white', bg: 'yellow.500' },
    _active: { color: 'white', bg: 'yellow.600' },
  },

  header: {
    zIndex: 1,
    pos: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bg: 'white',
    p: '15px',
    boxShadow: 'lg',
  },
};

export const bgc = path => {
  if (path === '/') {
    return 'green.100';
  } else if (path === '/register') {
    return 'teal.100';
  } else if (path === '/login') {
    return 'blue.100';
  } else if (path === '/contacts') {
    return 'cyan.100';
  } else {
    return 'white';
  }
};

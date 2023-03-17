import { Link as ReactLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import settings from './style-settings';

const WellcomeText = () => {
  return (
    <>
      Welcome to the Phone Book! To use this application, please{' '}
      <Link as={ReactLink} to="/register" {...settings.link}>
        register
      </Link>{' '}
      or{' '}
      <Link as={ReactLink} to="/login" {...settings.link}>
        log in
      </Link>
      .
    </>
  );
};

export default WellcomeText;

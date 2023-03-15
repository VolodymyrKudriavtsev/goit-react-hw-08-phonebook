import { Link as ReachLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

const WellcomeText = () => {
  return (
    <div>
      Welcome to the Phone Book! To use this application, please{' '}
      <Link as={ReachLink} to="/register" color="yellow.400">
        register
      </Link>{' '}
      or{' '}
      <Link as={ReachLink} to="/login" color="yellow.400">
        log in
      </Link>
      .
    </div>
  );
};

export default WellcomeText;

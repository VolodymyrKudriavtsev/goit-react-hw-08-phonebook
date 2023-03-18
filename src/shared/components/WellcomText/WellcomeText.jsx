import { Link as ReactLink } from 'react-router-dom';
import { Link, Text } from '@chakra-ui/react';
import { styles } from './styles';

const WellcomeText = () => {
  return (
    <Text fontSize="5xl" align="center">
      Welcome to the Phone Book! To use this application, please{' '}
      <Link as={ReactLink} to="/register" {...styles.link}>
        register
      </Link>{' '}
      or{' '}
      <Link as={ReactLink} to="/login" {...styles.link}>
        log in
      </Link>
      .
    </Text>
  );
};

export default WellcomeText;

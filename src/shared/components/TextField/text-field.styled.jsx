import { PhoneIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import { VscAccount, VscListFilter } from 'react-icons/vsc';
import { Icon } from '@chakra-ui/icons';

export const icon = props => {
  if (props.name === 'name') {
    return <Icon as={VscAccount} />;
  } else if (props.name === 'email') {
    return <EmailIcon />;
  } else if (props.name === 'password') {
    return <LockIcon />;
  } else if (props.name === 'number') {
    return <PhoneIcon />;
  } else if (props.name === 'filter') {
    return <Icon as={VscListFilter} />;
  } else {
    return null;
  }
};

export const isRequired = props => {
  if (props.name === 'filter') return false;
  return true;
};

export const styles = {
  formControl: {
    bg: 'gray.50',
    mb: '8px',
    p: '10px 10px 15px',
    boxShadow: 'md',
    rounded: 'md',
  },

  icon: {
    pointerEvents: 'none',
    color: 'gray.400',
  },

  input: { size: 'md', variant: 'flushed' },
};

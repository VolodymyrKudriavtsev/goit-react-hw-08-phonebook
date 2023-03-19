import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Flex, Spacer, Text, Box, Avatar } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import Button from 'shared/components/Button';

import { selectOperation } from 'redux/contacts/slice';

import { styles } from './contact-item.styled';

const ContactItem = ({ id, name, number, handleDeleteContact }) => {
  const { operation } = useSelector(selectOperation);

  return (
    <Flex {...styles.item}>
      <Avatar name={name} />
      <Box>
        <Text as="b">{name}</Text>
        <Text>{number}</Text>
      </Box>

      <Spacer />
      <Button
        onClick={handleDeleteContact}
        type="button"
        isLoading={Boolean(operation === id)}
        {...styles.button}
      >
        <DeleteIcon />
      </Button>
    </Flex>
  );
};

ContactItem.propTypes = {
  handleDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

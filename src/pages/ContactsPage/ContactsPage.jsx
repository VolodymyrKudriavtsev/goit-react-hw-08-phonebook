import { useDispatch } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';

import ContactForm from 'components/forms/ContactForm';
import ContactList from 'components/phonebook/ContactList';

import { fetchAddContact } from 'redux/contacts/operations';

import { styles } from './contacts-page.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const handleAddContact = data => {
    dispatch(fetchAddContact(data));
  };

  return (
    <Box {...styles.page}>
      <Box {...styles.wrapper}>
        <Text {...styles.title}>Phonebook</Text>
        <Flex {...styles.flex}>
          <ContactForm onSubmit={handleAddContact} />
          <ContactList />
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactsPage;

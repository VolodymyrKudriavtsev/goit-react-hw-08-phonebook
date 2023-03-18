import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';

import ContactForm from 'components/forms/ContactForm';
import Filter from 'components/phonebook/Filter';
import ContactList from 'components/phonebook/ContactList';

import { fetchAddContact } from 'redux/contacts/operations';

import { styles } from './styles';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const handleAddContact = data => {
    dispatch(fetchAddContact(data));
  };

  return (
    <Box {...styles.page}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Box>
  );
};

export default ContactsPage;

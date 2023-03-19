import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, List, Text, useToast, Progress } from '@chakra-ui/react';

import Filter from '../Filter';
import ContactItem from 'components/phonebook/ContactItem';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/operations';
import { selectFilteredContacts, selectOperation } from 'redux/contacts/slice';

import { styles } from './contact-list.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const { operation, error } = useSelector(selectOperation);
  const toast = useToast();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));

    return toast({
      position: 'top',
      description: 'Contact deleted successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li key={id}>
      <ContactItem
        id={id}
        name={name}
        number={number}
        handleDeleteContact={onDeleteContact}
      />
    </li>
  ));

  const isContacts = Boolean(filteredContacts.length);

  if (operation === 'fetch' && !error) {
    return <Progress isIndeterminate />;
  }

  return (
    <>
      {isContacts && (
        <Box {...styles.box}>
          <Text {...styles.title}>Contact list</Text>
          <Filter />
          <List {...styles.list}>{elements}</List>
        </Box>
      )}
    </>
  );
};

export default ContactList;

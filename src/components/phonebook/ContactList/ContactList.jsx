import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, List, Text } from '@chakra-ui/react';

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

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li key={id}>
      <ContactItem
        id={id}
        name={name}
        number={number}
        handleDeleteContact={() => dispatch(fetchDeleteContact(id))}
      />
    </li>
  ));

  const isContacts = Boolean(filteredContacts.length);

  if (operation === 'fetch' && !error) {
    return <div>Loading...</div>;
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

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactItem from 'components/ContactItem';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/slice';

import { Contacts } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);

  const elements = filteredContacts.map(({ id, name, phone }) => (
    <ContactItem
      key={id}
      name={name}
      phone={phone}
      handleDeleteContact={() => dispatch(fetchDeleteContact(id))}
    />
  ));

  const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      {isContacts && (
        <Contacts>
          <ul>{elements}</ul>
        </Contacts>
      )}
    </>
  );
};

export default ContactList;

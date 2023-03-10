import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactItem from 'components/phonebook/ContactItem';

import {
  fetchAllContacts,
  fetchDeleteContact,
} from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/slice';

// import { Contacts } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      name={name}
      number={number}
      handleDeleteContact={() => dispatch(fetchDeleteContact(id))}
    />
  ));

  const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      {isContacts && (
        <div>
          <ul>{elements}</ul>
        </div>
      )}
    </>
  );
};

export default ContactList;

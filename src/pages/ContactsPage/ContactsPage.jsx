import { useDispatch } from 'react-redux';

import ContactForm from 'components/forms/ContactForm';
import Filter from 'components/phonebook/Filter';
import ContactList from 'components/phonebook/ContactList';

import { fetchAddContact } from 'redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const handleAddContact = data => {
    dispatch(fetchAddContact(data));
  };

  return (
    <div style={{ position: 'relative', top: '78px', height: '100vh' }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

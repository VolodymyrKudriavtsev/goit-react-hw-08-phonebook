import ContactForm from 'components/phonebook/ContactForm';
import Filter from 'components/phonebook/Filter';
import ContactList from 'components/phonebook/ContactList';

const ContactsPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;

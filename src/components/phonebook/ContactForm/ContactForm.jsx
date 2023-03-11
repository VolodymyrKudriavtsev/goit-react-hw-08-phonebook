import { useSelector, useDispatch } from 'react-redux';

import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';
import { ReactComponent as PlusIcon } from '../../../icons/plus.svg';
import { ReactComponent as SpinnerIcon } from '../../../icons/spinner.svg';

//! import useForm from 'shared/hooks/useForm';
import fields from './fields';
import { fetchAddContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/slice';

// import { Form } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;

    for (const contact of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase())
        return alert(`${name} is already in contacts.`);
    }

    dispatch(fetchAddContact({ name, phone }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleAddContact}>
      <TextField {...fields.name} />
      <TextField {...fields.phone} />
      <Button>
        <PlusIcon width="20" height="20" />
        <SpinnerIcon width="20" height="20" />
        Add contact
      </Button>
      {/* <br />
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button> */}
    </form>
  );
};

export default ContactForm;

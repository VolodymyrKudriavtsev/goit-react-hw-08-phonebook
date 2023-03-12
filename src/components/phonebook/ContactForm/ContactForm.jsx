import { useSelector, useDispatch } from 'react-redux';

import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';
import { ReactComponent as PlusIcon } from '../../../icons/plus.svg';
import { ReactComponent as SpinnerIcon } from '../../../icons/spinner.svg';

//! import useForm from 'shared/hooks/useForm';
import fields from './fields';
import { fetchAddContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/contacts/slice';

// import { Form } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    for (const contact of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase())
        return alert(`${name} is already in contacts.`);
    }

    dispatch(fetchAddContact({ name, number }));
    e.target.reset();
  };

  return (
    <form onSubmit={handleAddContact}>
      <TextField {...fields.name} />
      <TextField
        {...fields.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <Button>
        {isLoading ? (
          <SpinnerIcon width="20" height="20" />
        ) : (
          <PlusIcon width="20" height="20" />
        )}
      </Button>
    </form>
  );
};

export default ContactForm;

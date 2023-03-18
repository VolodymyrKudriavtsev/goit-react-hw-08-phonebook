import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, chakra } from '@chakra-ui/react';

import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';
import { ReactComponent as PlusIcon } from '../../../icons/plus.svg';
import { ReactComponent as SpinnerIcon } from '../../../icons/spinner.svg';

import initialState from './initialState';
import fields from './fields';
import { selectAllContacts, selectOperation } from 'redux/contacts/slice';

import { styles } from './contact-form.styled';

const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(selectAllContacts);
  const { operation } = useSelector(selectOperation);

  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value } = target;
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;

    for (const contact of contacts) {
      if (name.toLowerCase() === contact.name.toLowerCase())
        return alert(`${name} is already in contacts.`);
    }

    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <chakra.form onSubmit={handleSubmit} {...styles.form}>
      <Text {...styles.title}>Add new contact</Text>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField
        value={number}
        handleChange={handleChange}
        {...fields.number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      />
      <Button>
        {operation === 'add' ? (
          <SpinnerIcon width="20" height="20" />
        ) : (
          <PlusIcon width="20" height="20" />
        )}
      </Button>
    </chakra.form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

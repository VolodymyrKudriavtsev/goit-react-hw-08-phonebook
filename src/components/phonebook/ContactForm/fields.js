const fields = {
  name: {
    label: 'Name',
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
    placeholder: 'Contact name',
  },
  number: {
    label: 'Number',
    type: 'text',
    name: 'number',
    // pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',

    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    required: true,
    placeholder: 'Contact number',
  },
};

export default fields;

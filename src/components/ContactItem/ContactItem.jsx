import PropTypes from 'prop-types';

// import { Contact } from './ContactItem.styled';

const ContactItem = ({ name, phone, handleDeleteContact }) => {
  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

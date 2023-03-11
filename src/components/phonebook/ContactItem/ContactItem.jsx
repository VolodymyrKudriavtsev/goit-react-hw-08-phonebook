import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'shared/components/Button';
import { ReactComponent as BucketIcon } from '../../../icons/bucket.svg';
import { ReactComponent as CrossIcon } from '../../../icons/cross.svg';
import { ReactComponent as SpinnerIcon } from '../../../icons/spinner.svg';

import { selectIsLoading } from 'redux/contacts/slice';

// import { Contact } from './ContactItem.styled';

const ContactItem = ({ name, phone, handleDeleteContact }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <Button onClick={handleDeleteContact} type="button">
        {isLoading && <SpinnerIcon width="20" height="20" />}
        <BucketIcon width="20" height="20" />
        <CrossIcon width="20" height="20" />
        Delete
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'shared/components/Button';
import { ReactComponent as BucketIcon } from '../../../icons/bucket.svg';
import { ReactComponent as SpinnerIcon } from '../../../icons/spinner.svg';

import { selectIsContactsLoading } from 'redux/contacts/slice';

// import { Contact } from './ContactItem.styled';

const ContactItem = ({ name, number, handleDeleteContact }) => {
  const isContactsLoading = useSelector(selectIsContactsLoading);

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <Button onClick={handleDeleteContact} type="button">
        {isContactsLoading ? (
          <SpinnerIcon width="20" height="20" />
        ) : (
          <BucketIcon width="20" height="20" />
        )}
      </Button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

const ActionButton = ({
  children,
  onClick,
  type = 'submit',
  isLoading = false,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      isLoading={isLoading}
      rounded="full"
      boxShadow="md"
      {...props}
    >
      {children}
    </Button>
  );
};

ActionButton.defaultProps = {
  onClick: () => null,
  children: null,
};

ActionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default ActionButton;

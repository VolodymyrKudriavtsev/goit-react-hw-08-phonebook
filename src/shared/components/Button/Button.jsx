import PropTypes from 'prop-types';
import { chakra } from '@chakra-ui/react';

const Button = ({ children, onClick, type = 'submit' }) => {
  return (
    <chakra.button onClick={onClick} type={type} bg="red">
      {children}
    </chakra.button>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;

import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'submit' }) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
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

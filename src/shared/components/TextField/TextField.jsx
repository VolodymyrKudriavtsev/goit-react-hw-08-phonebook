import PropTypes from 'prop-types';
const TextField = ({ label, handleChange, ...props }) => {
  return (
    <label>
      {label}
      <input onChange={handleChange} {...props} />
    </label>
  );
};

TextField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextField;

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <label>
      {label}
      <input onChange={handleChange} {...props} />
    </label>
  );
};

export default TextField;

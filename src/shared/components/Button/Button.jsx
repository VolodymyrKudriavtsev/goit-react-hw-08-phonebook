const Button = ({ children, type = 'submit' }) => {
  return <button type={type}>{children}</button>;
};

export default Button;

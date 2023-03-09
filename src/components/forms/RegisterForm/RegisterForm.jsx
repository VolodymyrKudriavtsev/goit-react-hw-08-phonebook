import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Sign up</Button>
    </form>
  );
};

export default RegisterForm;

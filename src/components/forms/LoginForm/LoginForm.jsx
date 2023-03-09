import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';

const LoginterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Log in</Button>
    </form>
  );
};

export default LoginterForm;

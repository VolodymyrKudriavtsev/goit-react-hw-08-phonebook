import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { chakra, Text } from '@chakra-ui/react';

import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';

import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';
import { selectIsLoading } from 'redux/auth/slice';

import { styles } from './register-form.styled';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  const isLoading = useSelector(selectIsLoading);

  return (
    <chakra.form onSubmit={handleSubmit} {...styles.form}>
      <Text {...styles.title}>Register Form</Text>

      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button colorScheme="teal" isLoading={Boolean(isLoading)}>
        Sign up
      </Button>
    </chakra.form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { chakra, Text } from '@chakra-ui/react';

import TextField from 'shared/components/TextField';
import Button from 'shared/components/Button';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import fields from './fields';

import { selectIsLoading } from 'redux/auth/slice';

import { styles } from './login-form.styled';

const LoginterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  const isLoading = useSelector(selectIsLoading);

  return (
    <chakra.form onSubmit={handleSubmit} {...styles.form}>
      <Text {...styles.title}>Login Form</Text>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button colorScheme="telegram" isLoading={Boolean(isLoading)}>
        Log in
      </Button>
    </chakra.form>
  );
};

LoginterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginterForm;

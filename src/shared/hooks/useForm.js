import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChandge = ({ target }) => {
    setState(prevState => {
      const { name, value } = target;
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ initialState });
  };

  return { state, setState, handleChandge, handleSubmit };
};

export default useForm;

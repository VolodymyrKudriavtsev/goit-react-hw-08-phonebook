import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value } = target;
      // const { name, value, checked, type } = target;
      // const newValue = type === "checkbox" ? checked : value;
      // return { ...prevState, [name]: newValue };

      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;

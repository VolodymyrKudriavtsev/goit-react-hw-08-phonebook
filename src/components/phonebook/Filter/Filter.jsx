import { useDispatch } from 'react-redux';

import TextField from 'shared/components/TextField';

import fields from './fields';
import { setFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <TextField
        handleChange={handleFilter}
        {...fields.filter}
        isRequired="default"
      />
    </div>
  );
};

export default Filter;

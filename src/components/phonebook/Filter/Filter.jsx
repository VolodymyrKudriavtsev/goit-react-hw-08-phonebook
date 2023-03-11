import { useSelector, useDispatch } from 'react-redux';

import TextField from 'shared/components/TextField';

import fields from './fields';
import { selectFilter, setFilter } from 'redux/filter/slice';

// import { Filtration } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <TextField handleChange={handleFilter} {...fields.filter} />
    </div>
  );
};

export default Filter;

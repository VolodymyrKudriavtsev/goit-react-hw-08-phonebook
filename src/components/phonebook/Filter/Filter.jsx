import { useSelector, useDispatch } from 'react-redux';

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
      <label>
        Find contacts by name
        <input
          value={filter}
          onChange={handleFilter}
          type="text"
          name="filter"
        />
      </label>
    </div>
  );
};

export default Filter;

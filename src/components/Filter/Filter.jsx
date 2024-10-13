import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
};

export default Filter;
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/filtersSlice';

import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setNameFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts"
      onChange={handleFilterChange}
      className={styles.searchBox}
    />
  );
};

export default SearchBox;
import { useDispatch } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <input
  type="text"
  placeholder="Search contacts"
  onChange={handleChange}
  className={styles.searchBox}
/>
  );
};

export default SearchBox;
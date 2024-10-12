import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setNameFilter } from '../../redux/filters/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Debounce effect to limit dispatch calls
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setNameFilter(inputValue));
    }, 300); // Adjust delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, dispatch]);

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search contacts..."
        value={inputValue}
        onChange={handleChange}
        className={styles.searchBox}
      />
      <div className={styles.hint}>Type to search for contacts</div>
    </div>
  );
};

export default SearchBox;
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectNameFilter } from '../../redux/filters/filtersSlice'; // Замість changeFilter
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleChange}
        aria-label="Filter contacts by name" 
      />
    </div>
  );
};

export default SearchBox;
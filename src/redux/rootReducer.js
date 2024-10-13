import { combineReducers } from 'redux';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;
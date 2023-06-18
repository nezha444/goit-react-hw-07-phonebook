import { combineReducers } from 'redux';
import { phonebookReducer } from './Phonebook/phonebookSlice';

// export const reducer = {
//   phonebook: phonebookReducer,
// };
export const reducer = combineReducers({
  phonebook: phonebookReducer,
});

import { combineReducers } from 'redux';
import { companiesReducer } from './companies.reducer';

// Combine all reducers
export default combineReducers({
  companies: companiesReducer
})
import { combineReducers } from 'redux';
import { companiesReducer } from './companies.reducer';
import { companyReducer } from './company.reducer';

// Combine all reducers
export default combineReducers({
  companies: companiesReducer,
  companyInfo: companyReducer
})
import { combineReducers } from 'redux';
import { companiesReducer } from './companies.reducer';
import { companyReducer } from './company.reducer';
import { userReducer } from './user.reducer';

// Combine all reducers
export default combineReducers({
  companies: companiesReducer,
  companyDetails: companyReducer,
  user: userReducer
})
import { FETCH_COMPANIES_SUCCEEDED } from '../actions/action-types';

const initialState = {
  companies: []
}
// The reducer will be called with an action and it will inspect the action type to decide whether it needs to update the data in the store
export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Note: we don't need to handle FETCH_COMPANIES_REQUESTED because the saga will take care of that

    case FETCH_COMPANIES_SUCCEEDED:
      const { companies } = action.payload;
      
      return { ...state, companies }
    
    default:
      // Return the current state if there's no matching action type
      return state;
  }
}
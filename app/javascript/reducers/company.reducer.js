import {
  FETCH_COMPANY_SUCCEEDED,
  UPDATE_COMPANY_SUCCEEDED,
  CREATE_COMPANY_SUCCEEDED
} from "../actions/action-types"

const initialState = {
  companyData: {}
}

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY_SUCCEEDED:
    case UPDATE_COMPANY_SUCCEEDED:
    case CREATE_COMPANY_SUCCEEDED:
      const { companyData } = action.payload
      return { ...state, companyData }
    
    default:
      return state
  }
}
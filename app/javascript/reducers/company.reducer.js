import { FETCH_COMPANY_SUCCEEDED } from "../actions/action-types"

const initialState = {
  companyInfo: {}
}

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY_SUCCEEDED:
      const { companyInfo } = action.payload
      return { ...state,  companyInfo}
      
    default:
      return state
  }
}
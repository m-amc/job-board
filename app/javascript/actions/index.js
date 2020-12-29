import {
  FETCH_COMPANIES_REQUESTED,
  FETCH_COMPANIES_SUCCEEDED
} from './action-types';

export const fetchCompanies = () => ({
  type: FETCH_COMPANIES_REQUESTED
})

// Because we are getting data (companies) back from the endpoint, we need to call the action creator with a parameter so we can pass it to the payload
export const fetchCompaniesSucceeded = (companies) => {
  return {
    type: FETCH_COMPANIES_SUCCEEDED,
    payload: {
      companies
    }
  }
}
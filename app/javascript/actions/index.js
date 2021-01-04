import {
  FETCH_COMPANIES_REQUESTED,
  FETCH_COMPANIES_SUCCEEDED,
  FETCH_COMPANY_REQUESTED,
  FETCH_COMPANY_SUCCEEDED,
  UPDATE_COMPANY,
  UPDATE_COMPANY_SUCCEEDED
} from './action-types';

export const fetchCompanies = () => ({
  type: FETCH_COMPANIES_REQUESTED
})

// Because we are getting data (companies) back from the endpoint, we need to call the action creator with a parameter so we can pass it to the payload
export const fetchCompaniesSucceeded = companies => {
  return {
    type: FETCH_COMPANIES_SUCCEEDED,
    payload: {
      companies
    }
  }
}

// fetchCompany action takes in a slug as argument. The slug is the parameterize company name that we wanted to fetch! This is needed by the api e.g. /api/v1/companies/abc-company
export const fetchCompany = (slug) => {
  return {
    type: FETCH_COMPANY_REQUESTED,
    payload: {
      slug
    }
  }
}

export const fetchCompanySucceeded = companyInfo => {
  return {
    type: FETCH_COMPANY_SUCCEEDED,
    payload: {
      companyInfo
    }
  }
}

export const updateCompany = (slug, data) => {
  return {
    type: UPDATE_COMPANY,
    payload: {
      slug,
      data
    }
  }
}

export const updateCompanySucceeded = companyInfo => {
  return {
    type: UPDATE_COMPANY_SUCCEEDED,
    payload: {
      companyInfo
    }
  }
}
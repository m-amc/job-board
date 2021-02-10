import {
  CREATE_COMPANY_REQUESTED,
  CREATE_COMPANY_SUCCEEDED,
  FETCH_COMPANIES_REQUESTED,
  FETCH_COMPANIES_SUCCEEDED,
  FETCH_COMPANY_REQUESTED,
  FETCH_COMPANY_SUCCEEDED,
  UPDATE_COMPANY,
  UPDATE_COMPANY_SUCCEEDED,
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCEEDED,
  LOGOUT_USER_REQUESTED,
  LOGOUT_USER_SUCCEEDED,
  CHECK_API_LOGIN_STATUS,
  FETCH_API_LOGIN_STATUS,
  FETCH_API_LOGIN_STATUS_SUCCEEDED,
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

export const fetchCompanySucceeded = companyData => {
  return {
    type: FETCH_COMPANY_SUCCEEDED,
    payload: {
      companyData
    }
  }
}

export const updateCompany = (slug, companyData) => {
  return {
    type: UPDATE_COMPANY,
    payload: {
      slug,
      companyData
    }
  }
}

export const updateCompanySucceeded = companyData => {
  return {
    type: UPDATE_COMPANY_SUCCEEDED,
    payload: {
      companyData
    }
  }
}

export const createCompany = companyData => {
  return {
    type: CREATE_COMPANY_REQUESTED,
    payload: {
      companyData
    }
  }
}

export const createCompanySucceeded = companyData => {
  return {
    type: CREATE_COMPANY_SUCCEEDED,
    payload: {
      companyData
    }
  }
}

export const loginUser = companyUser => {
  return {
    type: LOGIN_USER_REQUESTED,
    payload: {
      companyUser
    }
  }
}

export const loginUserSucceeded = companyUser => {
  return {
    type: LOGIN_USER_SUCCEEDED,
    payload: {
      currentUser: companyUser
    }
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER_REQUESTED,
    payload: {}
  }
}

export const logoutUserSucceeded = companyUser => {
  return {
    type: LOGOUT_USER_SUCCEEDED,
    payload: {
      currentUser: companyUser
    }
  }
}

export const fetchAPILoginStatus = () => ({
  type: FETCH_API_LOGIN_STATUS
});

export const fetchAPILoginStatusSucceeded = companyUser => {
  return {
    type: FETCH_API_LOGIN_STATUS_SUCCEEDED,
    payload: {
      currentUser: companyUser
    }
  }
}

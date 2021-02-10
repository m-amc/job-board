import axios from 'axios';

export function* requestCompanies() {
  return yield axios.request({
    method: 'get',
    url: 'api/v1/companies.json'
  })
}

export function* requestCompany(slug) {
  // Note: make sure to have "/" at the start of the url otherwise axios will take it as if it's relative to the current document path!
  return yield axios.request({
    method: 'get',
    url: `/api/v1/companies/${slug}.json`
  })
}

export function* updateCompany({slug, companyData}) {
  return yield axios.request({
    method: 'patch',
    url: `/api/v1/companies/${slug}.json`,
    data: {
      company: companyData
    }
  })
}

/**
 * @param {Object} companyData - the object in handleCreateCompany action.payload
 * Note: the company_params in CompaniesController expects the data to be nested inside the "company" object that's why we need to do that in the data object below.
 */
export function* createCompany({ companyData }) {
  return yield axios.request({
    method: 'post',
    url: '/api/v1/companies.json',
    data: {
      company: companyData
    },
    withCredentials: true
  })
}

export function* loginUser({ companyUser}) {
  return yield axios.request({
    method: 'post',
    url: '/api/v1/login.json',
    data: {
      session: {
        user: companyUser
      }
    },
    withCredentials: true
  })
}

export function* logoutUser() {
  return yield axios.request({
    method: 'delete',
    url: '/api/v1/logout.json',
    withCredentials: true
  })
}

export function* requestAPILoginStatus() {
  return yield axios.request({
    method: 'get',
    url: '/api/v1/logged_in.json',
    withCredentials: true
  })
}
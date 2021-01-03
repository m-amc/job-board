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
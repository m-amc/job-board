import axios from 'axios';

export function* requestCompanies() {
  return yield axios.request({
    method: 'get',
    url: 'api/v1/companies.json'
  })
}
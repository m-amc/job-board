/**
 * The handler is what connects the root saga to the actual request
 */
import { call, put } from 'redux-saga/effects';
import {
  fetchCompaniesSucceeded,
  fetchCompanySucceeded
} from '../../actions';
import {
  requestCompanies,
  requestCompany
} from '../requests/companies.request.saga';

export function* handleFetchCompaniesRequest() {
  try {
    const response = yield call(requestCompanies)

    // data object that comes back from the response of calling requestCompanies
    const { data } = response;

    // We want to send this data to the reducer.  We do this by dispatching fetchCompaniesSucceeded action so the reducer can take care of updating the store. Note "data.data" because it's where the array of companies is located.
    yield put(fetchCompaniesSucceeded(data.data))
  } catch (error) {
    console.log(error)
  }
}

// handleFetchCompanyRequest takes in the "action" as argument so we can use the payload.slug property of the action creator to send the request to the endpoint.
export function* handleFetchCompanyRequest(action) {
  try {
    const response = yield call(requestCompany, action.payload.slug)

    const { data } = response;

    // Because we are fetching individual company info, we can directly pass data.data.attributes response to the action creator. we can't do the same in the company listing!
    yield put(fetchCompanySucceeded(data.data.attributes))
  } catch (error) {
    console.log(error)
  }
}
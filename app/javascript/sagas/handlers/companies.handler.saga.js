/**
 * The handler is what connects the root saga to the actual request
 */
import { call, put } from 'redux-saga/effects';
import { fetchCompaniesSucceeded } from '../../actions';
import { requestCompanies } from '../requests/companies.request.saga';

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
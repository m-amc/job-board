import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import {
  handleCreateCompany,
  handleFetchCompaniesRequest,
  handleFetchCompanyRequest,
  handleUpdateCompany
} from './handlers/companies.handler.saga';
import {
  FETCH_COMPANIES_REQUESTED,
  FETCH_COMPANY_REQUESTED,
  UPDATE_COMPANY,
  CREATE_COMPANY_REQUESTED
} from '../actions/action-types'

/**
 * This is the watcher saga.
 * Saga is listening for every dispatched actions
 */
export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_COMPANIES_REQUESTED, handleFetchCompaniesRequest),
    takeLatest(FETCH_COMPANY_REQUESTED, handleFetchCompanyRequest),
    takeEvery(UPDATE_COMPANY, handleUpdateCompany),
    takeEvery(CREATE_COMPANY_REQUESTED, handleCreateCompany)
  ])
}

/** Explaning what the first yield in the root saga means:
 * Connect the fetch companies action to the handler.
 * When FETCH_COMPANIES_REQUESTED action is dispatched, the watcher
 * saga will take that action and then call handleFetchCompaniesRequest
 * which will make a get request to the companies endpoint. The request
 * will return data. The handler saga will dispatch
 * fetchCompaniesSucceeded action that will be sent to the reducer.
*/
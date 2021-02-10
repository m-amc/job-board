/**
 * The handler is what connects the root saga to the actual request
 */
import { call, put } from 'redux-saga/effects';
import {
  createCompanySucceeded,
  fetchAPILoginStatusSucceeded,
  fetchCompaniesSucceeded,
  fetchCompanySucceeded,
  loginUserSucceeded,
  logoutUserSucceeded,
  updateCompanySucceeded
} from '../../actions';
import {
  requestCompanies,
  requestCompany,
  updateCompany,
  createCompany,
  loginUser,
  logoutUser,
  requestAPILoginStatus
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

export function* handleUpdateCompany(action) {
  try {
    const response = yield call(updateCompany, action.payload)
    const { data } = response;

    // We want to send the updated data from the api response to the reducer so that our state will reflect the updated value
    yield put(updateCompanySucceeded(data.data.attributes))
  } catch (error) {
    console.log(error)
  }
}

export function* handleCreateCompany(action) {
  try {
    const response = yield call(createCompany, action.payload);
    const { data } = response;
    yield put(createCompanySucceeded(data.data.attributes));

    if (data) {
      // Company is also the user so if it is created successfully, we should create a user object in the store. It will be used by AuthRoute.
      const currentUser = {
        email: data.data.attributes.email,
        logged_in: true
      }
      yield put(loginUserSucceeded(currentUser))
    }
  } catch (error) {
    console.log(error)
  }
}

// The user here is the company itself. For now, only companies can login and post jobs
export function* handleUserLogin(action) {
  try {
    const response = yield call(loginUser, action.payload);
    const { data } = response;
    yield put(loginUserSucceeded(data.data.attributes))
  } catch (error) {
    console.log(error)
  }
}

export function* handleUserLogout(action) {
  try {
    const response = yield call(logoutUser, action.payload)
    const { data } = response;
    yield put(logoutUserSucceeded({logged_in: data.logged_in}))
  } catch (error) {
    console.log(error)
  }
}

export function* handleFetchAPILoginStatus() {
  try {
    const response = yield call(requestAPILoginStatus)
    const { data } = response;
    yield put(fetchAPILoginStatusSucceeded(data))
  } catch (error) {
    console.log(error)
  }
}
import {
  LOGIN_USER_SUCCEEDED
} from "../actions/action-types"

const initialState = {
  currentUser: {}
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCEEDED:
      const { currentUser } = action.payload
      return { ...state, currentUser }

    default:
      return state
  }
}
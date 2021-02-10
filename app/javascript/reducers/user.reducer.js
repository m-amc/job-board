import {
  FETCH_API_LOGIN_STATUS_SUCCEEDED,
  LOGIN_USER_SUCCEEDED, LOGOUT_USER_SUCCEEDED
} from "../actions/action-types"

const initialState = {
  currentUser: {}
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER_SUCCEEDED:
    case LOGIN_USER_SUCCEEDED: {
      const { currentUser } = action.payload;
      return { ...state, currentUser }
    }
    case FETCH_API_LOGIN_STATUS_SUCCEEDED: {
      const { currentUser } = action.payload;
      const { user } = currentUser;

      if (currentUser.logged_in && !state.currentUser.logged_in) {
          return { 
          ...state,
          currentUser: {
            email: user.email,
            logged_in: currentUser.logged_in,
            name: user.name,
            slug: user.slug,
          }
        }
      }

      return state
    }
      
    default:
      return state
  }
}
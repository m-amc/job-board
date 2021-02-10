import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const RedirectOnLogin = ({ logged_in: isLoggedIn, ...props }) => {
  if (isLoggedIn) {
    return <Redirect to="/jobs/new" push />
  }

  return <Route {...props} />
}

const mapStateToProps = state => {
  return state.user.currentUser
}

export default connect(mapStateToProps)(RedirectOnLogin)

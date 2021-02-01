import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ logged_in: loggedIn, ...props }) => {
  if (loggedIn) {
    return <Redirect to="/jobs/new" push />
  }

  return <Route {...props} />
}

const mapStateToProps = state => {
  return state.user.currentUser
}

export default connect(mapStateToProps)(AuthRoute)

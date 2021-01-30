import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ userLoggedIn, ...props }) => {
  if (userLoggedIn) {
    return <Redirect to="/jobs/new" push />
  }

  return <Route {...props} />
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.currentUser.logged_in || state.companyDetails.companyData.logged_in
  }
}

export default connect(mapStateToProps)(AuthRoute)

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { CompaniesListing } from './companies/companies-listing';
import { CompanyShow } from './companies/company-show';
import { Home } from './home';
import store from '../store';
import GlobalStyle from './common/global-styles';
import LightTheme from '../themes/light';
import { CompanySignUp } from './companies/company-sign-up';
import { PostJob } from './jobs/post-job';
import { CompanyLogin } from './companies/company-login';
import RedirectOnLogin from './auth-route/redirect-on-login';
import ProtectedRoute from './auth-route/protected-route';
import { FindJobs } from './jobs/find-jobs';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <ProtectedRoute
            exact
            path="/companies"
            component={CompaniesListing}
          />
          <ProtectedRoute
            exact
            path="/companies/:slug"
            component={CompanyShow}
          />
          <Route path="/jobs" component={ FindJobs }/>
          <ProtectedRoute
            exact
            path="/jobs/new"
            component={PostJob}
          />
          <RedirectOnLogin exact path="/join/sign-up">
            <CompanySignUp />
          </RedirectOnLogin>
          <RedirectOnLogin exact path="/login">
            <CompanyLogin />
          </RedirectOnLogin>
          <Route exact path="/logout" />
        </Switch>
      </ThemeProvider>
    </Provider>
  )
}

export default App
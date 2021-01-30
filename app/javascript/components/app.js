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
import AuthRoute from './auth-route';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/companies" component={CompaniesListing} />
          <Route exact path="/companies/:slug" component={CompanyShow} />
          <Route exact path="/jobs/new" component={PostJob} />
          <AuthRoute exact path="/join/sign-up" >
            <CompanySignUp />
          </AuthRoute>
          <AuthRoute exact path="/login">
            <CompanyLogin />
          </AuthRoute>
        </Switch>
      </ThemeProvider>
    </Provider>
  )
}

export default App
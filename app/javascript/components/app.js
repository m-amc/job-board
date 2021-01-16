import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CompaniesListing } from './companies/companies-listing.view';
import { CompanyShow } from './companies/company-show.view';
import store from '../store';
import GlobalStyle from './common/global-styles';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/companies" component={CompaniesListing} />
        <Route exact path="/companies/:slug" component={CompanyShow} />
      </Switch>
    </Provider>
  )
}

export default App
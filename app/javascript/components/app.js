import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { CompaniesListing } from './companies/companies-listing.view';
import { CompanyShow } from './companies/company-show.view';
import store from '../store';
  
const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/companies" component={CompaniesListing} />
        <Route exact path="/companies/:id" component={CompanyShow} />
      </Switch>
    </Provider>
  )
}

export default App
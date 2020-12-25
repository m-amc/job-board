import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CompaniesListing } from './companies/companies-listing.view';
import { CompanyShow } from './companies/company-show.view';

const App = () => {
  return (
    <Switch>
      <Route exact path="/companies" component={CompaniesListing} />
      <Route exact path="/companies/:id" component={CompanyShow} />
    </Switch>
  )
}

export default App
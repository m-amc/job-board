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

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/companies" component={CompaniesListing} />
          <Route exact path="/companies/:slug" component={CompanyShow} />
        </Switch>
      </ThemeProvider>
    </Provider>
  )
}

export default App
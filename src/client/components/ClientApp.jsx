import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import FourOhFour from './404';
import Signup from './Signup';
import Home from '../containers/Home';

const ClientApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default ClientApp;

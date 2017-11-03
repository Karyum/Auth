import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import FourOhFour from './404';
import Signup from './Signup';

const ClientApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

render(<ClientApp />, document.getElementById('app'));

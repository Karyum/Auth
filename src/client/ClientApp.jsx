import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Login from './Login';
import FourOhFour from './404';
import Signup from './Signup';

const history = createBrowserHistory();

const ClientApp = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route component={FourOhFour} />
    </Switch>
  </Router>
);

render(<ClientApp />, document.getElementById('app'));

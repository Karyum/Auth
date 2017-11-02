import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import FourOhFour from './404';

const ClientApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

render(<ClientApp />, document.getElementById('app'));

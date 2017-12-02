import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ClientApp from './components/ClientApp';
import store from './store.config';

const App = () => (
  <Provider store={store}>
    <ClientApp />
  </Provider>
);

render(<App />, document.getElementById('app'));

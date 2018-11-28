import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './client/App.jsx';
import store from './client/store/store';

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

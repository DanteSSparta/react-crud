import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './AppRoute';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { defaultStore } from './store';

ReactDOM.render(
  <Provider store={defaultStore}>
    <AppRoute />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

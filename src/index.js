import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { defaultStore } from './store';

ReactDOM.render(
  <Provider store={defaultStore}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

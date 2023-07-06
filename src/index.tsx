import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import createStore from './store';
import './index.less';

const store = createStore();

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>, document.getElementById('app'));
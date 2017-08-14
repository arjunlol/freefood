import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import index from './reducers';
import './styles/index.css';
import App from './components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  )
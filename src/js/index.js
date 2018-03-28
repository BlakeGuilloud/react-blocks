import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import App from './components/App';

import '../css/main.scss';

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Main from './components/Main';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

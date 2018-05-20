import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import Router from './Router';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

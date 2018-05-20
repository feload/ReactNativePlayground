import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Main';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

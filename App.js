import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {
  render () {
    return (
      <View>
        <Header title="Albums" />
      </View>
    )
  }
}
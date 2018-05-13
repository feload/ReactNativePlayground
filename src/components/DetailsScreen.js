import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends Component {
  render () {
    const { navigation } = this.props;
    const text = navigation.getParam('text', 'No text');

    return (
      <View>
        <Text>Details</Text>
        <Text>{ text }</Text>
      </View>
    )
  }
}
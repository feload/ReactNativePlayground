import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Header from './src/components/Header';

// This is a pretty ugly "fix".
// Seems like by the time I'm writing this, react navigation guys are having some kind of problems.
// So, the only option they give is to ignore this message.
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class HomeScreen extends Component {
  render () {
    return (
      <View>
        <Text>Home screen</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});
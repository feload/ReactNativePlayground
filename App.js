import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen  from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';

// This is a pretty ugly "fix".
// Seems like by the time I'm writing this, react navigation guys are having some kind of problems.
// So, the only option they give is to ignore this message.
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const routerOptions = {
  initialRouteName: 'Home'
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
}, routerOptions);

export default class App extends Component {
  render () {
    return <RootStack />
  }
}
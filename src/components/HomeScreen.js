import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import Header from './Header';

export default class HomeScreen extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <View>
        <Header title="Home screen" />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          title="Go to details"
          onPress={ () => this.props.navigation.navigate('Details', { text: this.state.text }) } />
      </View>
    );
  }
}
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import glamorous from 'glamorous-native';

const StyledText = glamorous.text({
  fontSize: 20
});

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    const { title } = this.props;

    return (
      <View>
        <StyledText>{ title }</StyledText>
      </View>
    )
  }
}
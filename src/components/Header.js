import React, { Component } from 'react';
import { View, Text } from 'react-native';
import glamorous from 'glamorous-native';

const StyledText = glamorous.text({
  fontSize: 20
});

const StyledView = glamorous.view({
  backgroundColor: '#f1f1f1',
  height: 70,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 2,
  position: 'relative'
});

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    const { headerText } = this.props;

    return (
      <StyledView>
        <StyledText>{ headerText }</StyledText>
      </StyledView>
    )
  }
}
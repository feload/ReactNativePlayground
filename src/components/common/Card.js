import React, { Component } from 'react';
import { View } from 'react-native';
import glamorous from 'glamorous-native';

const CardView = glamorous.view({
  margin: 10
});

export default class Card extends Component {
  render () {
    const { children } = this.props;
    return (
      <CardView>
        { children }
      </CardView>
    );
  }
}

export { Card };